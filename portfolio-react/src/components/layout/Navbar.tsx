import { useState, useEffect } from 'react'
import { navLinks } from '../../data/navigation'
import { useActiveSection } from '../../hooks/useActiveSection'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const activeSection = useActiveSection(navLinks.map((l) => l.href.slice(1)))

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
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
          ? 'bg-white/85 backdrop-blur-xl border-b border-border py-[10px]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="text-[1.8rem] font-extrabold gradient-text"
        >
          UW
        </a>
        <ul
          className={`flex gap-8 max-lg:fixed max-lg:top-0 max-lg:right-0 max-lg:h-full max-lg:w-64 max-lg:bg-white max-lg:shadow-2xl max-lg:flex-col max-lg:pt-20 max-lg:px-8 max-lg:transition-transform max-lg:duration-300 max-lg:z-50 ${
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
                  className={`text-[0.9rem] font-medium relative transition-colors duration-300 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:gradient-primary after:transition-all after:duration-300 ${
                    isActive
                      ? 'text-text after:w-full'
                      : 'text-text-muted hover:text-text after:w-0 hover:after:w-full'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>
        {/* Mobile toggle */}
        <button
          className="hidden max-lg:block text-[1.5rem] text-text cursor-pointer bg-transparent border-none z-[60]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`} />
        </button>
        {/* Overlay */}
        {menuOpen && (
          <div
            className="hidden max-lg:block fixed inset-0 bg-black/30 z-40"
            onClick={() => setMenuOpen(false)}
          />
        )}
      </div>
    </nav>
  )
}
