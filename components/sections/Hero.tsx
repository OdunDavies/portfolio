'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    history.replaceState(null, '', window.location.pathname + window.location.search)
  }

  return (
    <section id="hero" aria-label="Introduction" className="px-4 md:px-6 py-6 md:py-8 overflow-hidden relative">
      <div className="max-w-5xl mx-auto border border-border bg-surface-raised p-6 md:p-10 shadow-sm relative">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.13, delayChildren: 0.1 } } }}
          className="max-w-3xl"
        >
          <motion.p
            variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
            className="mono-label text-muted mb-6"
          >
            Forward-Deployed Engineer
          </motion.p>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
            className="mb-6"
          >
            <h1 className="font-display font-bold tracking-tight text-ink leading-[0.95] text-[clamp(36px,6vw,68px)]" style={{ letterSpacing: '-0.015em' }}>
              <span className="block overflow-hidden">
                <motion.span
                  variants={{ hidden: { y: '100%' }, show: { y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }}
                  className="block"
                >
                  I embed with the
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  variants={{ hidden: { y: '100%' }, show: { y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.13 } } }}
                  className="block"
                >
                  problem, build the
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  variants={{ hidden: { y: '100%' }, show: { y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.26 } } }}
                  className="block"
                >
                  software, and get it
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  variants={{ hidden: { y: '100%' }, show: { y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.39 } } }}
                  className="block"
                >
                  into production.
                </motion.span>
              </span>
            </h1>
          </motion.div>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
            className="mono-label text-muted mb-4"
          >
            3 live products in production
          </motion.p>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
            className="text-muted leading-relaxed mb-8 max-w-2xl"
            style={{ fontSize: '17.5px', lineHeight: '1.55' }}
          >
            Full-stack builds, AI integration, and infrastructure — for teams that need someone who can take a problem from requirements to a deployed, working product without a handoff.
          </motion.p>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
            className="flex flex-wrap gap-3 mb-10"
          >
            <a href="#work" onClick={(e) => handleScroll(e, 'work')} className="inline-flex items-center bg-ink text-background px-6 py-3 font-mono text-xs tracking-widest uppercase hover:opacity-90 transition-opacity">
              View Work
            </a>
            <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="inline-flex items-center border border-border-strong px-6 py-3 font-mono text-xs tracking-widest uppercase bg-background hover:bg-panel transition-colors">
              Let&apos;s Talk
            </a>
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
            className="flex items-center gap-2 font-mono text-xs tracking-widest text-muted flex-wrap border-t border-border pt-6"
          >
            <span>Understand</span>
            <span className="text-border-strong">→</span>
            <span>Build</span>
            <span className="text-border-strong">→</span>
            <span>Deploy</span>
            <span className="text-border-strong">→</span>
            <span>Iterate</span>
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { delay: 1.2, duration: 0.6 } } }}
            className="mt-10 flex flex-col items-center md:items-start gap-2 md:hidden"
          >
            <span className="mono-label text-muted">Scroll</span>
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
              className="w-px h-8 bg-border block"
              aria-hidden="true"
            />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4, transition: { delay: 1, duration: 1 } }}
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #C4622D 1px, transparent 0)',
          backgroundSize: '24px 24px',
        }}
        aria-hidden="true"
      />
    </section>
  )
}
