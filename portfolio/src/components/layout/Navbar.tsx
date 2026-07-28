import { useState, useEffect } from 'react'
import { navLinks } from '../../data/navigation'
import { useActiveSection } from '../../hooks/useActiveSection'

interface Props {
  onOpenModal?: () => void
}

export default function Navbar({ onOpenModal }: Props) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const activeSection = useActiveSection(navLinks.map((l) => l.href.slice(1)))

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const id = href.slice(1)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
    setMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] py-4 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-xl border-b border-slate-200/80 py-[12px] shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="text-[1.8rem] font-black tracking-tighter gradient-text flex items-center gap-2"
        >
          <span>UW</span>
          <span className="w-2 h-2 rounded-full bg-emerald-500 status-dot inline-block" />
        </a>

        {/* Desktop Links */}
        <ul
          className={`flex gap-7 items-center max-lg:fixed max-lg:top-0 max-lg:right-0 max-lg:h-full max-lg:w-64 max-lg:bg-white max-lg:shadow-2xl max-lg:flex-col max-lg:pt-20 max-lg:px-8 max-lg:transition-transform max-lg:duration-300 max-lg:z-50 ${
            menuOpen ? 'max-lg:translate-x-0' : 'max-lg:translate-x-full'
          }`}
        >
          {navLinks.map((link) => {
            const sectionId = link.href.slice(1)
            const isActive = activeSection === sectionId
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-[0.9rem] font-semibold relative transition-colors duration-300 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2.5px] after:gradient-primary after:transition-all after:duration-300 ${
                    isActive
                      ? 'text-primary after:w-full'
                      : 'text-slate-600 hover:text-slate-900 after:w-0 hover:after:w-full'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            )
          })}
          {onOpenModal && (
            <li className="max-lg:w-full">
              <button
                onClick={() => {
                  setMenuOpen(false)
                  onOpenModal()
                }}
                className="gradient-primary text-white px-5 py-2 rounded-full font-bold text-[0.85rem] hover:shadow-md hover:shadow-primary/20 transition-all cursor-pointer border-none max-lg:w-full max-lg:py-3"
              >
                Hire Me
              </button>
            </li>
          )}
        </ul>

        {/* Mobile menu toggle */}
        <button
          className="hidden max-lg:block text-[1.4rem] text-slate-800 cursor-pointer bg-transparent border-none z-[60]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`} />
        </button>

        {/* Overlay */}
        {menuOpen && (
          <div
            className="hidden max-lg:block fixed inset-0 bg-slate-950/40 backdrop-blur-xs z-40"
            onClick={() => setMenuOpen(false)}
          />
        )}
      </div>
    </nav>
  )
}
