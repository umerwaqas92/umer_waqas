import { useState, useEffect } from 'react'

interface Props {
  onOpen: () => void
}

export default function WhatsAppFloat({ onOpen }: Props) {
  const [visible, setVisible] = useState(true)
  const [lastScroll, setLastScroll] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY
      if (currentScroll > 300 && currentScroll > lastScroll) {
        setVisible(false)
      } else if (currentScroll < lastScroll) {
        setVisible(true)
      }
      setLastScroll(currentScroll)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScroll])

  return (
    <button
      onClick={onOpen}
      className={`fixed bottom-6 right-6 z-[999] w-14 h-14 rounded-full bg-green-500 text-white text-[1.5rem] shadow-lg hover:bg-green-600 hover:shadow-xl hover:scale-110 transition-all duration-300 cursor-pointer border-none flex items-center justify-center ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5 pointer-events-none'
      }`}
      aria-label="Chat on WhatsApp"
    >
      <i className="fab fa-whatsapp" />
    </button>
  )
}
