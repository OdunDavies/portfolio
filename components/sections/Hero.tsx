'use client'

import { motion, type Variants } from 'framer-motion'
import CTAButton from '@/components/ui/CTAButton'

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

export default function Hero() {
  return (
    <section id="hero" aria-label="Introduction" className="px-6 py-24 md:py-32 border-b border-border">
      <div className="max-w-5xl mx-auto">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-3xl">
          <motion.p variants={item} className="font-mono text-xs tracking-[0.2em] text-accent uppercase mb-6">
            Forward-Deployed Engineer
          </motion.p>

          <motion.h1
            variants={item}
            className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-ink leading-[1.1] mb-6"
          >
            I embed with the problem, build the software, and get it into production.
          </motion.h1>

          <motion.p variants={item} className="text-base md:text-lg text-muted leading-relaxed mb-8 max-w-2xl">
            Full-stack builds, AI integration, and infrastructure — for teams that need
            someone who can take a problem from requirements to a deployed, working
            product without a handoff.
          </motion.p>

          <motion.div variants={item} className="flex items-center gap-2 font-mono text-xs tracking-widest text-muted mb-10 flex-wrap">
            <span>Understand</span>
            <span className="text-border">→</span>
            <span>Build</span>
            <span className="text-border">→</span>
            <span>Deploy</span>
            <span className="text-border">→</span>
            <span>Iterate</span>
          </motion.div>

          <motion.div variants={item} className="flex flex-wrap gap-3">
            <CTAButton variant="filled" href="#work">
              View Work
            </CTAButton>
            <CTAButton variant="ghost" href="#contact">
              Let&apos;s Talk
            </CTAButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
