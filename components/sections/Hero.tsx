'use client'

import { motion, type Variants } from 'framer-motion'
import CTAButton from '@/components/ui/CTAButton'

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

const infoRows = [
  { label: 'Who', value: 'Odunayo Idowu' },
  { label: 'What', value: 'IT Support  •  Web Dev  •  AI Integration' },
  { label: 'Where', value: 'FCT, Nigeria (Remote)' },
  { label: 'How', value: 'Diagnose  →  Plan  →  Build  →  Deliver  →  Support' },
  { label: 'When', value: 'Available' },
]

export default function Hero() {
  return (
    <section id="hero" aria-label="Introduction" className="min-h-[70vh] flex items-center px-6 py-32 md:py-44">
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.p
            variants={item}
            className="font-mono text-accent text-sm tracking-wide mb-8"
          >
            00 / MMXXVI
          </motion.p>

          <motion.h1
            variants={item}
            className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-ink leading-[1.1] mb-6 max-w-3xl"
          >
            Equally comfortable on the{' '}
            <span className="gradient-text font-medium">terminal</span>{' '}
            or the{' '}
            <span className="gradient-text font-medium">ticket queue</span>.
          </motion.h1>

          <motion.p
            variants={item}
            className="text-lg md:text-xl text-muted leading-relaxed mb-12 max-w-xl"
          >
            IT support by day, web developer by project. I deliver 95% first-contact
            resolution in enterprise environments and ship production-grade web apps
            for Nigerian businesses and creatives.
          </motion.p>

          {/* Info Grid — Oz-inspired */}
          <motion.div
            variants={item}
            className="border-t border-border pt-6 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 max-w-lg mb-10"
          >
            {infoRows.map((row) => (
              <div key={row.label} className="flex items-baseline gap-3">
                <span className="font-mono text-xs text-accent tracking-wide shrink-0 w-10">
                  {row.label}
                </span>
                <span className="text-sm text-ink">{row.value}</span>
              </div>
            ))}
          </motion.div>

          <motion.div variants={item} className="flex flex-wrap gap-4">
            <CTAButton variant="ghost" href="#work">
              See My Work
            </CTAButton>
            <CTAButton variant="filled" href="https://wa.me/2348055048536">
              Let&apos;s Talk
            </CTAButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
