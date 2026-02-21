import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const sections = LINKS.map((l) => l.href.slice(1)).filter(Boolean)
      const current = sections.find((id) => {
        const el = document.getElementById(id)
        if (!el) return false
        const rect = el.getBoundingClientRect()
        return rect.top <= 120 && rect.bottom >= 120
      })
      setActiveSection(current || 'hero')
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[var(--color-bg)]/90 backdrop-blur-md border-b border-[var(--color-border)]' : ''
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="font-display font-bold text-xl text-[var(--color-text)] tracking-tight flex items-center gap-2 hover:opacity-90 transition-opacity"
        >
          <img src="/favicon.svg" alt="" className="w-7 h-7" aria-hidden />
          Vaibhav
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {LINKS.map(({ label, href }) => {
            const id = href.slice(1) || 'hero'
            const isActive = activeSection === id
            return (
              <li key={href}>
                <a
                  href={href}
                  className={`relative px-3 py-2 text-sm rounded-lg transition-colors ${
                    isActive
                      ? 'text-[var(--color-accent)]'
                      : 'text-zinc-400 hover:text-[var(--color-text)]'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-[var(--color-accent-subtle)] border border-[var(--color-accent)]/20 rounded-lg"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                  <span className="relative">{label}</span>
                </a>
              </li>
            )
          })}
        </ul>

        <button
          type="button"
          aria-label="Toggle menu"
          className="md:hidden p-2.5 rounded-lg text-zinc-400 hover:text-white hover:bg-[var(--color-surface)] transition-colors"
          onClick={() => setOpen(!open)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-[var(--color-border)] bg-[var(--color-bg)]/95 backdrop-blur-md"
          >
            <ul className="px-6 py-4 flex flex-col gap-1">
              {LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="block px-4 py-3 rounded-lg text-zinc-400 hover:text-[var(--color-accent)] hover:bg-[var(--color-accent-subtle)] transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
