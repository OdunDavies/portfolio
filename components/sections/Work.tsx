'use client'

import { motion } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/lib/projects'

export default function Work() {
  return (
    <motion.section
      id="work"
      aria-label="Selected Work"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="py-24 px-6"
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeading label="Selected Work" title="Projects That Shipped" />

        <div className="flex flex-col gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </motion.section>
  )
}
