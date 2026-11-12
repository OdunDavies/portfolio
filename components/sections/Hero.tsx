'use client'

import { FiMonitor, FiGlobe, FiWifi } from 'react-icons/fi'
import { useQuietReveal } from '@/components/ui/useQuietReveal'
import { getScrollBehavior } from '@/lib/scroll'

const TERMINAL_LINES = [
  'I embed with the',
  'problem, build the',
  'software, and get it',
  'into production.',
]

export default function Hero() {
  const revealRef = useQuietReveal<HTMLDivElement>()

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: getScrollBehavior(), block: 'start' })
    history.replaceState(null, '', window.location.pathname + window.location.search)
  }

  return (
    <section id="hero" aria-label="Introduction" className="px-4 md:px-6 py-6 md:py-8 overflow-hidden relative">
      <div ref={revealRef} className="max-w-5xl mx-auto border border-border bg-surface-raised p-6 md:p-10 shadow-sm relative">
        <div className="max-w-3xl">
          <p className="font-display font-bold tracking-tight text-ink text-[22px] mb-2">
            Odunayo Idowu
          </p>
          <p className="font-mono text-xs font-medium tracking-[0.14em] uppercase text-muted mb-6">
            Forward-Deployed Engineer
          </p>

          <div className="mb-6">
            <h1
              className="font-mono font-semibold tracking-tight text-ink leading-[1.05] text-[clamp(32px,5vw,52px)]"
              style={{ letterSpacing: '-0.015em' }}
              aria-label={TERMINAL_LINES.join(' ')}
            >
              {TERMINAL_LINES.map((line, index) => (
                <span key={line} className="block" style={{ minHeight: '1.05em' }}>
                  {line}
                  {index === TERMINAL_LINES.length - 1 && (
                    <span aria-hidden="true" className="inline-block w-[0.45em] h-[0.9em] bg-accent ml-1 align-[-0.08em]" />
                  )}
                </span>
              ))}
            </h1>
          </div>

          <p className="font-mono text-xs font-medium tracking-[0.14em] uppercase text-muted mb-4">
            3 live products in production
          </p>
          <p className="font-sans text-[15px] font-medium leading-relaxed text-muted mb-4 max-w-2xl">
            I work with businesses needing more than a brochure site, creatives like videographers and designers who need their work center stage, SMEs and startups moving beyond social to owned infrastructure, and organizations needing hands-on support to turn fuzzy requirements into shipped software.
          </p>
          <p className="font-sans text-[15px] font-medium leading-relaxed text-muted mb-8 max-w-2xl">
            Full-stack builds, AI integration, and infrastructure — for teams that need someone who can take a problem from requirements to a deployed, working product without a handoff.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            <a href="#work" onClick={(e) => handleScroll(e, 'work')} className="quiet-action inline-flex items-center bg-accent text-accent-foreground hover:bg-accent-hover px-6 py-3 font-mono text-xs tracking-widest uppercase">
              View Work
            </a>
            <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="quiet-action inline-flex items-center border border-border-strong px-6 py-3 font-mono text-xs tracking-widest uppercase bg-background hover:bg-panel">
              Let&apos;s Talk
            </a>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs tracking-widest text-muted flex-wrap border-t border-border pt-6">
            <span>Understand</span><span className="text-border-strong">→</span>
            <span>Build</span><span className="text-border-strong">→</span>
            <span>Deploy</span><span className="text-border-strong">→</span>
            <span>Iterate</span>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              { Icon: FiMonitor, label: 'Laptop' },
              { Icon: FiGlobe, label: 'Internet' },
              { Icon: FiWifi, label: 'WiFi' },
            ].map(({ Icon, label }) => (
              <span key={label} className="inline-flex items-center gap-2 border border-border bg-panel px-3 py-1.5 rounded-full">
                <span className="w-6 h-6 rounded-full bg-background border border-border flex items-center justify-center">
                  <Icon className="w-3 h-3 text-ink" />
                </span>
                <span className="mono-label text-muted" style={{ fontSize: '10px' }}>{label}</span>
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center md:items-start gap-2 md:hidden">
            <span className="mono-label text-muted">Scroll</span>
            <span className="w-px h-8 bg-border block" aria-hidden="true" />
          </div>
        </div>
      </div>
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, var(--color-border-subtle) 1px, transparent 0)',
          backgroundSize: '24px 24px',
        }}
        aria-hidden="true"
      />
    </section>
  )
}
