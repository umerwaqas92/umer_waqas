import { useState } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { skillCategories } from '../../data/skills'
import SectionHeader from '../ui/SectionHeader'

const primaryStack = [
  { name: 'Claude Code & Cursor AI', desc: 'AI-assisted programming for 10x development velocity', icon: 'fa-robot', tag: 'AI Core' },
  { name: 'React & Next.js', desc: 'Modern web applications with SSR, ISR & server actions', icon: 'fa-code', tag: 'Web' },
  { name: 'Flutter', desc: 'Cross-platform native mobile apps for iOS & Android', icon: 'fa-mobile-alt', tag: 'Mobile' },
  { name: 'Python & Node.js', desc: 'Backend microservices, REST APIs, and AI integrations', icon: 'fa-server', tag: 'Backend' },
]

export default function Skills() {
  const revealRef = useScrollReveal()
  const [activeCategory, setActiveCategory] = useState<string>('all')

  const filteredCategories =
    activeCategory === 'all'
      ? skillCategories
      : skillCategories.filter((cat) => cat.title.toLowerCase().includes(activeCategory.toLowerCase()))

  return (
    <section id="skills" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="Technical Skills"
          icon="fa-laptop-code"
          title={
            <>
              Tech Stack & <span className="gradient-text">Expertise</span>
            </>
          }
          subtitle="Comprehensive tools, frameworks, and modern technologies I use to build scalable products."
        />

        {/* Primary Stack Highlight Cards */}
        <div className="mb-14 grid grid-cols-4 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {primaryStack.map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 text-white relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 border border-slate-800"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/25 transition-all" />
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl gradient-primary flex items-center justify-center text-white text-[1.1rem]">
                  <i className={`fas ${item.icon}`} />
                </div>
                <span className="text-[0.7rem] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/10 text-primary-light border border-white/10">
                  {item.tag}
                </span>
              </div>
              <h3 className="font-bold text-[1.05rem] mb-1 text-white">{item.name}</h3>
              <p className="text-slate-400 text-[0.82rem] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Category Filters */}
        <div className="flex justify-center gap-2.5 mb-10 flex-wrap">
          {[
            { id: 'all', label: 'All Skill Groups' },
            { id: 'ai', label: 'AI & Automation' },
            { id: 'mobile', label: 'Mobile Apps' },
            { id: 'frontend', label: 'Frontend' },
            { id: 'backend', label: 'Backend & Cloud' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-5 py-2 rounded-full text-[0.88rem] font-medium cursor-pointer border-none transition-all duration-300 ${
                activeCategory === tab.id
                  ? 'gradient-primary text-white font-semibold'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Skill Category Cards */}
        <div
          ref={revealRef}
          className="grid grid-cols-5 gap-6 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1"
        >
          {filteredCategories.map((cat, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200/80 text-center hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center text-white text-[1.2rem] mx-auto mb-4 group-hover:scale-110 transition-transform">
                <i className={`fas ${cat.icon}`} />
              </div>
              <h3 className="font-bold text-[1rem] text-slate-900 mb-3">{cat.title}</h3>
              <ul className="space-y-2">
                {cat.skills.map((skill, j) => (
                  <li key={j} className="text-slate-600 text-[0.85rem] font-medium bg-white py-1 px-3 rounded-lg border border-slate-200/60">
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
