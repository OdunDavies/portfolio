'use client'

import { motion, type Variants } from 'framer-motion'
import NumberedHeading from '@/components/ui/NumberedHeading'
import { projects } from '@/lib/projects'

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

export default function Work() {
  return (
    <motion.section
      id="work"
      aria-label="Selected Work"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="py-24 px-6 border-t border-border"
    >
      <div className="max-w-5xl mx-auto">
        <NumberedHeading number="01" label="Recently" title="Selected Projects" />

        <p className="text-xs text-muted font-mono tracking-wide -mt-8 mb-8">
          Click a project name to view it live &rarr;
        </p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col"
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              variants={item}
              className="group border-t border-border py-6 first:border-t-0"
            >
              <div className="flex items-start gap-6">
                <span className="font-mono text-xs text-muted mt-1 w-6 shrink-0">
                  {(i + 1).toString().padStart(2, '0')}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1 flex-wrap">
                    <h3 className="text-lg font-medium text-ink">
                      {project.href !== '#'
                        ? <a href={project.href} target="_blank" rel="noopener noreferrer" className="reticule-link hover:text-accent transition-colors duration-200">{project.title}<span className="reticule-corners"><span /><span /><span /><span /></span></a>
                        : project.title
                      }
                    </h3>
                    {project.status === 'development' && (
                      <span className="text-[10px] uppercase tracking-widest border border-amber-600/30 text-amber-700 px-2 py-0.5 leading-none">
                        In Dev
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted leading-relaxed mb-2">
                    {project.problem}
                  </p>
                  <p className="text-sm font-medium text-accent mb-2">{project.outcome}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] text-muted font-mono tracking-wide"
                      >
                        {tag}
                        <span className="text-border mx-1">/</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
