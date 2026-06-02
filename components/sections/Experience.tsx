'use client'

import { motion, type Variants } from 'framer-motion'
import NumberedHeading from '@/components/ui/NumberedHeading'
import { experience } from '@/lib/projects'

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

export default function Experience() {
  return (
    <motion.section
      id="experience"
      aria-label="Work Experience"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="py-24 px-6 border-t border-border"
    >
      <div className="max-w-5xl mx-auto">
        <NumberedHeading number="02" label="Career" title="Where I&apos;ve Worked" />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col gap-16"
        >
          {experience.map((exp, idx) => (
            <motion.div key={exp.company} variants={item}>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-10">
                <div className="md:col-span-1">
                  <p className="font-mono text-xs text-muted tracking-wide mb-1">
                    {(idx + 1).toString().padStart(2, '0')}
                  </p>
                  <p className="font-mono text-xs text-accent tracking-wide">
                    {exp.period}
                  </p>
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-xl font-medium text-ink mb-1">{exp.role}</h3>
                  <p className="text-sm text-accent mb-4">{exp.company}</p>
                  <ul className="space-y-2">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="text-sm text-muted leading-relaxed pl-4 relative">
                        <span className="absolute left-0 top-[0.6em] w-1.5 h-px bg-muted" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
