'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 bg-background/95 backdrop-blur-sm transition-colors duration-300 ${
        scrolled ? 'border-b border-border' : 'border-b border-transparent'
      }`}
      role="banner"
    >
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link
          href="/"
          aria-label="Odunayo Idowu — home"
          className="font-mono text-xs tracking-widest text-ink hover:opacity-70 transition-opacity"
        >
          ODUNAYO
        </Link>

        <div className="flex items-center gap-8">
          <nav aria-label="Primary navigation">
            <ul className="flex items-center gap-6" role="list">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="font-mono text-xs tracking-widest text-muted hover:text-ink transition-colors">
                    {label.toUpperCase()}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <span className="hidden md:inline-flex items-center gap-2 border border-border px-3 py-1 text-xs font-mono tracking-widest bg-panel">
            <span className="pulse-dot" aria-hidden="true" />
            AVAILABLE FOR WORK
          </span>
        </div>
      </div>
    </header>
  )
}
