import { useState } from 'react'
import type { JobProfile } from '../../data/jobProfiles'
import { socialLinks } from '../../data/social'

interface Props {
  job?: JobProfile
  onOpenModal: () => void
}

export default function Hero({ onOpenModal, job }: Props) {
  const [downloading, setDownloading] = useState(false)
  const [downloadError, setDownloadError] = useState('')

  async function downloadResume() {
    if (downloading) return
    setDownloading(true)
    setDownloadError('')
    try {
      const { generateResume } = await import('../../utils/resumeGenerator')
      await generateResume(job)
    } catch {
      setDownloadError('The resume could not be downloaded. Please try again.')
    } finally {
      setDownloading(false)
    }
  }

  return (
    <section id="home" className="portfolio-hero">
      <div className="hero-layout">
        <div className="hero-copy">
          <span className="availability"><span /> Available for new projects</span>
          <p className="hero-intro">UMER WAQAS / {(job?.title ?? 'AI Full Stack Developer').toUpperCase()}</p>
          <h1>{job?.headline ?? 'Thoughtful code.'}<br /><span>{job?.highlight ?? 'Real-world impact.'}</span></h1>
          <p className="hero-description">{job?.summary ?? 'I turn ambitious ideas into intelligent web platforms and mobile apps. From the first prototype to the product your customers use every day.'}</p>
          <div className="hero-actions">
            <a href="#projects" className="primary-button">Explore my work <span aria-hidden="true">↗</span></a>
            <button onClick={onOpenModal} className="secondary-button">Let’s talk <span aria-hidden="true">↗</span></button>
          </div>
          <div className="hero-links">
            {job ? <button className="cursor-pointer disabled:opacity-50" onClick={downloadResume} disabled={downloading}>{downloading ? 'Preparing resume…' : 'Download resume'} <span aria-hidden="true">↓</span></button> : <a href="Umer_Waqas_Software_Engineer_Resume.pdf" download="Umer_Waqas_Software_Engineer_Resume.pdf" target="_blank" rel="noopener noreferrer">Download resume <span aria-hidden="true">↓</span></a>}
            <span className="hero-link-divider" />
            {socialLinks.map(link => <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.label} title={link.title}><i className={link.icon} aria-hidden="true" /></a>)}
          </div>
          {downloadError && <p role="alert" className="mt-3 text-sm text-red-700">{downloadError}</p>}
        </div>
        <div className="hero-portrait">
          <div className="portrait-label"><span>Independent developer</span><span>01 / INTRO</span></div>
          <img src="umer.jpg" alt="Umer Waqas" fetchPriority="high" />
          <div className="portrait-caption"><div><strong>Umer Waqas</strong><span>Developer. Builder. Problem solver.</span></div><a href="#about" aria-label="More about Umer">↗</a></div>
          <div className="portrait-note"><span aria-hidden="true">✦</span><div><strong>Top Rated on Upwork</strong><span>100% Job Success</span></div></div>
        </div>
      </div>
      <div className="hero-proof">
        <p>Ideas to launch.<br /><strong>Built with care.</strong></p>
        <div><strong>6+</strong><span>Years of experience</span></div>
        <div><strong>70+</strong><span>Projects delivered</span></div>
        <div><strong>100%</strong><span>Upwork Job Success</span></div>
        <a href="#projects">A few things I’ve built <span aria-hidden="true">↓</span></a>
      </div>
    </section>
  )
}
