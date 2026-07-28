import { useState } from 'react'
import { projects, projectFilters } from '../../data/projects'
import { useSlider } from '../../hooks/useSlider'
import SectionHeader from '../ui/SectionHeader'
import ProjectModal from '../modal/ProjectModal'
import type { Project } from '../../types'

function ProjectSlider({ images, onOpenModal }: { images: { src: string; alt: string }[]; onOpenModal: () => void }) {
  const { current, next, prev, goTo } = useSlider(images.length)
  const hasMultiple = images.length > 1

  return (
    <div className="relative group overflow-hidden bg-slate-900">
      <div
        className="flex transition-transform duration-500 cursor-pointer"
        style={{ transform: `translateX(-${current * 100}%)` }}
        onClick={onOpenModal}
      >
        {images.map((img, i) => (
          <div key={i} className="min-w-full relative">
            <img src={img.src} alt={img.alt} className="w-full h-52 object-cover" />
            <div className="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="bg-white/90 text-slate-900 text-[0.8rem] font-bold px-3.5 py-1.5 rounded-full flex items-center gap-1.5">
                <i className="fas fa-expand text-primary" /> View Details & Screenshots
              </span>
            </div>
          </div>
        ))}
      </div>
      {hasMultiple && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 text-slate-800 shadow flex items-center justify-center hover:bg-white cursor-pointer border-none text-[0.8rem] z-10"
            aria-label="Previous image"
          >
            <i className="fas fa-chevron-left" />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 text-slate-800 shadow flex items-center justify-center hover:bg-white cursor-pointer border-none text-[0.8rem] z-10"
            aria-label="Next image"
          >
            <i className="fas fa-chevron-right" />
          </button>
          <div className="flex justify-center gap-1.5 pb-2 pt-1 absolute bottom-2 inset-x-0 z-10">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full cursor-pointer border-none transition-all ${
                  i === current ? 'gradient-primary w-5' : 'bg-white/60 w-2'
                }`}
                aria-label={`Go to screenshot ${i + 1}`}
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
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((p) => p.category.includes(filter))

  return (
    <section id="projects" className="py-24 px-6 bg-slate-50/70">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="Portfolio Showcase"
          icon="fa-briefcase"
          title={
            <>
              Featured <span className="gradient-text">Projects</span>
            </>
          }
          subtitle="Explore recent production applications across AI platforms, iOS App Store, Google Play Store, and web applications."
        />

        {/* Category Filters */}
        <div className="flex justify-center gap-2.5 mb-10 flex-wrap">
          {projectFilters.map((f) => {
            const count =
              f.value === 'all'
                ? projects.length
                : projects.filter((p) => p.category.includes(f.value)).length

            return (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={`px-5 py-2.5 rounded-full text-[0.88rem] font-medium cursor-pointer border-none transition-all duration-300 flex items-center gap-2 ${
                  filter === f.value
                    ? 'gradient-primary text-white font-semibold'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200/80 shadow-2xs'
                }`}
              >
                <span>{f.label}</span>
                <span
                  className={`text-[0.72rem] px-2 py-0.2 rounded-full font-bold ${
                    filter === f.value ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                  }`}
                >
                  {count}
                </span>
              </button>
            )
          })}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1">
          {filteredProjects.map((project, i) => (
            <div
              key={i}
              className="rounded-3xl overflow-hidden bg-white border border-slate-200/80 transition-all duration-300 hover:-translate-y-1.5 relative flex flex-col justify-between"
            >
              <div>
                <ProjectSlider
                  images={project.images}
                  onOpenModal={() => setSelectedProject(project)}
                />

                <div className="p-6">
                  {/* Badges / Header */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-[0.72rem] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">
                      {project.category}
                    </span>
                    <div className="flex gap-2 text-[0.85rem] text-slate-400">
                      {project.appStoreUrl && <i className="fab fa-apple text-slate-700" title="iOS App Store" />}
                      {project.playStoreUrl && <i className="fab fa-google-play text-emerald-600" title="Google Play Store" />}
                      {project.url && <i className="fas fa-globe text-primary" title="Live Web App" />}
                    </div>
                  </div>

                  <h3
                    onClick={() => setSelectedProject(project)}
                    className="font-extrabold text-[1.15rem] text-slate-900 mb-2 hover:text-primary transition-colors cursor-pointer"
                  >
                    {project.title}
                  </h3>

                  <p className="text-slate-600 text-[0.86rem] leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="text-[0.73rem] px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 font-medium border border-slate-200/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-slate-100">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-[0.85rem] font-bold gradient-text inline-flex items-center gap-1.5 cursor-pointer hover:underline"
                >
                  View Details & Links <i className="fas fa-arrow-right text-[0.75rem]" />
                </button>

                {project.appStoreUrl && (
                  <a
                    href={project.appStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[0.75rem] font-bold text-slate-700 hover:text-primary flex items-center gap-1"
                    title="View on iOS App Store"
                  >
                    <i className="fab fa-apple text-[0.95rem]" /> App Store
                  </a>
                )}
                {project.playStoreUrl && !project.appStoreUrl && (
                  <a
                    href={project.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[0.75rem] font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-1"
                    title="View on Google Play"
                  >
                    <i className="fab fa-google-play text-[0.9rem]" /> Play Store
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}
