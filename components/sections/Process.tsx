'use client'

import { motion, type Variants } from 'framer-motion'
import NumberedHeading from '@/components/ui/NumberedHeading'
import { processSteps } from '@/lib/projects'

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

export default function Process() {
  return (
    <motion.section
      id="process"
      aria-label="How I Work"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="py-24 px-6 border-t border-border"
    >
      <div className="max-w-5xl mx-auto">
        <NumberedHeading
          number="03"
          label="Approach"
          title="Diagnose. Plan. Build. Deliver. Support."
        />

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
          className="text-base text-muted leading-relaxed mb-12 max-w-2xl"
        >
          Every project starts with a conversation — understanding the
          problem, the audience, and what success looks like before I write
          a single line of code. That clarity is what makes everything
          after it faster.
        </motion.p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8"
        >
          {processSteps.map((step) => (
            <motion.div key={step.number} variants={item}>
              <div className="border-t border-border pt-6">
                <p className="font-mono text-accent text-sm mb-3">{step.number}</p>
                <h3 className="text-lg font-medium text-ink mb-2">{step.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
