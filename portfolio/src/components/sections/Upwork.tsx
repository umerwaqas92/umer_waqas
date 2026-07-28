import { useState } from 'react'
import { useSlider } from '../../hooks/useSlider'
import SectionHeader from '../ui/SectionHeader'
import ImageLightboxModal from '../modal/ImageLightboxModal'

const slides = [
  { src: 'upwork-ss1.png', alt: 'Upwork Top Rated Profile Overview' },
  { src: 'upwork-ss2.png', alt: 'Upwork Client Ratings & Earnings' },
  { src: 'upwork-ss3.png', alt: 'Upwork Job History & Feedback' },
]

const statCards = [
  { icon: 'fa-star', title: 'Top Rated', desc: 'Elite freelancer status' },
  { icon: 'fa-check-circle', title: '100% Job Success', desc: 'Perfect client rating' },
  { icon: 'fa-rocket', title: '40+ Projects', desc: 'Web, mobile & AI solutions' },
  { icon: 'fa-clock', title: 'Since 2023', desc: 'Proven excellence' },
]

export default function Upwork() {
  const { current, next, prev, goTo } = useSlider(slides.length)
  const [activeLightbox, setActiveLightbox] = useState<{ src: string; alt: string } | null>(null)

  return (
    <section id="upwork" className="py-14 sm:py-16 px-6 bg-slate-50/70">
      <div className="max-w-6xl mx-auto space-y-8">
        <SectionHeader
          tag="Upwork Excellence"
          icon="fa-award"
          title={
            <>
              Top Rated <span className="gradient-text">Freelancer</span>
            </>
          }
          subtitle="Proven track record of client satisfaction, high earnings, and 100% project completion on Upwork."
        />

        <div className="grid grid-cols-12 gap-6 items-center">
          {/* Slider */}
          <div className="col-span-12 lg:col-span-6 relative rounded-2xl overflow-hidden bg-white border border-slate-200/80 group shadow-xs">
            <div
              className="flex transition-transform duration-500 cursor-pointer"
              style={{ transform: `translateX(-${current * 100}%)` }}
              onClick={() => setActiveLightbox(slides[current])}
            >
              {slides.map((slide, i) => (
                <div key={i} className="min-w-full relative">
                  <img src={slide.src} alt={slide.alt} className="w-full h-auto object-cover max-h-[280px]" />
                  <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white/90 text-slate-900 text-[0.78rem] font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                      <i className="fas fa-search-plus text-primary text-[0.72rem]" /> Inspect Fullscreen
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Nav Arrows */}
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/90 text-slate-700 flex items-center justify-center hover:bg-white transition-all cursor-pointer border-none text-[0.75rem] z-10 shadow-xs"
              aria-label="Previous slide"
            >
              <i className="fas fa-chevron-left" />
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/90 text-slate-700 flex items-center justify-center hover:bg-white transition-all cursor-pointer border-none text-[0.75rem] z-10 shadow-xs"
              aria-label="Next slide"
            >
              <i className="fas fa-chevron-right" />
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-1.5 pb-2 pt-1 bg-white">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`h-1.5 rounded-full transition-all cursor-pointer border-none ${
                    i === current ? 'gradient-primary w-5' : 'bg-slate-200 w-1.5'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Stats & CTA Card */}
          <div className="col-span-12 lg:col-span-6 space-y-3.5">
            <div className="grid grid-cols-2 gap-3 max-sm:grid-cols-1">
              {statCards.map((card, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 px-3.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs group"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary group-hover:gradient-primary group-hover:text-white flex items-center justify-center text-[0.95rem] shrink-0 transition-all">
                    <i className={`fas ${card.icon}`} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[0.88rem] text-slate-900 leading-tight">{card.title}</h4>
                    <p className="text-slate-500 text-[0.74rem] leading-tight">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-2">
              <div className="flex items-center justify-center gap-1.5 text-emerald-600 font-bold text-[0.88rem]">
                <i className="fas fa-shield-alt text-[0.95rem]" /> Verified Upwork Pro Freelancer
              </div>
              <p className="text-slate-600 text-[0.8rem] leading-tight">
                Available for hourly contracts, fixed-price projects, & dedicated consulting.
              </p>
              <a
                href="https://www.upwork.com/freelancers/~010219e25749223694"
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-primary text-white px-5 py-2 rounded-full font-semibold text-[0.82rem] inline-flex items-center gap-1.5 transition-all duration-300"
              >
                <i className="fab fa-upwork text-[0.95rem]" /> View Official Upwork Profile
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeLightbox && (
        <ImageLightboxModal
          src={activeLightbox.src}
          alt={activeLightbox.alt}
          onClose={() => setActiveLightbox(null)}
        />
      )}
    </section>
  )
}
