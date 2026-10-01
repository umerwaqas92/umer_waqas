import type { JobProfile } from '../../data/jobProfiles'
import { useCounter } from '../../hooks/useCounter'
import SectionHeader from '../ui/SectionHeader'

function Stat({ target, icon, label }: { target: number; icon: string; label: string }) {
  const { count, ref } = useCounter(target)
  return (
    <div
      ref={ref}
      className="flex items-center gap-3 p-3 px-3.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs"
    >
      <div className="w-9 h-9 rounded-lg gradient-primary flex items-center justify-center text-white text-[0.9rem] shrink-0">
        <i className={`fas ${icon}`} />
      </div>
      <div>
        <div className="text-[1.3rem] font-extrabold text-slate-900 leading-none">{count}+</div>
        <div className="text-slate-500 text-[0.75rem] font-medium leading-tight">{label}</div>
      </div>
    </div>
  )
}

const pillars = [
  { icon: 'fa-robot', title: 'AI-First Dev', desc: 'Claude Code & Cursor AI for 10x speed.' },
  { icon: 'fa-mobile-alt', title: 'Flutter Mobile', desc: 'Sleek iOS & Android single codebase.' },
  { icon: 'fa-bolt', title: 'Rapid Shipping', desc: 'Production-ready apps delivered fast.' },
  { icon: 'fa-server', title: 'Full-Stack', desc: 'React, Next.js, Node.js, Python & Go.' },
]

export default function About({ job }: { job?: JobProfile }) {
  return (
    <section id="about" className="py-14 sm:py-16 px-6 bg-slate-50/70">
      <div className="max-w-6xl mx-auto space-y-8">
        <SectionHeader
          tag="About Me"
          icon="fa-user"
          title={
            <>
              Transforming Ideas Into <span className="gradient-text">Intelligent Applications</span>
            </>
          }
          subtitle={job?.summary ?? "AI Full Stack Developer specializing in AI workflows, cross-platform mobile apps, and robust backends."}
        />

        {/* Compact Grid: Bio + Image + Pillars */}
        <div className="grid grid-cols-12 gap-6 items-center">
          {/* Left Column: Bio & Stats */}
          <div className="col-span-12 lg:col-span-7 space-y-4">
            <p className="text-slate-600 leading-relaxed text-[0.95rem]">
              With over <strong>6 years</strong> of software engineering experience, I combine full-stack web & Flutter mobile development with state-of-the-art AI pair-programming tools (<strong>Claude Code</strong> & <strong>Cursor AI</strong>) to ship production-ready apps at exceptional velocity.
            </p>

            {/* Stat Counters */}
            <div className="grid grid-cols-3 gap-3 pt-1 max-sm:grid-cols-1">
              <Stat target={6} icon="fa-briefcase" label="Years Experience" />
              <Stat target={70} icon="fa-code" label="Projects Delivered" />
              <Stat target={15} icon="fa-smile" label="Happy Clients" />
            </div>

            {/* 4 Pillars in a 2x2 Grid */}
            <div className="grid grid-cols-2 gap-3 pt-2 max-sm:grid-cols-1">
              {pillars.map((p, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-slate-200/70">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-[0.85rem] shrink-0 mt-0.5">
                    <i className={`fas ${p.icon}`} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[0.88rem] text-slate-900 leading-tight">{p.title}</h4>
                    <p className="text-slate-500 text-[0.76rem] leading-tight mt-0.5">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Studio Photo */}
          <div className="col-span-12 lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[290px] aspect-square rounded-2xl overflow-hidden border-4 border-white shadow-xl group">
              <img
                src="ai_photos/coder_selfie_medium_1.webp"
                alt="Umer Waqas Workspace"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-85" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="inline-block px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[0.68rem] font-bold uppercase tracking-wider mb-0.5">
                  Workspace & Studio
                </span>
                <p className="text-[0.88rem] font-bold">Umer Waqas — Developer Studio</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
