import { useState } from 'react'
import { contactMethods } from '../../data/contact'
import { socialLinks } from '../../data/social'
import SectionHeader from '../ui/SectionHeader'

interface Props {
  onOpenModal: () => void
}

export default function Contact({ onOpenModal }: Props) {
  const [toastMessage, setToastMessage] = useState<string | null>(null)

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text)
    setToastMessage(`Copied ${label} to clipboard!`)
    setTimeout(() => setToastMessage(null), 3000)
  }

  return (
    <section id="contact" className="py-24 px-6 bg-slate-50/70 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="Get In Touch"
          icon="fa-envelope"
          title={
            <>
              Let's Work <span className="gradient-text">Together</span>
            </>
          }
          subtitle="Have an AI application idea, Flutter mobile app project, or full-stack web need? Reach out today!"
        />

        {/* Toast Notification */}
        {toastMessage && (
          <div className="fixed bottom-6 right-6 z-[3000] bg-slate-900 text-white px-5 py-3 rounded-2xl flex items-center gap-3 animate-[fadeInUp_0.3s_ease] border border-slate-700">
            <i className="fas fa-check-circle text-emerald-400 text-[1.1rem]" />
            <span className="text-[0.9rem] font-medium">{toastMessage}</span>
          </div>
        )}

        <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1 max-w-4xl mx-auto mb-14">
          {contactMethods.map((method, i) => {
            const isWhatsapp = method.iconType === 'whatsapp'
            const isUpwork = method.iconType === 'upwork'

            const handleClick = (e: React.MouseEvent) => {
              if (isWhatsapp) {
                e.preventDefault()
                onOpenModal()
              } else if (method.href.startsWith('mailto:')) {
                copyToClipboard(method.detail, 'Email Address')
              } else if (method.href.startsWith('tel:')) {
                copyToClipboard(method.detail, 'Phone Number')
              }
            }

            return (
              <div
                key={i}
                onClick={handleClick}
                className="p-7 rounded-3xl bg-white border border-slate-200/80 text-center cursor-pointer transition-all duration-300 hover:-translate-y-1.5 group flex flex-col justify-between"
              >
                <div>
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center text-[1.4rem] mx-auto mb-5 transition-all duration-300 ${
                      isWhatsapp
                        ? 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white'
                        : isUpwork
                        ? 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white'
                        : 'bg-primary/10 text-primary group-hover:gradient-primary group-hover:text-white'
                    }`}
                  >
                    <i className={method.icon} />
                  </div>
                  <h3 className="font-extrabold text-[1.1rem] text-slate-900 mb-1">{method.title}</h3>
                  <p className="text-slate-500 text-[0.88rem] mb-4">{method.detail}</p>
                </div>

                <a
                  href={method.href}
                  target={isUpwork ? '_blank' : undefined}
                  rel={isUpwork ? 'noopener noreferrer' : undefined}
                  onClick={(e) => {
                    if (isWhatsapp) e.preventDefault()
                  }}
                  className="text-[0.88rem] font-bold gradient-text inline-flex items-center justify-center gap-1.5 pt-3 border-t border-slate-100"
                >
                  {method.action} <i className="fas fa-arrow-right text-[0.75rem]" />
                </a>
              </div>
            )
          })}
        </div>

        {/* Social Platforms Bar */}
        <div className="flex items-center justify-center gap-4 text-center flex-wrap pt-6 border-t border-slate-200">
          <span className="text-slate-500 text-[0.9rem] font-medium">Find me on social & developer platforms:</span>
          <div className="flex gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                title={link.title}
                className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:gradient-primary hover:text-white hover:border-transparent transition-all duration-300 text-[1.05rem]"
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
