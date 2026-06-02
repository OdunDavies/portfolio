'use client'

import { useEffect, useState, useCallback } from 'react'

const sections = [
  { id: 'hero', number: '00', label: 'Intro' },
  { id: 'work', number: '01', label: 'Work' },
  { id: 'experience', number: '02', label: 'Career' },
  { id: 'process', number: '03', label: 'Approach' },
  { id: 'about', number: '04', label: 'About' },
  { id: 'tools', number: '05', label: 'Stack' },
  { id: 'contact', number: '06', label: 'Reach' },
]

export default function WayfindingNav() {
  const [active, setActive] = useState('hero')
  const [hovered, setHovered] = useState<string | null>(null)

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY + window.innerHeight / 3

    for (let i = sections.length - 1; i >= 0; i--) {
      const el = document.getElementById(sections[i].id)
      if (el && el.offsetTop <= scrollY) {
        setActive(sections[i].id)
        return
      }
    }
    setActive(sections[0].id)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <nav
      aria-label="Section navigation"
      className="wayfinding-desktop fixed right-6 top-1/2 -translate-y-1/2 z-40 pointer-events-none"
    >
      <div className="pointer-events-auto relative">
        <ul className="flex flex-col items-end gap-0 relative">
          <div className="absolute right-0 top-0 bottom-0 w-px bg-border pointer-events-none" />
          {sections.map(({ id, number, label }) => {
            const isActive = active === id
            const showLabel = hovered === id || isActive

            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onMouseEnter={() => setHovered(id)}
                  onMouseLeave={() => setHovered(null)}
                  className={`relative block h-8 w-36 text-xs font-mono tracking-wide transition-colors duration-200 ${
                    isActive ? 'text-ink' : 'text-muted hover:text-ink'
                  }`}
                >
                  <span
                    className={`absolute right-[18px] top-1/2 -translate-y-1/2 transition-all duration-200 ${
                      showLabel ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    {number}
                  </span>
                  <span
                    className={`absolute right-[18px] top-1/2 -translate-y-1/2 px-2 py-0.5 rounded bg-surface-raised/90 backdrop-blur-sm border border-border transition-all duration-200 whitespace-nowrap ${
                      showLabel ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                  >
                    {label}
                  </span>
                  <span
                    className={`absolute right-0 top-1/2 -translate-y-1/2 h-px transition-all duration-200 ${
                      isActive
                        ? 'w-[18px] bg-accent'
                        : 'w-[6px] bg-current opacity-40'
                    }`}
                  />
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
