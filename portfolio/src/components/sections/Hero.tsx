import { useTypingEffect } from '../../hooks/useTypingEffect'
import { socialLinks } from '../../data/social'
import { speedStats } from '../../data/testimonials'
import { generateResume } from '../../utils/resumeGenerator'

const typingWords = [
  'AI Developer',
  'AI Full Stack Developer',
  'Flutter Developer',
  'Claude Code Expert',
]

interface Props {
  onOpenModal: () => void
}

export default function Hero({ onOpenModal }: Props) {
  const typedText = useTypingEffect(typingWords)

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative px-6 pt-[120px] pb-20 overflow-hidden">
      <div className="hero-glow" />
      <div className="max-w-6xl mx-auto w-full grid grid-cols-[1.3fr_1fr] gap-16 items-center max-lg:grid-cols-1 max-lg:text-center max-lg:gap-10">
        {/* Text */}
        <div className="animate-[fadeInUp_0.8s_ease]">
          <span className="text-[1.1rem] text-primary-light font-medium">Hello, I'm</span>
          <h1 className="text-[3.5rem] font-extrabold leading-tight mt-2 mb-3 max-md:text-[2.5rem]">
            Umer Waqas
          </h1>
          <div className="h-[1.8rem] mb-4 flex items-center max-lg:justify-center">
            <span className="text-[1.3rem] font-semibold gradient-text">
              {typedText}
            </span>
            <span className="inline-block w-[3px] h-[1.3rem] bg-primary ml-1 animate-pulse shrink-0" />
          </div>
          <p className="text-text-muted text-[1.1rem] max-w-xl leading-relaxed max-lg:mx-auto">
            AI-assisted developer & AI engineer — building intelligent web apps with Claude Code, Cursor, and cutting-edge AI.
            Also crafting cross-platform mobile apps with Flutter. Turning complex problems into elegant digital solutions at warp speed.
          </p>
          <div className="flex gap-4 mt-8 flex-wrap max-sm:flex-col max-sm:w-full">
            <a
              href="#projects"
              className="gradient-primary text-white px-8 py-3 rounded-full font-semibold text-[0.95rem] inline-flex items-center gap-2 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 max-sm:justify-center"
            >
              View My Work
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                onOpenModal()
              }}
              className="border-2 border-primary text-primary px-8 py-3 rounded-full font-semibold text-[0.95rem] inline-flex items-center gap-2 hover:bg-primary hover:text-white transition-all duration-300 max-sm:justify-center"
            >
              Get In Touch
            </a>
            <button
              onClick={generateResume}
              className="border-2 border-border text-text-muted px-8 py-3 rounded-full font-semibold text-[0.95rem] inline-flex items-center gap-2 hover:border-primary hover:text-primary transition-all duration-300 max-sm:justify-center"
            >
              <i className="fas fa-file-pdf" /> Resume PDF
            </button>
          </div>
          <div className="flex gap-4 mt-8 max-lg:justify-center">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                title={link.title}
                className="w-10 h-10 rounded-full bg-bg-elevated flex items-center justify-center text-text-muted hover:gradient-primary hover:text-white transition-all duration-300 text-[1.1rem]"
              >
                <i className={link.icon} />
              </a>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="flex flex-col items-center max-lg:row-start-1">
          <div className="relative w-[280px] h-[280px] rounded-full p-1.5 gradient-primary max-md:w-[220px] max-md:h-[220px]">
            <div className="w-full h-full rounded-full overflow-hidden">
              <img src="umer.jpg" alt="Umer Waqas" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="flex items-center gap-2 mt-4 text-[0.9rem] text-text-muted flex-wrap justify-center">
            <span className="w-2 h-2 rounded-full bg-secondary status-dot inline-block" />
            Available for work
            <span className="text-border">|</span>
            <span className="text-[0.8rem] px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
              Top Rated
            </span>
            <span className="text-[0.8rem] px-2.5 py-0.5 rounded-full bg-secondary/10 text-secondary font-medium">
              100% Job Success
            </span>
          </div>
        </div>
      </div>

      {/* Speed Stats - compact */}
      <div className="max-w-6xl mx-auto w-full mt-12 grid grid-cols-4 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
        {speedStats.map((stat, i) => (
          <div
            key={i}
            className="flex items-center gap-3 p-4 rounded-xl bg-white/70 backdrop-blur-sm border border-border/50"
          >
            <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center text-white text-[0.9rem] shrink-0">
              <i className={`fas ${stat.icon}`} />
            </div>
            <div>
              <h3 className="font-bold text-[0.85rem]">{stat.title}</h3>
              <p className="text-text-muted text-[0.75rem] leading-tight">{stat.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
