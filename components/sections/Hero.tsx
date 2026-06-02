'use client'

import { motion, type Variants } from 'framer-motion'
import CTAButton from '@/components/ui/CTAButton'

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="py-32 md:py-44 px-6"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <motion.p
            variants={item}
            className="text-accent uppercase tracking-widest text-xs font-medium mb-6"
          >
            IT Support Technician  •  Freelance Technologist  •  Web Developer
          </motion.p>

          <motion.h1
            variants={item}
            className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-ink leading-[1.1] mb-8"
          >
            Equally comfortable{' '}
            <br className="hidden md:block" />
            on the terminal{' '}
            <span className="text-accent">or the ticket queue.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-lg md:text-xl text-muted leading-relaxed mb-10 max-w-xl"
          >
            IT support by day, web developer by project. I deliver 95% first-contact
            resolution in enterprise environments and ship production-grade web apps
            for Nigerian businesses and creatives.
          </motion.p>

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
