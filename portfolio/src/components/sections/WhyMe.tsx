import { useState } from 'react'
import { testimonials } from '../../data/testimonials'
import SectionHeader from '../ui/SectionHeader'

function TestimonialCard({ t }: { t: (typeof testimonials)[0] }) {
  return (
    <div
      className={`rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 relative flex flex-col justify-between ${
        t.featured
          ? 'gradient-primary text-white shadow-primary/20'
          : t.isOld
          ? 'bg-white/70 border border-slate-200/80 opacity-75'
          : 'bg-white border border-slate-200/80 hover:shadow-xl'
      }`}
    >
      <div>
        {/* Quote Icon & Rating */}
        <div className="flex items-center justify-between mb-4">
          <div className={`text-sm tracking-wider ${t.featured ? 'text-amber-300' : 'text-amber-400'}`}>
            {'★'.repeat(t.stars)}
          </div>
          <i className={`fas fa-quote-right text-[1.4rem] ${t.featured ? 'text-white/20' : 'text-slate-200'}`} />
        </div>

        <blockquote className={`text-[0.96rem] leading-relaxed mb-6 font-medium ${t.featured ? 'text-white/95' : 'text-slate-700'}`}>
          "{t.quote}"
        </blockquote>
      </div>

      <div className="space-y-3 pt-4 border-t border-current/10">
        {t.tags && t.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {t.tags.map((tag, i) => (
              <span
                key={i}
                className={`text-[0.73rem] px-2.5 py-0.5 rounded-full font-semibold ${
                  t.featured
                    ? 'bg-white/20 text-white'
                    : tag.color === 'green'
                    ? 'bg-emerald-50 text-emerald-600 border border-emerald-200/60'
                    : 'bg-primary/10 text-primary border border-primary/20'
                }`}
              >
                {tag.label}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between">
          <div className={`text-[0.85rem] ${t.featured ? 'text-white/80' : 'text-slate-500'}`}>
            {t.clientName && (
              <span className={`font-bold block ${t.featured ? 'text-white' : 'text-slate-900'}`}>
                {t.clientName}
              </span>
            )}
            <span className="text-[0.8rem]">{t.job}</span>
          </div>

          <span className={`text-[0.72rem] font-bold px-2 py-0.5 rounded ${t.featured ? 'bg-white/20 text-white' : 'bg-emerald-100 text-emerald-700'}`}>
            ✓ Verified Upwork Client
          </span>
        </div>
      </div>
    </div>
  )
}

export default function WhyMe() {
  const [isExpanded, setIsExpanded] = useState(false)
  const INITIAL_COUNT = 4

  const displayedTestimonials = isExpanded ? testimonials : testimonials.slice(0, INITIAL_COUNT)

  const handleToggle = () => {
    if (isExpanded) {
      document.getElementById('whyme')?.scrollIntoView({ behavior: 'smooth' })
    }
    setIsExpanded(!isExpanded)
  }

  return (
    <section id="whyme" className="py-24 px-6 bg-white relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="Client Feedback"
          icon="fa-thumbs-up"
          title={
            <>
              What Clients Say About <span className="gradient-text">Working With Me</span>
            </>
          }
          subtitle="Real reviews from international clients on Upwork praising communication, speed, and technical quality."
        />

        {/* Testimonials Grid */}
        <div className="grid grid-cols-2 gap-6 max-lg:grid-cols-1 mb-8">
          {displayedTestimonials.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>

        {/* Expand / Collapse Button */}
        {testimonials.length > INITIAL_COUNT && (
          <div className="flex justify-center mb-12">
            <button
              onClick={handleToggle}
              className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-slate-100 hover:bg-slate-200/80 text-slate-800 font-semibold text-[0.92rem] transition-all cursor-pointer border border-slate-200/80 hover:border-slate-300 hover:shadow active:scale-95 group"
            >
              <span>
                {isExpanded ? 'Show Less Reviews' : `View All ${testimonials.length} Reviews`}
              </span>
              <i
                className={`fas fa-chevron-${
                  isExpanded ? 'up' : 'down'
                } text-[0.8rem] text-slate-500 group-hover:text-slate-800 transition-transform duration-300`}
              />
            </button>
          </div>
        )}

        {/* High Converting CTA Box */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white text-center relative overflow-hidden border border-slate-800">
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="inline-block px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-[0.8rem] mb-3">
              ★ TOP RATED FREELANCER
            </span>
            <h3 className="text-[1.8rem] font-extrabold mb-3">Ready to Build Your Next Product?</h3>
            <p className="text-slate-300 text-[0.98rem] leading-relaxed mb-6">
              Clear communication, daily updates, and rapid execution — backed by <strong>100% Job Success Rate</strong> on Upwork.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="#contact"
                className="gradient-primary text-white px-8 py-3.5 rounded-full font-semibold text-[0.95rem] inline-flex items-center gap-2 transition-all duration-300"
              >
                <i className="fas fa-paper-plane text-[0.85rem]" /> Let's Work Together
              </a>
              <a
                href="https://www.upwork.com/freelancers/~010219e25749223694"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 text-white hover:bg-white/20 border border-white/20 px-7 py-3.5 rounded-full font-semibold text-[0.95rem] inline-flex items-center gap-2 transition-all"
              >
                <i className="fab fa-upwork text-emerald-400" /> Upwork Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
