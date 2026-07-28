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

          ctx.fillStyle = '#FFFFFF'
          ctx.fillRect(0, 0, size, size)

          ctx.beginPath()
          ctx.arc(size / 2, size / 2, size / 2 - 2, 0, Math.PI * 2)
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
          resolve(canvas.toDataURL('image/png'))
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
  const margin = 15
  const contentWidth = pageWidth - margin * 2

  let y = 14

  // Helper to add clickable text link
  function addClickableLink(
    text: string,
    x: number,
    yPos: number,
    url: string,
    align: 'left' | 'center' | 'right' = 'left',
    color: [number, number, number] = [108, 92, 231]
  ) {
    pdf.setTextColor(color[0], color[1], color[2])
    const width = pdf.getTextWidth(text)
    let startX = x
    if (align === 'center') {
      startX = x - width / 2
    } else if (align === 'right') {
      startX = x - width
    }
    pdf.text(text, startX, yPos)
    const fontSize = pdf.getFontSize()
    const fontHeightMm = fontSize * 0.352778
    pdf.link(startX, yPos - fontHeightMm * 0.8, width, fontHeightMm, { url })
    return width
  }

  // 1. Profile photo
  const imgData = await getProfileImageDataUrl()
  if (imgData) {
    const photoSize = 26
    const photoX = pageWidth / 2 - photoSize / 2
    pdf.addImage(imgData, 'PNG', photoX, y, photoSize, photoSize, undefined, 'FAST')
    pdf.setDrawColor(108, 92, 231)
    pdf.setLineWidth(0.6)
    pdf.circle(pageWidth / 2, y + photoSize / 2, photoSize / 2 + 0.5, 'S')
    y += photoSize + 6
  }

  // 2. Name & Title
  pdf.setFont('helvetica', 'bold')
  pdf.setFontSize(22)
  pdf.setTextColor(40, 40, 40)
  pdf.text('Umer Waqas', pageWidth / 2, y, { align: 'center' })
  y += 6

  pdf.setFont('helvetica', 'bold')
  pdf.setFontSize(11)
  pdf.setTextColor(108, 92, 231)
  pdf.text('AI Full Stack Developer', pageWidth / 2, y, { align: 'center' })
  y += 6

  // 3. Contact Links Row (Email | Phone / WhatsApp)
  pdf.setFont('helvetica', 'normal')
  pdf.setFontSize(9)

  const emailText = 'um.waqas.khan@gmail.com'
  const phoneText = '+92 345 9347900'
  const sepText = '  |  '

  const emailW = pdf.getTextWidth(emailText)
  const phoneW = pdf.getTextWidth(phoneText)
  const sepW = pdf.getTextWidth(sepText)
  const row1TotalW = emailW + sepW + phoneW
  let row1X = (pageWidth - row1TotalW) / 2

  addClickableLink(emailText, row1X, y, 'mailto:um.waqas.khan@gmail.com', 'left', [108, 92, 231])
  row1X += emailW
  pdf.setTextColor(150, 150, 150)
  pdf.text(sepText, row1X, y)
  row1X += sepW
  addClickableLink(phoneText, row1X, y, 'https://wa.me/923459347900', 'left', [108, 92, 231])
  y += 5

  // 4. Portfolio & Profiles Row (GitHub | LinkedIn | Upwork Profile)
  const ghText = 'github.com/umerwaqas92'
  const liText = 'linkedin.com/in/umerwaqas92'
  const uwText = 'Upwork Profile (Top Rated · 100%)'

  const ghW = pdf.getTextWidth(ghText)
  const liW = pdf.getTextWidth(liText)
  const uwW = pdf.getTextWidth(uwText)
  const row2TotalW = ghW + sepW + liW + sepW + uwW
  let row2X = (pageWidth - row2TotalW) / 2

  addClickableLink(ghText, row2X, y, 'https://github.com/umerwaqas92', 'left', [108, 92, 231])
  row2X += ghW
  pdf.setTextColor(150, 150, 150)
  pdf.text(sepText, row2X, y)
  row2X += sepW
  addClickableLink(liText, row2X, y, 'https://linkedin.com/in/umerwaqas92', 'left', [108, 92, 231])
  row2X += liW
  pdf.setTextColor(150, 150, 150)
  pdf.text(sepText, row2X, y)
  row2X += sepW
  addClickableLink(uwText, row2X, y, 'https://www.upwork.com/freelancers/~010219e25749223694', 'left', [108, 92, 231])
  y += 7

  // Divider Line
  pdf.setDrawColor(230, 230, 240)
  pdf.setLineWidth(0.4)
  pdf.line(margin, y, pageWidth - margin, y)
  y += 7

  // Helper for Section Headers
  function addSectionHeader(title: string) {
    pdf.setFont('helvetica', 'bold')
    pdf.setFontSize(12)
    pdf.setTextColor(108, 92, 231)
    pdf.text(title, margin, y)
    y += 2
    pdf.setDrawColor(108, 92, 231)
    pdf.setLineWidth(0.5)
    pdf.line(margin, y, margin + 25, y)
    y += 5
  }

  // 5. Professional Summary
  addSectionHeader('Professional Summary')
  pdf.setFont('helvetica', 'normal')
  pdf.setFontSize(9)
  pdf.setTextColor(60, 60, 60)
  const summary =
    'AI Full Stack Developer crafting end-to-end solutions with React, Next.js, Node.js, Python, Flutter, and AI integration. Leveraging AI-assisted development (Claude Code, Cursor AI) to ship 10x faster. Top Rated on Upwork with 100% Job Success across 48+ international projects.'
  const summaryLines = pdf.splitTextToSize(summary, contentWidth)
  pdf.text(summaryLines, margin, y)
  y += summaryLines.length * 4.2 + 6

  // 6. Technical Skills
  addSectionHeader('Technical Skills')
  pdf.setFont('helvetica', 'normal')
  pdf.setFontSize(9)
  pdf.setTextColor(60, 60, 60)
  const skills = [
    ['Frontend:', 'React, Next.js, TypeScript, Tailwind CSS, Flutter'],
    ['Backend:', 'Node.js, Python, FastAPI, REST APIs, GraphQL, Go'],
    ['AI / ML:', 'OpenAI, Claude, LangChain, Vector DBs, RAG, Fine-tuning'],
    ['Cloud & DevOps:', 'AWS, GCP, Cloudflare, Docker, VPS'],
    ['Mobile Apps:', 'Flutter, Dart, iOS & Android'],
    ['AI Workflows:', 'Claude Code, Cursor AI, rapid prototyping'],
  ]
  skills.forEach(([cat, val]) => {
    pdf.setFont('helvetica', 'bold')
    pdf.setTextColor(40, 40, 40)
    pdf.text(`• ${cat}`, margin + 2, y)
    const catW = pdf.getTextWidth(`• ${cat} `)
    pdf.setFont('helvetica', 'normal')
    pdf.setTextColor(60, 60, 60)
    pdf.text(val, margin + 2 + catW, y)
    y += 4.5
  })
  y += 6

  // 7. Work Experience
  addSectionHeader('Experience')

  const workExp = [
    {
      role: 'Founder & AI Full Stack Developer',
      company: 'Fluttydev Agency',
      date: '2020 - Present',
      desc: 'Leading a team of 20+ delivering AI-powered web, mobile & blockchain solutions. Reduced delivery time by 60% through AI-assisted workflows.',
      linkText: 'OnePDF (iOS App Store)',
      linkUrl: 'https://apps.apple.com/us/app/onepdf-everything-pdf/id6783776629',
    },
    {
      role: 'AI Full Stack Developer',
      company: 'Upwork Freelance',
      date: '2022 - Present',
      desc: 'Top Rated with 100% Job Success across 48+ projects. Specializing in LLM integration, RAG systems, and intelligent automation.',
      linkText: 'Upwork Freelancer Profile',
      linkUrl: 'https://www.upwork.com/freelancers/~010219e25749223694',
    },
    {
      role: 'Full Stack Developer',
      company: 'Tech Solutions Inc.',
      date: '2023 - 2024',
      desc: 'Led migration from legacy systems to modern microservices architecture, reducing page load time by 40%.',
    },
    {
      role: 'Junior Developer',
      company: 'Web Agency',
      date: '2022 - 2023',
      desc: 'Built 10+ responsive web applications for diverse clients.',
    },
  ]

  workExp.forEach((exp) => {
    pdf.setFont('helvetica', 'bold')
    pdf.setFontSize(10)
    pdf.setTextColor(40, 40, 40)
    pdf.text(`${exp.role} — ${exp.company}`, margin, y)

    pdf.setFont('helvetica', 'normal')
    pdf.setFontSize(8.5)
    pdf.setTextColor(120, 120, 120)
    pdf.text(exp.date, pageWidth - margin, y, { align: 'right' })
    y += 4.5

    pdf.setFont('helvetica', 'normal')
    pdf.setFontSize(8.5)
    pdf.setTextColor(70, 70, 70)
    const expLines = pdf.splitTextToSize(exp.desc, contentWidth)
    pdf.text(expLines, margin, y)
    y += expLines.length * 3.8 + 1.5

    if (exp.linkText && exp.linkUrl) {
      pdf.setFont('helvetica', 'normal')
      pdf.setFontSize(8.5)
      pdf.setTextColor(120, 120, 120)
      pdf.text('Link: ', margin, y)
      const linkLabelW = pdf.getTextWidth('Link: ')
      addClickableLink(exp.linkText, margin + linkLabelW, y, exp.linkUrl, 'left', [108, 92, 231])
      y += 4.5
    }

    y += 3
  })

  // 8. Featured Projects
  y += 2
  addSectionHeader('Featured Projects')

  const projectList = [
    {
      name: 'AI Influencer Generator (aiinfluencergenerator.app)',
      tech: 'Next.js, Python, AI Avatars, Remix Studio',
      desc: 'Turn ideas into AI influencers with custom avatars & viral content studio.',
      url: 'https://aiinfluencergenerator.app/',
    },
    {
      name: 'nichetraffickit.com',
      tech: 'Next.js, TypeScript, Go, AI-Assisted Dev',
      desc: 'Traffic analytics & solution platform with automated workflows.',
      url: 'https://nichetraffickit.com',
    },
    {
      name: 'OnePDF: Everything PDF',
      tech: 'iOS Utility App · App Store',
      desc: 'Scan, convert, merge, compress, and sign PDFs securely.',
      url: 'https://apps.apple.com/us/app/onepdf-everything-pdf/id6783776629',
    },
    {
      name: 'Askly — AI Database Agent',
      tech: 'Go, React, Electron, Firebase, AI Agent',
      desc: 'Desktop app allowing natural language SQL queries on DBs.',
      url: 'https://github.com/umerwaqas92',
    },
  ]

  projectList.forEach((proj) => {
    pdf.setFont('helvetica', 'bold')
    pdf.setFontSize(9.5)
    pdf.setTextColor(40, 40, 40)
    addClickableLink(proj.name, margin, y, proj.url, 'left', [108, 92, 231])
    
    const projNameW = pdf.getTextWidth(proj.name)
    pdf.setFont('helvetica', 'italic')
    pdf.setFontSize(8.5)
    pdf.setTextColor(120, 120, 120)
    pdf.text(` (${proj.tech})`, margin + projNameW, y)
    y += 4

    pdf.setFont('helvetica', 'normal')
    pdf.setFontSize(8.5)
    pdf.setTextColor(70, 70, 70)
    pdf.text(proj.desc, margin, y)
    y += 5.5
  })

  pdf.save('Umer_Waqas_Resume.pdf')
}
