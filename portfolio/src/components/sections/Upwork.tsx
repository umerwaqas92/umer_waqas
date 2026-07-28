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
  { icon: 'fa-star', title: 'Top Rated', desc: 'Elite freelancer status on Upwork' },
  { icon: 'fa-check-circle', title: '100% Job Success', desc: 'Perfect client satisfaction score' },
  { icon: 'fa-rocket', title: '40+ Projects', desc: 'Delivered web, mobile & AI solutions' },
  { icon: 'fa-clock', title: 'Since 2023', desc: 'Years of proven freelance excellence' },
]

export default function Upwork() {
  const { current, next, prev, goTo } = useSlider(slides.length)
  const [activeLightbox, setActiveLightbox] = useState<{ src: string; alt: string } | null>(null)

  return (
    <section id="upwork" className="py-24 px-6 bg-slate-50/70">
      <div className="max-w-6xl mx-auto">
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

        <div className="grid grid-cols-[1.1fr_1fr] gap-12 items-center max-lg:grid-cols-1">
          {/* Slider */}
          <div className="relative rounded-3xl overflow-hidden bg-white shadow-xl border border-slate-200/80 group">
            <div
              className="flex transition-transform duration-500 cursor-pointer"
              style={{ transform: `translateX(-${current * 100}%)` }}
              onClick={() => setActiveLightbox(slides[current])}
            >
              {slides.map((slide, i) => (
                <div key={i} className="min-w-full relative">
                  <img src={slide.src} alt={slide.alt} className="w-full h-auto object-cover" />
                  <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white/90 text-slate-900 text-[0.85rem] font-bold px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                      <i className="fas fa-search-plus text-primary" /> Click to Inspect Fullscreen
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Nav Arrows */}
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 text-slate-700 shadow-md flex items-center justify-center hover:bg-white transition-all cursor-pointer border-none text-[0.9rem] z-10"
              aria-label="Previous slide"
            >
              <i className="fas fa-chevron-left" />
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 text-slate-700 shadow-md flex items-center justify-center hover:bg-white transition-all cursor-pointer border-none text-[0.9rem] z-10"
              aria-label="Next slide"
            >
              <i className="fas fa-chevron-right" />
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-2 pb-4 pt-2 bg-white">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`h-2.5 rounded-full transition-all cursor-pointer border-none ${
                    i === current ? 'gradient-primary w-7' : 'bg-slate-200 w-2.5'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Stats Grid */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {statCards.map((card, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all text-center group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary group-hover:gradient-primary group-hover:text-white flex items-center justify-center text-[1.3rem] mx-auto mb-3 transition-all">
                    <i className={`fas ${card.icon}`} />
                  </div>
                  <h3 className="font-bold text-[1.05rem] text-slate-900 mb-1">{card.title}</h3>
                  <p className="text-slate-500 text-[0.82rem]">{card.desc}</p>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center">
              <div className="flex items-center justify-center gap-2 mb-2 text-emerald-600 font-bold text-[0.95rem]">
                <i className="fas fa-shield-alt text-[1.1rem]" /> Verified Upwork Pro Freelancer
              </div>
              <p className="text-slate-600 text-[0.85rem] mb-4">
                Available for hourly contracts, fixed-price projects, and dedicated long-term consulting.
              </p>
              <a
                href="https://www.upwork.com/freelancers/~010219e25749223694"
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-primary text-white px-8 py-3.5 rounded-full font-semibold text-[0.92rem] inline-flex items-center gap-2 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
              >
                <i className="fab fa-upwork text-[1.1rem]" /> View Official Upwork Profile
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
