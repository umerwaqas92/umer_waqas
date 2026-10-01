import type { JobProfile } from '../data/jobProfiles'
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

export async function generateResume(job?: JobProfile) {
  const pdf = new jsPDF('p', 'mm', 'a4')
  const pageWidth = pdf.internal.pageSize.getWidth()
  const pageHeight = pdf.internal.pageSize.getHeight()
  const ink: [number, number, number] = [28, 39, 51]
  const muted: [number, number, number] = [83, 98, 112]
  const accent: [number, number, number] = [39, 91, 91]
  const mainX = 78
  const mainWidth = pageWidth - mainX - 15
  let y = 66

  pdf.setProperties({ title: `Umer Waqas | ${job?.title ?? 'Resume'}`, author: 'Umer Waqas' })

  function textStyle(size: number, bold = false, color = ink) {
    pdf.setFont('helvetica', bold ? 'bold' : 'normal')
    pdf.setFontSize(size)
    pdf.setTextColor(...color)
  }

  function paragraph(text: string, x: number, top: number, width: number, size = 9, color = muted) {
    textStyle(size, false, color)
    const lines: string[] = pdf.splitTextToSize(text, width)
    pdf.text(lines, x, top, { lineHeightFactor: 1.4 })
    return top + lines.length * size * 0.352778 * 1.4
  }

  function link(label: string, url: string, x: number, top: number, size = 8.5) {
    textStyle(size, false, accent)
    pdf.textWithLink(label, x, top, { url })
  }

  function pageBackground() {
    pdf.setFillColor(243, 246, 245)
    pdf.rect(0, 55, 68, pageHeight - 55, 'F')
    pdf.setDrawColor(220, 227, 225)
    pdf.setLineWidth(0.25)
    pdf.line(68, 61, 68, pageHeight - 16)
  }

  function ensureSpace(height: number) {
    if (y + height <= pageHeight - 18) return
    pdf.addPage()
    pageBackground()
    textStyle(12, true)
    pdf.text('Umer Waqas', 15, 22)
    textStyle(9, false, muted)
    pdf.text(`${job?.title ?? 'AI Full Stack Developer'} / Continued`, 15, 29)
    y = 48
  }

  function section(title: string, requiredSpace = 25) {
    ensureSpace(requiredSpace)
    textStyle(9, true, accent)
    pdf.text(title.toUpperCase(), mainX, y)
    pdf.setDrawColor(213, 224, 221)
    pdf.setLineWidth(0.3)
    pdf.line(mainX, y + 3, pageWidth - 15, y + 3)
    y += 10
  }

  pageBackground()
  pdf.setFillColor(...accent)
  pdf.rect(0, 0, pageWidth, 2, 'F')
  textStyle(30, true)
  pdf.text('Umer Waqas', 15, 25)
  textStyle(12, false, accent)
  pdf.text(job?.title ?? 'AI Full Stack Developer', 15, 34)
  textStyle(9, false, muted)
  pdf.text(job?.focus ?? 'Web platforms / Mobile applications / AI integration', 15, 43)
  const image = await getProfileImageDataUrl()
  if (image) pdf.addImage(image, 'PNG', pageWidth - 45, 15, 29, 29, undefined, 'FAST')
  pdf.setDrawColor(213, 224, 221)
  pdf.line(15, 49, pageWidth - 15, 49)

  // A quiet sidebar keeps contact details and skills easy to scan.
  let sidebarY = 66
  function sidebarSection(title: string) {
    textStyle(9, true, accent)
    pdf.text(title.toUpperCase(), 15, sidebarY)
    sidebarY += 9
  }
  sidebarSection('Contact')
  link('um.waqas.khan@gmail.com', 'mailto:um.waqas.khan@gmail.com', 15, sidebarY, 8)
  sidebarY += 6
  link('+92 345 9347900', 'https://wa.me/923459347900', 15, sidebarY)
  sidebarY += 12
  sidebarSection('Online profiles')
  for (const [label, url] of [
    ['GitHub / umerwaqas92', 'https://github.com/umerwaqas92'],
    ['LinkedIn / umerwaqas92', 'https://linkedin.com/in/umerwaqas92'],
    ['Upwork profile', 'https://www.upwork.com/freelancers/~010219e25749223694'],
  ]) {
    link(label, url, 15, sidebarY, 8)
    sidebarY += 6
  }
  sidebarY += 6
  sidebarSection('Technical skills')
  const skills = [
    ['Frontend', 'React, Next.js, TypeScript, Tailwind CSS, Flutter'],
    ['Backend', 'Node.js, Python, FastAPI, REST APIs, GraphQL, Go'],
    ['AI / ML', 'OpenAI, Claude, LangChain, Vector DBs, RAG, Fine-tuning'],
    ['Cloud & DevOps', 'AWS, GCP, Cloudflare, Docker, VPS'],
    ['Mobile apps', 'Flutter, Dart, iOS & Android'],
    ['AI workflows', 'Claude Code, Cursor AI, rapid prototyping'],
  ]
  if (job) skills.sort((a, b) => job.skillOrder.indexOf(a[0]) - job.skillOrder.indexOf(b[0]))
  for (const [label, value] of skills) {
    textStyle(8.5, true)
    pdf.text(label, 15, sidebarY)
    sidebarY = paragraph(value, 15, sidebarY + 5, 43, 8) + 5
  }
  sidebarY += 3
  sidebarSection('Upwork recognition')
  textStyle(11, true)
  pdf.text('Top Rated', 15, sidebarY)
  sidebarY = paragraph('100% Job Success\n48+ international projects', 15, sidebarY + 6, 43, 8)

  section('Profile', 35)
  y = paragraph(
    job?.summary ?? 'AI Full Stack Developer crafting end-to-end solutions with React, Next.js, Node.js, Python, Flutter, and AI integration. Leveraging AI-assisted development (Claude Code, Cursor AI) to ship 10x faster. Top Rated on Upwork with 100% Job Success across 48+ international projects.',
    mainX, y, mainWidth,
  ) + 4

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


  section('Experience', 43)
  for (const exp of workExp) {
    textStyle(8.5)
    const descriptionLines: string[] = pdf.splitTextToSize(exp.desc, mainWidth)
    const blockHeight = 13 + descriptionLines.length * 4.2 + (exp.linkText ? 5 : 0) + 5
    ensureSpace(blockHeight)
    textStyle(10, true)
    pdf.text(exp.role, mainX, y)
    y += 5
    textStyle(8.5, true, accent)
    pdf.text(exp.company, mainX, y)
    textStyle(8, false, muted)
    pdf.text(exp.date, pageWidth - 15, y, { align: 'right' })
    y = paragraph(exp.desc, mainX, y + 5, mainWidth, 8.5) + 1
    if (exp.linkText && exp.linkUrl) {
      link(exp.linkText, exp.linkUrl, mainX, y, 8)
      y += 5
    }
    y += 2
  }

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


  section('Selected projects', 32)
  for (const project of projectList) {
    textStyle(9)
    const title = project.name.replace(' (aiinfluencergenerator.app)', '')
    const titleLines: string[] = pdf.splitTextToSize(title, mainWidth)
    textStyle(8)
    const techLines: string[] = pdf.splitTextToSize(project.tech, mainWidth)
    const descLines: string[] = pdf.splitTextToSize(project.desc, mainWidth)
    ensureSpace(titleLines.length * 4.5 + techLines.length * 4 + descLines.length * 4 + 4)
    textStyle(9, true, accent)
    for (const line of titleLines) {
      pdf.textWithLink(line, mainX, y, { url: project.url })
      y += 4.5
    }
    y = paragraph(project.tech, mainX, y, mainWidth, 8) + 0.5
    y = paragraph(project.desc, mainX, y, mainWidth, 8, ink) + 3
  }

  const pageCount = pdf.getNumberOfPages()
  for (let page = 1; page <= pageCount; page++) {
    pdf.setPage(page)
    pdf.setDrawColor(213, 224, 221)
    pdf.line(mainX, pageHeight - 13, pageWidth - 15, pageHeight - 13)
    textStyle(7, false, muted)
    pdf.text('UMER WAQAS / RESUME', mainX, pageHeight - 8)
    pdf.text(`${page} / ${pageCount}`, pageWidth - 15, pageHeight - 8, { align: 'right' })
  }
  pdf.save(job ? `Umer_Waqas_${job.slug.replaceAll('-', '_')}_Resume.pdf` : 'Umer_Waqas_Resume.pdf')
}
