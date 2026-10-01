import { socialLinks } from '../../data/social'

interface Props {
  onOpenModal: () => void
}

export default function Hero({ onOpenModal }: Props) {
  return (
    <section id="home" className="portfolio-hero">
      <div className="hero-layout">
        <div className="hero-copy">
          <span className="availability"><span /> Available for new projects</span>
          <p className="hero-intro">UMER WAQAS / AI FULL STACK DEVELOPER</p>
          <h1>Thoughtful code.<br /><span>Real-world impact.</span></h1>
          <p className="hero-description">I turn ambitious ideas into intelligent web platforms and mobile apps. From the first prototype to the product your customers use every day.</p>
          <div className="hero-actions">
            <a href="#projects" className="primary-button">Explore my work <span aria-hidden="true">↗</span></a>
            <button onClick={onOpenModal} className="secondary-button">Let’s talk <span aria-hidden="true">↗</span></button>
          </div>
          <div className="hero-links">
            <a href="Umer_Waqas_Software_Engineer_Resume.pdf" download="Umer_Waqas_Software_Engineer_Resume.pdf" target="_blank" rel="noopener noreferrer">Download resume <span aria-hidden="true">↓</span></a>
            <span className="hero-link-divider" />
            {socialLinks.map(link => <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.label} title={link.title}><i className={link.icon} aria-hidden="true" /></a>)}
          </div>
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
