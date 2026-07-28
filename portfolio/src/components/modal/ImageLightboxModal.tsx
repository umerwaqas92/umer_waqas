interface Props {
  src: string | null
  alt?: string
  onClose: () => void
}

export default function ImageLightboxModal({ src, alt, onClose }: Props) {
  if (!src) return null

  return (
    <div className="fixed inset-0 z-[2500] flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-[fadeInUp_0.25s_ease]">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 text-white hover:bg-white/20 flex items-center justify-center cursor-pointer border-none text-[1.3rem] transition-all z-10"
        aria-label="Close image lightbox"
      >
        <i className="fas fa-times" />
      </button>

      <div className="max-w-5xl max-h-[90vh] overflow-hidden rounded-2xl border border-white/10 relative">
        <img
          src={src}
          alt={alt || 'Image Preview'}
          className="w-full h-full object-contain max-h-[85vh]"
        />
        {alt && (
          <div className="absolute bottom-0 inset-x-0 p-4 bg-slate-900/80 backdrop-blur-sm text-center text-slate-200 text-[0.9rem] font-medium">
            {alt}
          </div>
        )}
      </div>
    </div>
  )
}
