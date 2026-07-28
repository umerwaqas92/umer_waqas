import { useState } from 'react'
import { handleWhatsappSubmit } from '../../utils/whatsapp'

interface Props {
  isOpen: boolean
  onClose: () => void
}

export default function WhatsAppModal({ isOpen, onClose }: Props) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !message.trim()) return
    handleWhatsappSubmit(name.trim(), email.trim(), message.trim())
    setName('')
    setEmail('')
    setMessage('')
    onClose()
  }

  if (!isOpen) return null

  return (
    <div
      className={`fixed inset-0 z-[2000] flex items-center justify-center p-6 transition-opacity duration-300 ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />
      {/* Modal */}
      <div className="relative bg-white rounded-2xl p-8 w-full max-w-md shadow-2xl animate-[fadeInUp_0.3s_ease]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-bg-elevated flex items-center justify-center text-text-muted hover:text-text cursor-pointer border-none"
        >
          <i className="fas fa-times" />
        </button>
        <div className="text-center mb-6">
          <div className="w-14 h-14 rounded-2xl bg-green-50 text-green-500 flex items-center justify-center text-[1.5rem] mx-auto mb-4">
            <i className="fab fa-whatsapp" />
          </div>
          <h3 className="text-[1.3rem] font-bold">Let's Discuss Your Project</h3>
          <p className="text-text-muted text-[0.9rem] mt-1">
            Fill in the details and I'll get back to you on WhatsApp.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-[0.85rem] font-medium text-text mb-1.5">
              Your Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. John Doe"
              required
              className="w-full px-4 py-3 rounded-xl border border-border text-[0.95rem] outline-none focus:border-primary transition-colors bg-bg"
            />
          </div>
          <div>
            <label className="block text-[0.85rem] font-medium text-text mb-1.5">
              Your Email <span className="text-text-muted font-normal">(optional)</span>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g. john@example.com"
              className="w-full px-4 py-3 rounded-xl border border-border text-[0.95rem] outline-none focus:border-primary transition-colors bg-bg"
            />
          </div>
          <div>
            <label className="block text-[0.85rem] font-medium text-text mb-1.5">
              Project Details <span className="text-red-500">*</span>
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Describe your project, budget, timeline..."
              required
              rows={4}
              className="w-full px-4 py-3 rounded-xl border border-border text-[0.95rem] outline-none focus:border-primary transition-colors bg-bg resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-green-500 text-white font-semibold text-[0.95rem] hover:bg-green-600 transition-colors cursor-pointer border-none flex items-center justify-center gap-2"
          >
            <i className="fab fa-whatsapp" /> Send via WhatsApp
          </button>
        </form>
      </div>
    </div>
  )
}
