import { useState } from 'react'
import { skillCategories } from '../../data/skills'
import SectionHeader from '../ui/SectionHeader'

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('all')

  const filteredCategories =
    activeCategory === 'all'
      ? skillCategories
      : skillCategories.filter((cat) => {
          if (activeCategory === 'mobile') return cat.skills.some(skill => /flutter|ios|android/i.test(skill))
          if (activeCategory === 'backend') return /backend|cloud/i.test(cat.title)
          return cat.title.toLowerCase().includes(activeCategory.toLowerCase())
        })

  return (
    <section id="skills" className="py-14 sm:py-16 px-6 bg-white border-y border-slate-100">
      <div className="max-w-6xl mx-auto space-y-8">
        <SectionHeader
          tag="Technical Skills"
          icon="fa-laptop-code"
          title={
            <>
              Tech Stack & <span className="gradient-text">Expertise</span>
            </>
          }
          subtitle="Modern tools, frameworks, and AI technologies I leverage to build scalable products."
        />

        {/* Category Filters */}
        <div className="flex justify-center gap-2 mb-6 flex-wrap">
          {[
            { id: 'all', label: 'All Skills' },
            { id: 'ai', label: 'AI & Automation' },
            { id: 'mobile', label: 'Mobile Apps' },
            { id: 'frontend', label: 'Frontend' },
            { id: 'backend', label: 'Backend & Cloud' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              aria-pressed={activeCategory === tab.id}
              className={`px-4 py-1.5 rounded-full text-[0.85rem] font-medium cursor-pointer border-none transition-all duration-300 ${
                activeCategory === tab.id
                  ? 'gradient-primary text-white shadow-sm font-semibold'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Compact Skill Category Cards Grid */}
        <div className="grid grid-cols-5 gap-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
          {filteredCategories.map((cat, i) => (
            <div
              key={i}
              className="p-4 rounded-xl bg-slate-50/90 border border-slate-200/70 shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center text-white text-[1rem] mb-3 shrink-0 shadow-sm shadow-primary/20">
                <i className={`fas ${cat.icon}`} />
              </div>
              <h3 className="font-bold text-[0.92rem] text-slate-900 mb-2.5">{cat.title}</h3>
              <div className="flex flex-wrap justify-center gap-1.5 w-full">
                {cat.skills.map((skill, j) => (
                  <span
                    key={j}
                    className="text-slate-700 text-[0.76rem] font-medium bg-white py-1 px-2.5 rounded-md border border-slate-200/80 shadow-2xs w-full text-center"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
