'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
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
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo — initials in monospace */}
        <Link
          href="/"
          aria-label="Odunayo Idowu — home"
          className="font-mono text-base font-bold text-ink tracking-tight hover:text-accent transition-colors duration-200"
        >
          OI
        </Link>

        {/* Nav links */}
        <nav aria-label="Primary navigation">
          <ul className="flex items-center gap-7" role="list">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="text-sm text-muted hover:text-ink transition-colors duration-200 hover:underline underline-offset-4"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
