import { jsPDF } from 'jspdf'

async function getProfileImageDataUrl(): Promise<string | null> {
  const candidateUrls = [
    '/umer.jpg',
    window.location.origin + '/umer.jpg',
    'umer.jpg',
  ]

  for (const url of candidateUrls) {
    const dataUrl = await new Promise<string | null>((resolve) => {
      const img = new Image()
      img.crossOrigin = 'Anonymous'
      img.onload = () => {
        try {
          const canvas = document.createElement('canvas')
          const size = 300
          canvas.width = size
          canvas.height = size
          const ctx = canvas.getContext('2d')
          if (!ctx) return resolve(null)

          ctx.beginPath()
          ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2)
          ctx.closePath()
          ctx.clip()

          const aspect = img.width / img.height
          let dw = size
          let dh = size
          let dx = 0
          let dy = 0
          if (aspect > 1) {
            dw = size * aspect
            dx = -(dw - size) / 2
          } else {
            dh = size / aspect
            dy = -(dh - size) / 2
          }

          ctx.drawImage(img, dx, dy, dw, dh)
          resolve(canvas.toDataURL('image/jpeg', 0.9))
        } catch {
          resolve(null)
        }
      }
      img.onerror = () => resolve(null)
      img.src = url
    })

    if (dataUrl) return dataUrl
  }

  return null
}

export async function generateResume() {
  const pdf = new jsPDF('p', 'mm', 'a4')
  const pageWidth = pdf.internal.pageSize.getWidth()

  // Header
  pdf.setFont('helvetica', 'bold')
  pdf.setFontSize(24)
  pdf.setTextColor(108, 92, 231)
  pdf.text('Umer Waqas', pageWidth / 2, 22, { align: 'center' })

  pdf.setFont('helvetica', 'normal')
  pdf.setFontSize(11)
  pdf.setTextColor(100, 100, 100)
  pdf.text('AI Full Stack Developer', pageWidth / 2, 30, { align: 'center' })
  pdf.text('um.waqas.khan@gmail.com | +92 345 9347900', pageWidth / 2, 36, { align: 'center' })
  pdf.text('github.com/umerwaqas92 | linkedin.com/in/umerwaqas92', pageWidth / 2, 42, { align: 'center' })

  // Try to load profile photo asynchronously
  const imgData = await getProfileImageDataUrl()

  let yPos = 52
  if (imgData) {
    pdf.addImage(imgData, 'JPEG', pageWidth / 2 - 16, 46, 32, 32, undefined, 'FAST')
    yPos = 84
  }

  // Summary
  pdf.setFont('helvetica', 'bold')
  pdf.setFontSize(13)
  pdf.setTextColor(108, 92, 231)
  pdf.text('Professional Summary', 20, yPos)
  yPos += 7
  pdf.setFont('helvetica', 'normal')
  pdf.setFontSize(9.5)
  pdf.setTextColor(60, 60, 60)
  const summary =
    'AI Full Stack Developer crafting end-to-end solutions with React, Next.js, Node.js, Python, Flutter, and AI integration. Leveraging AI-assisted development (Claude Code, Cursor AI) to ship 10x faster. Top Rated on Upwork with 100% Job Success.'
  const lines = pdf.splitTextToSize(summary, pageWidth - 40)
  pdf.text(lines, 20, yPos)
  yPos += lines.length * 4.5 + 8

  // Skills
  pdf.setFont('helvetica', 'bold')
  pdf.setFontSize(13)
  pdf.setTextColor(108, 92, 231)
  pdf.text('Technical Skills', 20, yPos)
  yPos += 7
  pdf.setFont('helvetica', 'normal')
  pdf.setFontSize(9.5)
  pdf.setTextColor(60, 60, 60)
  const skills = [
    'Frontend: React, Next.js, TypeScript, Tailwind CSS, Flutter',
    'Backend: Node.js, Python, FastAPI, REST APIs, GraphQL',
    'AI/ML: OpenAI, Claude, LangChain, Vector DBs, RAG, Fine-tuning',
    'Cloud: AWS, GCP, Cloudflare, Docker, VPS',
    'Mobile: Flutter, Dart, iOS & Android',
    'AI-Assisted Dev: Claude Code, Cursor AI, rapid prototyping',
  ]
  skills.forEach((skill) => {
    pdf.text(`• ${skill}`, 25, yPos)
    yPos += 5.5
  })
  yPos += 4

  // Experience
  pdf.setFont('helvetica', 'bold')
  pdf.setFontSize(13)
  pdf.setTextColor(108, 92, 231)
  pdf.text('Experience', 20, yPos)
  yPos += 7

  pdf.setFont('helvetica', 'bold')
  pdf.setFontSize(10.5)
  pdf.setTextColor(40, 40, 40)
  pdf.text('Founder & AI Full Stack Developer — Fluttydev Agency', 20, yPos)
  yPos += 4.5
  pdf.setFont('helvetica', 'normal')
  pdf.setFontSize(9)
  pdf.setTextColor(100, 100, 100)
  pdf.text('2020 - Present', 20, yPos)
  yPos += 4.5
  pdf.setFont('helvetica', 'normal')
  pdf.setFontSize(9.5)
  pdf.setTextColor(60, 60, 60)
  const expDesc1 = pdf.splitTextToSize(
    'Leading a team of 20+ delivering AI-powered web, mobile & blockchain solutions. Reduced delivery time by 60% through AI-assisted development workflows.',
    pageWidth - 40,
  )
  pdf.text(expDesc1, 20, yPos)
  yPos += expDesc1.length * 4.5 + 5

  pdf.setFont('helvetica', 'bold')
  pdf.setFontSize(10.5)
  pdf.setTextColor(40, 40, 40)
  pdf.text('AI Full Stack Developer — Upwork Freelance', 20, yPos)
  yPos += 4.5
  pdf.setFont('helvetica', 'normal')
  pdf.setFontSize(9)
  pdf.setTextColor(100, 100, 100)
  pdf.text('2022 - Present', 20, yPos)
  yPos += 4.5
  pdf.setFont('helvetica', 'normal')
  pdf.setFontSize(9.5)
  pdf.setTextColor(60, 60, 60)
  const expDesc2 = pdf.splitTextToSize(
    'Top Rated with 100% Job Success across 48+ projects. Specializing in LLM integration, RAG systems, and intelligent automation.',
    pageWidth - 40,
  )
  pdf.text(expDesc2, 20, yPos)
  yPos += expDesc2.length * 4.5 + 5

  pdf.setFont('helvetica', 'bold')
  pdf.setFontSize(10.5)
  pdf.setTextColor(40, 40, 40)
  pdf.text('Full Stack Developer — Tech Solutions Inc.', 20, yPos)
  yPos += 4.5
  pdf.setFont('helvetica', 'normal')
  pdf.setFontSize(9)
  pdf.setTextColor(100, 100, 100)
  pdf.text('2023 - 2024', 20, yPos)
  yPos += 4.5
  pdf.setFont('helvetica', 'normal')
  pdf.setFontSize(9.5)
  pdf.setTextColor(60, 60, 60)
  const expDesc3 = pdf.splitTextToSize(
    'Led migration from legacy systems to modern microservices architecture, reducing page load time by 40%.',
    pageWidth - 40,
  )
  pdf.text(expDesc3, 20, yPos)
  yPos += expDesc3.length * 4.5 + 5

  pdf.setFont('helvetica', 'bold')
  pdf.setFontSize(10.5)
  pdf.setTextColor(40, 40, 40)
  pdf.text('Junior Developer — Web Agency', 20, yPos)
  yPos += 4.5
  pdf.setFont('helvetica', 'normal')
  pdf.setFontSize(9)
  pdf.setTextColor(100, 100, 100)
  pdf.text('2022 - 2023', 20, yPos)
  yPos += 4.5
  pdf.setFont('helvetica', 'normal')
  pdf.setFontSize(9.5)
  pdf.setTextColor(60, 60, 60)
  pdf.text('Built 10+ responsive websites for diverse clients.', 20, yPos)

  pdf.save('Umer_Waqas_Resume.pdf')
}
