import { useState } from 'react'
import { experiences } from '../../data/experience'
import SectionHeader from '../ui/SectionHeader'

export default function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(1)

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section id="experience" className="py-24 px-6 bg-bg-card">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="Experience"
          title={
            <>
              Work <span className="gradient-text">Journey</span>
            </>
          }
        />
        <div className="max-w-3xl mx-auto space-y-0">
          {experiences.map((exp, i) => (
            <div key={i} className="relative pl-8 pb-2 border-l-2 border-border last:pb-0">
              {/* Dot */}
              <div className="absolute left-[-9px] top-1 w-4 h-4 rounded-full gradient-primary border-2 border-white" />
              {/* Content */}
              <div className="ml-4 pb-6">
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggle(i)}
                >
                  <div>
                    <h3 className="font-bold text-[1.05rem]">{exp.role}</h3>
                    <h4 className="text-text-muted text-[0.9rem]">{exp.company}</h4>
                  </div>
                  <button className="w-8 h-8 rounded-full bg-bg-elevated flex items-center justify-center text-text-muted hover:text-primary transition-colors cursor-pointer border-none">
                    <i
                      className={`fas fa-chevron-down transition-transform duration-300 ${
                        openIndex === i ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </div>
                <div className={`timeline-body ${openIndex === i ? 'open' : ''}`}>
                  <div className="overflow-hidden">
                    <div className="text-[0.85rem] text-text-muted font-medium mt-2 mb-2">
                      {exp.date}
                    </div>
                    <p
                      className="text-text-muted text-[0.9rem] leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: exp.description }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
