import { useScrollReveal } from '../../hooks/useScrollReveal'
import { skillCategories } from '../../data/skills'
import SectionHeader from '../ui/SectionHeader'

export default function Skills() {
  const revealRef = useScrollReveal()

  return (
    <section id="skills" className="py-24 px-6 bg-bg-card">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="My Skills"
          title={
            <>
              Tech Stack & <span className="gradient-text">Expertise</span>
            </>
          }
        />
        <div
          ref={revealRef}
          className="grid grid-cols-5 gap-6 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1"
        >
          {skillCategories.map((cat, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white border border-border shadow-[0_8px_32px_rgba(108,92,231,0.08)] text-center"
            >
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center text-white text-[1.2rem] mx-auto mb-4">
                <i className={`fas ${cat.icon}`} />
              </div>
              <h3 className="font-bold text-[1rem] mb-3">{cat.title}</h3>
              <ul className="space-y-2">
                {cat.skills.map((skill, j) => (
                  <li key={j} className="text-text-muted text-[0.85rem]">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
