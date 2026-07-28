import { useState } from 'react'
import { experiences } from '../../data/experience'
import SectionHeader from '../ui/SectionHeader'

export default function Experience() {
  const [openIndices, setOpenIndices] = useState<number[]>([0, 1])

  const toggle = (i: number) => {
    if (openIndices.includes(i)) {
      setOpenIndices(openIndices.filter((idx) => idx !== i))
    } else {
      setOpenIndices([...openIndices, i])
    }
  }

  const toggleAll = () => {
    if (openIndices.length === experiences.length) {
      setOpenIndices([])
    } else {
      setOpenIndices(experiences.map((_, i) => i))
    }
  }

  return (
    <section id="experience" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="Career Journey"
          icon="fa-history"
          title={
            <>
              Work <span className="gradient-text">Experience</span>
            </>
          }
          subtitle="6+ years building web, mobile, and AI solutions across high-growth startups and freelance clients."
        />

        <div className="flex justify-end max-w-3xl mx-auto mb-6">
          <button
            onClick={toggleAll}
            className="text-[0.85rem] font-semibold text-primary hover:text-primary-dark cursor-pointer border-none bg-primary/10 px-4 py-1.5 rounded-full transition-colors"
          >
            {openIndices.length === experiences.length ? 'Collapse All' : 'Expand All'}
          </button>
        </div>

        <div className="max-w-3xl mx-auto space-y-0 relative">
          {experiences.map((exp, i) => {
            const isOpen = openIndices.includes(i)
            return (
              <div key={i} className="relative pl-10 pb-8 border-l-2 border-slate-200 last:pb-0">
                {/* Node Dot */}
                <div className="absolute left-[-11px] top-1 w-5 h-5 rounded-full gradient-primary border-4 border-white shadow-md shadow-primary/30" />

                {/* Content Card */}
                <div className="bg-slate-50/80 rounded-2xl p-6 border border-slate-200/80 shadow-2xs hover:shadow-md transition-all">
                  <div
                    className="flex items-center justify-between cursor-pointer select-none"
                    onClick={() => toggle(i)}
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[0.75rem] font-bold px-2.5 py-0.5 rounded-full bg-primary/10 text-primary uppercase">
                          {exp.date}
                        </span>
                      </div>
                      <h3 className="font-extrabold text-[1.15rem] text-slate-900">{exp.role}</h3>
                      <h4 className="text-slate-500 font-medium text-[0.92rem]">{exp.company}</h4>
                    </div>

                    <button
                      className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-primary transition-colors cursor-pointer border-none shadow-2xs shrink-0"
                      aria-label="Toggle details"
                    >
                      <i
                        className={`fas fa-chevron-down text-[0.85rem] transition-transform duration-300 ${
                          isOpen ? 'rotate-180 text-primary' : ''
                        }`}
                      />
                    </button>
                  </div>

                  <div className={`timeline-body ${isOpen ? 'open' : ''}`}>
                    <div>
                      <div className="pt-4 mt-3 border-t border-slate-200/80">
                        <div
                          className="text-slate-600 text-[0.92rem] leading-relaxed space-y-2 prose prose-slate max-w-none"
                          dangerouslySetInnerHTML={{ __html: exp.description }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
