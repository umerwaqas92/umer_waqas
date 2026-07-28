import { contactMethods } from '../../data/contact'
import { socialLinks } from '../../data/social'
import SectionHeader from '../ui/SectionHeader'

interface Props {
  onOpenModal: () => void
}

export default function Contact({ onOpenModal }: Props) {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="Contact"
          title={
            <>
              Let's Work <span className="gradient-text">Together</span>
            </>
          }
        />
        <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1 max-w-4xl mx-auto">
          {contactMethods.map((method, i) => {
            const isWhatsapp = method.iconType === 'whatsapp'
            const isUpwork = method.iconType === 'upwork'
            const Component = isWhatsapp ? 'button' : 'a'
            const extraProps = isWhatsapp
              ? { onClick: onOpenModal }
              : isUpwork
              ? { href: method.href, target: '_blank', rel: 'noopener noreferrer' as const }
              : { href: method.href }

            return (
              <Component
                key={i}
                className="p-6 rounded-2xl bg-bg-card border border-border shadow-[0_8px_32px_rgba(108,92,231,0.06)] text-center cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group"
                {...extraProps}
              >
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center text-[1.3rem] mx-auto mb-4 transition-all duration-300 ${
                    isWhatsapp
                      ? 'bg-green-50 text-green-500 group-hover:bg-green-500 group-hover:text-white'
                      : isUpwork
                      ? 'bg-green-50 text-green-600 group-hover:bg-green-600 group-hover:text-white'
                      : 'bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white'
                  }`}
                >
                  <i className={method.icon} />
                </div>
                <h3 className="font-bold text-[1rem] mb-1">{method.title}</h3>
                <p className="text-text-muted text-[0.85rem] mb-3">{method.detail}</p>
                <span className="text-[0.85rem] font-medium gradient-text inline-flex items-center gap-1">
                  {method.action} <i className="fas fa-arrow-right text-[0.75rem]" />
                </span>
              </Component>
            )
          })}
        </div>

        {/* Social bar */}
        <div className="flex items-center justify-center gap-4 mt-12 flex-wrap">
          <span className="text-text-muted text-[0.9rem]">Find me on social platforms:</span>
          <div className="flex gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                title={link.title}
                className="w-10 h-10 rounded-full bg-bg-elevated flex items-center justify-center text-text-muted hover:gradient-primary hover:text-white transition-all duration-300"
              >
                <i className={link.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
