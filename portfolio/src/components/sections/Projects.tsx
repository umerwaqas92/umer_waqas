import { useState } from 'react'
import { projects, projectFilters } from '../../data/projects'
import { useSlider } from '../../hooks/useSlider'
import SectionHeader from '../ui/SectionHeader'

function ProjectSlider({ images }: { images: { src: string; alt: string }[] }) {
  const { current, next, prev, goTo } = useSlider(images.length)
  const hasMultiple = images.length > 1

  return (
    <div className="relative">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, i) => (
          <div key={i} className="min-w-full">
            <img src={img.src} alt={img.alt} className="w-full h-48 object-cover" />
          </div>
        ))}
      </div>
      {hasMultiple && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 text-text shadow flex items-center justify-center hover:bg-white cursor-pointer border-none text-[0.8rem]"
          >
            <i className="fas fa-chevron-left" />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 text-text shadow flex items-center justify-center hover:bg-white cursor-pointer border-none text-[0.8rem]"
          >
            <i className="fas fa-chevron-right" />
          </button>
          <div className="flex justify-center gap-1.5 pb-2 pt-1">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`w-2 h-2 rounded-full cursor-pointer border-none ${
                  i === current ? 'gradient-primary w-4' : 'bg-border'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState<string>('all')

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((p) => p.category.includes(filter))

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="Portfolio"
          title={
            <>
              Featured <span className="gradient-text">Projects</span>
            </>
          }
        />

        {/* Filters */}
        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {projectFilters.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`px-5 py-2 rounded-full text-[0.9rem] font-medium cursor-pointer border-none transition-all duration-300 ${
                filter === f.value
                  ? 'gradient-primary text-white shadow-lg shadow-primary/20'
                  : 'bg-bg-elevated text-text-muted hover:text-text'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1">
          {filteredProjects.map((project, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden bg-bg-card border border-border shadow-[0_8px_32px_rgba(108,92,231,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl relative project-card flex flex-col justify-between"
            >
              <div>
                <ProjectSlider images={project.images} />
                <div className="p-6">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="font-bold text-[1.1rem]">{project.title}</h3>
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[0.8rem] text-primary hover:underline font-semibold shrink-0 flex items-center gap-1"
                        title={`Visit ${project.title}`}
                      >
                        Visit Site <i className="fas fa-external-link-alt text-[0.7rem]" />
                      </a>
                    )}
                  </div>
                  <p className="text-text-muted text-[0.85rem] leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="text-[0.75rem] px-2.5 py-1 rounded-full bg-primary/5 text-primary font-medium"
                      >
                        {tag}
                      </span>
                    ))}
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
