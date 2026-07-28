import { useSlider } from '../../hooks/useSlider'
import SectionHeader from '../ui/SectionHeader'

const slides = [
  { src: 'upwork-ss1.png', alt: 'Upwork Screenshot 1' },
  { src: 'upwork-ss2.png', alt: 'Upwork Screenshot 2' },
  { src: 'upwork-ss3.png', alt: 'Upwork Screenshot 3' },
]

const statCards = [
  { icon: 'fa-star', title: 'Top Rated', desc: 'Elite freelancer status on Upwork' },
  { icon: 'fa-check-circle', title: '100% Job Success', desc: 'Perfect client satisfaction score' },
  { icon: 'fa-rocket', title: '40+ Projects', desc: 'Delivered automation bots & AI solutions' },
  { icon: 'fa-clock', title: 'Since 2023', desc: 'Years of proven freelance excellence' },
]

export default function Upwork() {
  const { current, next, prev, goTo } = useSlider(slides.length)

  return (
    <section id="upwork" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="Upwork"
          title={
            <>
              Top Rated <span className="gradient-text">Freelancer</span>
            </>
          }
        />
        <div className="grid grid-cols-[1fr_1fr] gap-12 items-start max-lg:grid-cols-1">
          {/* Slider */}
          <div className="relative rounded-2xl overflow-hidden bg-bg-card shadow-[0_8px_32px_rgba(108,92,231,0.12)]">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {slides.map((slide, i) => (
                <div key={i} className="min-w-full">
                  <img src={slide.src} alt={slide.alt} className="w-full" />
                </div>
              ))}
            </div>
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 text-text shadow-md flex items-center justify-center hover:bg-white transition-all cursor-pointer border-none text-[0.9rem]"
            >
              <i className="fas fa-chevron-left" />
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 text-text shadow-md flex items-center justify-center hover:bg-white transition-all cursor-pointer border-none text-[0.9rem]"
            >
              <i className="fas fa-chevron-right" />
            </button>
            <div className="flex justify-center gap-2 pb-4 pt-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer border-none ${
                    i === current ? 'gradient-primary w-6' : 'bg-border'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {statCards.map((card, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-bg-card border border-border shadow-[0_8px_32px_rgba(108,92,231,0.06)] text-center"
              >
                <i className={`fas ${card.icon} text-[1.5rem] text-primary mb-3`} />
                <h3 className="font-bold text-[1rem] mb-1">{card.title}</h3>
                <p className="text-text-muted text-[0.85rem]">{card.desc}</p>
              </div>
            ))}
            <div className="col-span-2 text-center mt-4">
              <a
                href="https://www.upwork.com/freelancers/~010219e25749223694"
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-primary text-white px-8 py-3 rounded-full font-semibold text-[0.95rem] inline-flex items-center gap-2 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
              >
                <i className="fab fa-upwork" /> View Upwork Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
