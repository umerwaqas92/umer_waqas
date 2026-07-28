import { useState } from 'react'
import { projects, projectFilters } from '../../data/projects'
import { useSlider } from '../../hooks/useSlider'
import SectionHeader from '../ui/SectionHeader'
import ProjectModal from '../modal/ProjectModal'
import type { Project } from '../../types'

function ProjectSlider({ images, onOpenModal, category }: { images: { src: string; alt: string }[]; onOpenModal: () => void; category?: string }) {
  const { current, next, prev, goTo } = useSlider(images.length)
  const hasMultiple = images.length > 1

  // Dynamic Pinterest Pin height styling based on project type for natural staggered masonry
  const getAspectClass = (cat?: string) => {
    if (!cat) return 'aspect-[4/3]'
    if (cat.includes('mobile')) return 'aspect-[3/4] max-h-[460px]' // Tall Pinterest pin for mobile app screens
    if (cat.includes('desktop')) return 'aspect-[16/11] max-h-[360px]'
    return 'aspect-[4/3] max-h-[380px]' // Standard web app ratio
  }

  return (
    <div className="relative group overflow-hidden rounded-[1.5rem] bg-white shadow-xs cursor-pointer border border-slate-200/80 w-full">
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
        onClick={onOpenModal}
      >
        {images.map((img, i) => (
          <div key={i} className={`min-w-full relative overflow-hidden ${getAspectClass(category)} bg-white flex items-center justify-center`}>
            <img 
              src={img.src} 
              alt={img.alt} 
              className="w-full h-full object-contain p-2" 
            />
            {/* Pinterest Style Gradient Overlay on Hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 z-10">
              {/* Top Row: Category badge */}
              <div className="flex justify-between items-center">
                <span className="text-[0.65rem] font-bold uppercase tracking-wider text-white bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                  {category}
                </span>
                <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/40 transition-colors">
                  <i className="fas fa-arrow-up-right-from-square text-[0.75rem]" />
                </span>
              </div>

              {/* Center: Pinterest Action Button */}
              <div className="flex justify-center">
                <span className="gradient-primary text-white text-[0.82rem] font-bold px-5 py-2.5 rounded-full shadow-xl backdrop-blur-md transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2">
                  <i className="fas fa-expand text-[0.8rem]" /> Expand Project Details
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows (Fade in on Hover) */}
      {hasMultiple && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 text-slate-800 shadow-md flex items-center justify-center hover:bg-white hover:scale-110 cursor-pointer border-none text-[0.75rem] z-20 opacity-0 group-hover:opacity-100 transition-all duration-300"
            aria-label="Previous image"
          >
            <i className="fas fa-chevron-left" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 text-slate-800 shadow-md flex items-center justify-center hover:bg-white hover:scale-110 cursor-pointer border-none text-[0.75rem] z-20 opacity-0 group-hover:opacity-100 transition-all duration-300"
            aria-label="Next image"
          >
            <i className="fas fa-chevron-right" />
          </button>
          
          {/* Pagination Dots */}
          <div className="flex justify-center gap-1.5 pb-2.5 absolute bottom-2 inset-x-0 z-20 opacity-80 group-hover:opacity-100 transition-opacity">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); goTo(i); }}
                className={`h-1.5 rounded-full cursor-pointer border-none transition-all duration-300 ${
                  i === current ? 'gradient-primary w-5' : 'bg-slate-300 hover:bg-slate-400 w-1.5'
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
    <section id="projects" className="py-24 px-6 bg-white">
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
                    ? 'gradient-primary text-white font-semibold shadow-md shadow-primary/20'
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

        {/* Pinterest Masonry Pin Grid Layout */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredProjects.map((project, i) => (
            <div
              key={i}
              className="break-inside-avoid inline-block w-full group cursor-pointer transition-transform duration-300 hover:-translate-y-2 flex flex-col"
              onClick={() => setSelectedProject(project)}
            >
              {/* Full Dominant Image Pin Card */}
              <ProjectSlider
                images={project.images}
                onOpenModal={() => setSelectedProject(project)}
                category={project.category}
              />

              {/* Minimal Pinterest Pin Metadata Text (Small & Clean) */}
              <div className="pt-3 px-1">
                {/* Title & Platform Links */}
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-bold text-[0.95rem] text-slate-900 group-hover:text-primary transition-colors leading-snug line-clamp-1">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-[0.85rem] text-slate-400 shrink-0">
                    {project.appStoreUrl && <i className="fab fa-apple text-slate-700" title="iOS App Store" />}
                    {project.playStoreUrl && <i className="fab fa-google-play text-emerald-600" title="Google Play Store" />}
                    {project.url && <i className="fas fa-globe text-primary" title="Live Web App" />}
                  </div>
                </div>

                {/* Micro Description */}
                <p className="text-slate-500 text-[0.8rem] leading-snug mt-1 line-clamp-1">
                  {project.description}
                </p>

                {/* Micro Tags */}
                <div className="flex flex-wrap gap-1 mt-2">
                  {project.tags.slice(0, 3).map((tag, j) => (
                    <span
                      key={j}
                      className="text-[0.66rem] px-2 py-0.5 rounded-full bg-slate-200/60 text-slate-600 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-[0.65rem] px-1.5 py-0.5 rounded-full bg-slate-100 text-slate-400">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
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
