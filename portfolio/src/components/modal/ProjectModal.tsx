import type { Project } from '../../types'

interface Props {
  project: Project | null
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: Props) {
  if (!project) return null

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative bg-white rounded-3xl p-6 sm:p-8 w-full max-w-3xl shadow-2xl z-10 my-8 max-h-[90vh] overflow-y-auto border border-border/80 animate-[fadeInUp_0.3s_ease]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-all cursor-pointer border-none z-20"
          aria-label="Close modal"
        >
          <i className="fas fa-times text-[1.1rem]" />
        </button>

        {/* Header */}
        <div className="mb-6 pr-10">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-[0.75rem] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-primary/10 text-primary">
              {project.category}
            </span>
            {project.featured && (
              <span className="text-[0.75rem] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 flex items-center gap-1">
                <i className="fas fa-star text-[0.7rem]" /> Featured Project
              </span>
            )}
          </div>
          <h2 className="text-[1.8rem] sm:text-[2.2rem] font-extrabold text-slate-900 leading-tight">
            {project.title}
          </h2>
        </div>

        {/* Primary Image Preview */}
        {project.images.length > 0 && (
          <div className="rounded-2xl overflow-hidden mb-6 border border-border/60 bg-slate-50 max-h-[380px]">
            <img
              src={project.images[0].src}
              alt={project.images[0].alt}
              className="w-full h-full object-contain max-h-[380px] mx-auto"
            />
          </div>
        )}

        {/* Gallery Thumbnails if multiple */}
        {project.images.length > 1 && (
          <div className="grid grid-cols-3 gap-3 mb-6">
            {project.images.slice(1).map((img, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden border border-border/60 bg-slate-50 h-28"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        )}

        {/* Detailed Description */}
        <div className="space-y-4 mb-6">
          <h3 className="text-[1.1rem] font-bold text-slate-900 flex items-center gap-2">
            <i className="fas fa-align-left text-primary text-[0.9rem]" /> Overview
          </h3>
          <p className="text-slate-600 leading-relaxed text-[0.98rem]">
            {project.longDescription || project.description}
          </p>
        </div>

        {/* Features Bullet List */}
        {project.features && project.features.length > 0 && (
          <div className="mb-6 bg-slate-50 p-5 rounded-2xl border border-border/60">
            <h3 className="text-[1.05rem] font-bold text-slate-900 mb-3 flex items-center gap-2">
              <i className="fas fa-check-circle text-secondary text-[0.95rem]" /> Key Features & Capabilities
            </h3>
            <ul className="space-y-2.5">
              {project.features.map((feat, i) => (
                <li key={i} className="flex items-start gap-2.5 text-[0.92rem] text-slate-700">
                  <span className="w-5 h-5 rounded-full bg-secondary/15 text-secondary flex items-center justify-center shrink-0 text-[0.75rem] mt-0.5 font-bold">
                    ✓
                  </span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech Stack Tags */}
        <div className="mb-8">
          <h3 className="text-[0.95rem] font-bold text-slate-900 mb-3 flex items-center gap-2">
            <i className="fas fa-code text-primary-light text-[0.9rem]" /> Technologies Used
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="text-[0.82rem] font-medium px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Links & Action Buttons */}
        <div className="flex flex-wrap gap-3 pt-4 border-t border-border">
          {project.appStoreUrl && (
            <a
              href={project.appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-slate-900 text-white font-semibold text-[0.9rem] inline-flex items-center gap-2 hover:bg-slate-800 transition-all shadow-md"
            >
              <i className="fab fa-apple text-[1.1rem]" /> View on App Store
            </a>
          )}
          {project.playStoreUrl && (
            <a
              href={project.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-emerald-600 text-white font-semibold text-[0.9rem] inline-flex items-center gap-2 hover:bg-emerald-700 transition-all shadow-md"
            >
              <i className="fab fa-google-play text-[1rem]" /> View on Google Play
            </a>
          )}
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full gradient-primary text-white font-semibold text-[0.9rem] inline-flex items-center gap-2 hover:shadow-lg hover:shadow-primary/20 transition-all"
            >
              <i className="fas fa-external-link-alt text-[0.85rem]" /> Visit Live App / Website
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
