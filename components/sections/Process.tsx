'use client'

import { motion, type Variants } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import ProcessStep from '@/components/ProcessStep'
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
        <SectionHeading label="How I Work" title="The Process" />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8"
        >
          {processSteps.map((step) => (
            <motion.div key={step.number} variants={item}>
              <ProcessStep {...step} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
