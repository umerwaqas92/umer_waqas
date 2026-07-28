import { useCounter } from '../../hooks/useCounter'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import SectionHeader from '../ui/SectionHeader'

function Stat({ target, icon, label }: { target: number; icon: string; label: string }) {
  const { count, ref } = useCounter(target)
  return (
    <div
      ref={ref}
      className="flex items-center gap-3.5 p-3.5 px-4 rounded-xl bg-white border border-slate-200/80 transition-all"
    >
      <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center text-white text-[1rem] shrink-0">
        <i className={`fas ${icon}`} />
      </div>
      <div>
        <div className="text-[1.5rem] font-extrabold text-slate-900 leading-none">{count}+</div>
        <div className="text-slate-500 text-[0.78rem] font-medium leading-tight">{label}</div>
      </div>
    </div>
  )
}

const pillars = [
  {
    icon: 'fa-robot',
    title: 'AI-First Development',
    desc: 'Harnessing Claude Code, Cursor & LLM APIs to build intelligent software in days, not months.',
  },
  {
    icon: 'fa-mobile-alt',
    title: 'Flutter Mobile Engineering',
    desc: 'Building sleek, responsive iOS & Android mobile apps with single-codebase architecture.',
  },
  {
    icon: 'fa-bolt',
    title: '10x Speed Execution',
    desc: 'Rapid prototyping and deployment cycle while strictly maintaining clean code quality.',
  },
  {
    icon: 'fa-server',
    title: 'Full-Stack Integration',
    desc: 'Connecting web & mobile frontends with Node.js, Python, Go, Next.js, and cloud backends.',
  },
]

export default function About() {
  const revealRef = useScrollReveal()

  return (
    <section id="about" className="py-16 sm:py-20 px-6 bg-slate-50/70 relative">
      <div className="max-w-6xl mx-auto space-y-10">
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

        {/* Compact Bio & Image Section */}
        <div className="grid grid-cols-12 gap-8 items-center max-lg:gap-6" ref={revealRef}>
          {/* Bio & Stats */}
          <div className="col-span-12 lg:col-span-7 space-y-4">
            <p className="text-slate-600 leading-relaxed text-[0.98rem]">
              With over <strong>6 years</strong> of hands-on software development experience, I specialize in combining modern full-stack web and mobile development with state-of-the-art AI automation.
            </p>
            <p className="text-slate-600 leading-relaxed text-[0.98rem]">
              By integrating AI pair-programming tools like <strong>Claude Code</strong> and <strong>Cursor AI</strong> directly into my dev workflow, I deliver production-ready <strong>React, Next.js, Flutter, Node.js, and Python</strong> projects with exceptional precision and speed.
            </p>

            {/* Stat Counters */}
            <div className="grid grid-cols-3 gap-3 pt-2 max-sm:grid-cols-1">
              <Stat target={6} icon="fa-briefcase" label="Years Experience" />
              <Stat target={70} icon="fa-code" label="Projects Delivered" />
              <Stat target={15} icon="fa-smile" label="Happy Clients" />
            </div>
          </div>

          {/* Workspace Image */}
          <div className="col-span-12 lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[320px] aspect-square rounded-2xl overflow-hidden border-4 border-white group">
              <img
                src="ai_photos/coder_selfie_medium_1.webp"
                alt="Umer Waqas Workspace"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-85" />
              <div className="absolute bottom-3.5 left-4 right-4 text-white">
                <span className="inline-block px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[0.72rem] font-bold uppercase tracking-wider mb-1">
                  Workspace & Studio
                </span>
                <p className="text-[0.92rem] font-bold">Umer Waqas — Developer Studio</p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Expertise Grid */}
        <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl bg-white border border-slate-200/80 hover:-translate-y-0.5 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary group-hover:gradient-primary group-hover:text-white flex items-center justify-center text-[1.1rem] mb-3 transition-all duration-300">
                  <i className={`fas ${p.icon}`} />
                </div>
                <h3 className="font-bold text-[0.98rem] text-slate-900 mb-1.5">{p.title}</h3>
                <p className="text-slate-500 text-[0.83rem] leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
