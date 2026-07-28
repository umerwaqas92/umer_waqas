import { testimonials } from '../../data/testimonials'

function TestimonialCard({ t, index }: { t: (typeof testimonials)[0]; index: number }) {
  return (
    <div
      className={`rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 ${
        t.featured
          ? 'bg-primary text-white shadow-xl'
          : t.isOld
          ? 'bg-bg-card border border-border opacity-60'
          : 'bg-bg-card border border-border shadow-[0_8px_32px_rgba(108,92,231,0.08)]'
      } ${index === testimonials.length - 1 ? 'max-lg:hidden' : ''}`}
    >
      <div className={`text-lg mb-3 ${t.featured ? 'text-white/80' : 'text-yellow-500'}`}>
        {'★'.repeat(t.stars)}
      </div>
      <blockquote className={`text-[0.95rem] leading-relaxed mb-4 ${t.featured ? 'text-white/90' : 'text-text'}`}>
        {t.quote}
      </blockquote>
      <div className="space-y-1">
        {t.tags && t.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {t.tags.map((tag, i) => (
              <span
                key={i}
                className={`text-[0.75rem] px-2.5 py-1 rounded-full font-medium ${
                  t.featured
                    ? 'bg-white/15 text-white'
                    : tag.color === 'green'
                    ? 'bg-secondary/10 text-secondary'
                    : 'bg-primary/10 text-primary-light'
                }`}
              >
                {tag.label}
              </span>
            ))}
          </div>
        )}
        <div className={`text-[0.85rem] ${t.featured ? 'text-white/70' : 'text-text-muted'}`}>
          {t.clientName && (
            <span className="font-medium text-text">— {t.clientName}</span>
          )}
          <span> {t.job}</span>
        </div>
      </div>
    </div>
  )
}

export default function WhyMe() {
  return (
    <section id="whyme" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Testimonials */}
        <h3 className="text-center text-[1.5rem] font-bold mb-8">
          What Clients Say About <span className="gradient-text">Working With Me</span>
        </h3>
        <div className="grid grid-cols-2 gap-6 max-lg:grid-cols-1">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} t={t} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 p-8 rounded-2xl bg-bg-card border border-border shadow-[0_8px_32px_rgba(108,92,231,0.08)]">
          <p className="text-text-muted mb-6">
            Clear communication, on-time delivery, and a collaborative mindset — backed by{' '}
            <strong className="text-text">100% Job Success</strong> and{' '}
            <strong className="text-text">Top Rated</strong> status on Upwork.
          </p>
          <a
            href="#contact"
            className="gradient-primary text-white px-8 py-3 rounded-full font-semibold text-[0.95rem] inline-flex items-center gap-2 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
          >
            <i className="fas fa-paper-plane" /> Let's Work Together
          </a>
        </div>
      </div>
    </section>
  )
}
