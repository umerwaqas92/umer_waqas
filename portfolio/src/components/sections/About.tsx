import { useCounter } from '../../hooks/useCounter'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import SectionHeader from '../ui/SectionHeader'

function Stat({ target, icon, label }: { target: number; icon: string; label: string }) {
  const { count, ref } = useCounter(target)
  return (
    <div ref={ref} className="text-center">
      <i className={`fas ${icon} text-[2rem] gradient-text mb-2`} />
      <div className="text-[2.5rem] font-extrabold text-text">{count}+</div>
      <div className="text-text-muted text-[0.9rem]">{label}</div>
    </div>
  )
}

export default function About() {
  const revealRef = useScrollReveal()

  return (
    <section id="about" className="py-24 px-6 bg-bg-card">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="About Me"
          title={
            <>
              Transforming Ideas Into <span className="gradient-text">Intelligent Applications</span>
            </>
          }
        />
        <div className="grid grid-cols-[1.2fr_1fr] gap-16 items-center max-lg:grid-cols-1 max-lg:gap-8">
          <div className="space-y-6" ref={revealRef}>
            <p className="text-text-muted leading-relaxed text-[1.05rem]">
              AI Full Stack Developer crafting end-to-end solutions with React, Next.js, Node.js, Python, Flutter, and AI integration. I leverage AI-assisted development (Claude Code, Cursor AI) to ship 10x faster — from intelligent web apps to cross-platform mobile experiences.
            </p>
            <div className="grid grid-cols-3 gap-8 pt-4 max-sm:grid-cols-1 max-sm:gap-6">
              <Stat target={6} icon="fa-briefcase" label="Years Experience" />
              <Stat target={70} icon="fa-code" label="Projects Delivered" />
              <Stat target={15} icon="fa-smile" label="Happy Clients" />
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-[320px] h-[320px] rounded-2xl overflow-hidden max-md:w-[260px] max-md:h-[260px]">
              <img
                src="ai_photos/coder_selfie_medium_1.webp"
                alt="Umer Waqas Workspace"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
