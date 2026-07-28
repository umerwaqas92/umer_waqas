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

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

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
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[1000] py-4 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200/80 py-[12px] shadow-sm'
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
          <ul className="hidden lg:flex gap-7 items-center">
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
              <li>
                <button
                  onClick={onOpenModal}
                  className="gradient-primary text-white px-5 py-2 rounded-full font-bold text-[0.85rem] transition-all cursor-pointer border-none shadow-sm hover:shadow-md hover:shadow-primary/20"
                >
                  Hire Me
                </button>
              </li>
            )}
          </ul>

          {/* Mobile hamburger button */}
          <button
            className="lg:hidden text-[1.4rem] text-slate-800 cursor-pointer bg-transparent border-none p-1 z-[1001]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer & Overlay */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 z-[2000] flex justify-end">
          {/* Dark Backdrop Overlay */}
          <div
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMenuOpen(false)}
          />

          {/* Solid White Mobile Side Menu */}
          <div className="relative w-72 max-w-[80vw] bg-white h-full shadow-2xl z-10 flex flex-col p-6 overflow-y-auto border-l border-slate-200">
            {/* Header in Drawer */}
            <div className="flex items-center justify-between pb-6 border-b border-slate-100 mb-6">
              <a
                href="#home"
                onClick={(e) => handleNavClick(e, '#home')}
                className="text-[1.5rem] font-black gradient-text"
              >
                Umer Waqas
              </a>
              <button
                onClick={() => setMenuOpen(false)}
                className="w-9 h-9 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center cursor-pointer border-none hover:bg-slate-200 text-[1.1rem]"
                aria-label="Close menu"
              >
                <i className="fas fa-times" />
              </button>
            </div>

            {/* Links */}
            <ul className="space-y-4 flex-1">
              {navLinks.map((link) => {
                const sectionId = link.href.slice(1)
                const isActive = activeSection === sectionId
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`text-[1.05rem] font-semibold block py-2 px-3 rounded-xl transition-all ${
                        isActive
                          ? 'bg-primary/10 text-primary font-bold'
                          : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                )
              })}
            </ul>

            {/* Bottom CTA */}
            {onOpenModal && (
              <div className="pt-6 border-t border-slate-100 mt-auto">
                <button
                  onClick={() => {
                    setMenuOpen(false)
                    onOpenModal()
                  }}
                  className="w-full gradient-primary text-white py-3 rounded-full font-bold text-[0.95rem] shadow-lg shadow-primary/20 cursor-pointer border-none"
                >
                  <i className="fab fa-whatsapp mr-1.5" /> Let's Work Together
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
