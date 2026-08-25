'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="hero" aria-label="Introduction" className="px-6 py-12 md:py-20 border-b border-border overflow-hidden">
      <div className="max-w-5xl mx-auto">
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
            <a href="#work" className="inline-flex items-center bg-ink text-background px-6 py-3 font-mono text-xs tracking-widest uppercase hover:opacity-90 transition-opacity">
              View Work
            </a>
            <a href="#contact" className="inline-flex items-center border border-border-strong px-6 py-3 font-mono text-xs tracking-widest uppercase bg-background hover:bg-panel transition-colors">
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
        </motion.div>
      </div>
    </section>
  )
}
