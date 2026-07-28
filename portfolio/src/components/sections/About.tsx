import { useCounter } from '../../hooks/useCounter'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import SectionHeader from '../ui/SectionHeader'

function Stat({ target, icon, label }: { target: number; icon: string; label: string }) {
  const { count, ref } = useCounter(target)
  return (
    <div ref={ref} className="text-center p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all">
      <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center text-white text-[1.2rem] mx-auto mb-3 shadow-md shadow-primary/20">
        <i className={`fas ${icon}`} />
      </div>
      <div className="text-[2.2rem] font-extrabold text-slate-900 leading-none mb-1">{count}+</div>
      <div className="text-slate-500 text-[0.85rem] font-medium">{label}</div>
    </div>
  )
}

const pillars = [
  {
    icon: 'fa-robot',
    title: 'AI-First Development',
    desc: 'Harnessing Claude Code, Cursor, and LLM APIs to build intelligent software in days, not months.',
  },
  {
    icon: 'fa-mobile-alt',
    title: 'Flutter Mobile Engineering',
    desc: 'Building sleek, responsive iOS & Android mobile apps with shared single-codebase architecture.',
  },
  {
    icon: 'fa-bolt',
    title: '10x Speed Execution',
    desc: 'Rapid prototyping and rapid deployment cycle while strictly maintaining clean code quality.',
  },
  {
    icon: 'fa-server',
    title: 'Full-Stack Integration',
    desc: 'Connecting web & mobile frontends with Node.js, Python, Go, Next.js, and cloud backend microservices.',
  },
]

export default function About() {
  const revealRef = useScrollReveal()

  return (
    <section id="about" className="py-24 px-6 bg-slate-50/70 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="About Me"
          icon="fa-user"
          title={
            <>
              Transforming Ideas Into <span className="gradient-text">Intelligent Applications</span>
            </>
          }
          subtitle="Passionate AI Full Stack Developer specializing in AI-assisted workflows, cross-platform mobile apps, and robust cloud services."
        />

        <div className="grid grid-cols-[1.2fr_1fr] gap-12 items-center max-lg:grid-cols-1 max-lg:gap-10 mb-16">
          <div className="space-y-6" ref={revealRef}>
            <div className="prose prose-slate max-w-none">
              <p className="text-slate-600 leading-relaxed text-[1.05rem]">
                With over 6 years of hands-on software development experience, I specialize in combining modern full-stack web and mobile development with state-of-the-art AI automation.
              </p>
              <p className="text-slate-600 leading-relaxed text-[1.05rem]">
                By integrating AI pair-programming tools like <strong>Claude Code</strong> and <strong>Cursor AI</strong> directly into my dev workflow, I deliver production-ready React, Next.js, Flutter, Node.js, and Python projects with exceptional precision and speed.
              </p>
            </div>

            {/* Stat Counters */}
            <div className="grid grid-cols-3 gap-5 pt-4 max-sm:grid-cols-1">
              <Stat target={6} icon="fa-briefcase" label="Years Experience" />
              <Stat target={70} icon="fa-code" label="Projects Delivered" />
              <Stat target={15} icon="fa-smile" label="Happy Clients" />
            </div>
          </div>

          {/* Image Container with Visual Glow */}
          <div className="flex justify-center relative">
            <div className="relative w-[340px] h-[340px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white max-md:w-[280px] max-md:h-[280px] group">
              <img
                src="ai_photos/coder_selfie_medium_1.webp"
                alt="Umer Waqas Workspace"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-[0.75rem] uppercase tracking-wider text-emerald-400 font-bold">Workspace & Studio</p>
                <p className="text-[1rem] font-bold">Umer Waqas — Developer Studio</p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Expertise */}
        <div className="grid grid-cols-4 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary group-hover:gradient-primary group-hover:text-white flex items-center justify-center text-[1.2rem] mb-4 transition-all duration-300">
                <i className={`fas ${p.icon}`} />
              </div>
              <h3 className="font-bold text-[1.05rem] text-slate-900 mb-2">{p.title}</h3>
              <p className="text-slate-500 text-[0.88rem] leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
