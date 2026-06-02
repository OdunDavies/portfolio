'use client'

import { motion, type Variants } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
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
        <SectionHeading label="Experience" title="Where I&apos;ve Worked" />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col gap-12"
        >
          {experience.map((exp) => (
            <motion.div key={exp.company} variants={item}>
              <div className="border-l-2 border-accent pl-6">
                <p className="text-xs uppercase tracking-widest text-muted mb-1">
                  {exp.period}
                </p>
                <h3 className="text-xl font-medium text-ink mb-1">
                  {exp.role}
                </h3>
                <p className="text-sm text-accent mb-4">{exp.company}</p>
                <ul className="space-y-2">
                  {exp.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      className="text-sm text-muted leading-relaxed pl-4 relative"
                    >
                      <span className="absolute left-0 top-[0.6em] w-1.5 h-px bg-muted" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
