import { useTypingEffect } from '../../hooks/useTypingEffect'
import { socialLinks } from '../../data/social'
import { speedStats } from '../../data/testimonials'
import { generateResume } from '../../utils/resumeGenerator'

const typingWords = [
  'AI-Assisted Engineer',
  'Claude Code & Cursor Expert',
  'Flutter Mobile Specialist',
  'Full Stack AI Developer',
]

const techRibbon = [
  { name: 'Claude Code', icon: 'fa-robot' },
  { name: 'Cursor AI', icon: 'fa-bolt' },
  { name: 'React / Next.js', icon: 'fa-code' },
  { name: 'Flutter', icon: 'fa-mobile-alt' },
  { name: 'Python & Node.js', icon: 'fa-server' },
]

interface Props {
  onOpenModal: () => void
}

export default function Hero({ onOpenModal }: Props) {
  const typedText = useTypingEffect(typingWords)

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative px-6 pt-[120px] pb-16 overflow-hidden">
      <div className="hero-glow" />
      <div className="hero-glow-secondary" />

      <div className="max-w-6xl mx-auto w-full grid grid-cols-[1.3fr_1fr] gap-12 items-center max-lg:grid-cols-1 max-lg:text-center max-lg:gap-10 relative z-10">
        {/* Text Area */}
        <div className="animate-[fadeInUp_0.8s_ease]">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-[0.85rem] mb-4 border border-primary/20 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 status-dot" />
            <span>Available for Custom AI & Mobile Projects</span>
          </div>

          <h1 className="text-[3.6rem] font-extrabold leading-tight mt-1 mb-3 text-slate-900 tracking-tight max-md:text-[2.6rem]">
            Hi, I'm <span className="gradient-text">Umer Waqas</span>
          </h1>

          <div className="h-[2.2rem] mb-5 flex items-center max-lg:justify-center">
            <span className="text-[1.35rem] font-bold text-slate-700">
              {typedText}
            </span>
            <span className="inline-block w-[3px] h-[1.4rem] bg-primary ml-1.5 animate-pulse shrink-0 rounded-full" />
          </div>

          <p className="text-slate-600 text-[1.1rem] max-w-xl leading-relaxed max-lg:mx-auto mb-6">
            Pioneering AI-assisted software development using <strong>Claude Code</strong> and <strong>Cursor</strong>. I engineer intelligent web platforms, automated AI content pipelines, and high-performance Flutter mobile apps at 10x speed.
          </p>

          {/* Core Tech Stack Pills */}
          <div className="flex flex-wrap gap-2 mb-8 max-lg:justify-center">
            {techRibbon.map((item, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100/90 text-slate-700 text-[0.8rem] font-medium border border-slate-200 shadow-2xs"
              >
                <i className={`fas ${item.icon} text-primary text-[0.75rem]`} />
                {item.name}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 flex-wrap max-sm:flex-col max-sm:w-full">
            <a
              href="#projects"
              className="gradient-primary text-white px-8 py-3.5 rounded-full font-semibold text-[0.95rem] inline-flex items-center gap-2 hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5 max-sm:justify-center"
            >
              <i className="fas fa-layer-group text-[0.85rem]" /> View Projects
            </a>
            <button
              onClick={onOpenModal}
              className="border-2 border-primary text-primary px-8 py-3.5 rounded-full font-semibold text-[0.95rem] inline-flex items-center gap-2 hover:bg-primary hover:text-white transition-all duration-300 max-sm:justify-center cursor-pointer shadow-sm hover:shadow-md"
            >
              <i className="fab fa-whatsapp text-[1.05rem]" /> Let's Talk
            </button>
            <button
              onClick={generateResume}
              className="border-2 border-slate-200 text-slate-700 px-7 py-3.5 rounded-full font-semibold text-[0.95rem] inline-flex items-center gap-2 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-300 max-sm:justify-center cursor-pointer"
            >
              <i className="fas fa-file-pdf text-red-500" /> Resume PDF
            </button>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3 mt-8 max-lg:justify-center">
            <span className="text-[0.85rem] text-slate-400 font-medium mr-1">Connect:</span>
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                title={link.title}
                className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 hover:gradient-primary hover:text-white hover:border-transparent transition-all duration-300 text-[1.05rem] shadow-2xs hover:scale-110"
              >
                <i className={link.icon} />
              </a>
            ))}
          </div>
        </div>

        {/* Profile Card & Badges */}
        <div className="flex flex-col items-center max-lg:row-start-1">
          <div className="relative">
            {/* Outer Glowing Ring */}
            <div className="w-[290px] h-[290px] rounded-full p-1.5 gradient-primary shadow-2xl shadow-primary/30 max-md:w-[230px] max-md:h-[230px] animate-float relative">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-white bg-slate-100">
                <img src="umer.jpg" alt="Umer Waqas" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-2 -left-4 bg-white/90 backdrop-blur-md border border-slate-200 px-4 py-2 rounded-2xl shadow-xl flex items-center gap-3 animate-[fadeInUp_1s_ease]">
              <div className="w-9 h-9 rounded-xl gradient-primary flex items-center justify-center text-white text-[0.9rem] font-extrabold shadow-sm">
                6+
              </div>
              <div>
                <p className="text-[0.75rem] font-bold text-slate-900 leading-tight">Years Experience</p>
                <p className="text-[0.7rem] text-slate-500">AI & Full Stack</p>
              </div>
            </div>

            {/* Floating Top Rated Badge */}
            <div className="absolute -top-2 -right-4 bg-white/90 backdrop-blur-md border border-slate-200 px-4 py-2 rounded-2xl shadow-xl flex items-center gap-2.5 animate-[fadeInUp_1.2s_ease]">
              <i className="fas fa-crown text-amber-500 text-[1.1rem]" />
              <div>
                <p className="text-[0.75rem] font-bold text-slate-900 leading-tight">Top Rated</p>
                <p className="text-[0.7rem] text-emerald-600 font-semibold">100% Upwork Score</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Speed & Quality Stats Bar */}
      <div className="max-w-6xl mx-auto w-full mt-16 grid grid-cols-4 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1 relative z-10">
        {speedStats.map((stat, i) => (
          <div
            key={i}
            className="flex items-center gap-3.5 p-4 rounded-2xl glass-card glass-card-hover border border-slate-200/80 shadow-xs"
          >
            <div className="w-11 h-11 rounded-xl gradient-primary flex items-center justify-center text-white text-[1rem] shrink-0 shadow-md shadow-primary/20">
              <i className={`fas ${stat.icon}`} />
            </div>
            <div>
              <h3 className="font-bold text-[0.9rem] text-slate-900">{stat.title}</h3>
              <p className="text-slate-500 text-[0.78rem] leading-tight mt-0.5">{stat.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
