'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import type { Project } from '@/lib/types'

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const isReversed = index % 2 === 1

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, ease: 'easeOut', delay: 0.05 }}
      whileHover={{ scale: 1.01 }}
      className={`flex gap-10 md:gap-16 border border-border p-6 md:p-10 ${
        isReversed ? 'flex-col md:flex-row-reverse' : 'flex-col md:flex-row'
      }`}
    >
      {/* Image */}
      <div className="relative w-full md:w-1/2 aspect-video overflow-hidden bg-border shrink-0">
        <Image
          src={project.imageSrc}
          alt={project.imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center gap-4 md:w-1/2">
        <h3 className="text-2xl font-medium tracking-tight text-ink">
          {project.title}
        </h3>

        <p className="text-sm text-muted leading-relaxed">
          <span className="font-medium text-ink">They needed</span>{' '}
          {project.problem.replace(/^They needed\s*/i, '')}
        </p>

        {project.outcome && (
          <p className="text-sm font-medium text-accent">{project.outcome}</p>
        )}

        <div className="flex flex-wrap gap-2 mt-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="border border-border text-xs px-2.5 py-1 text-muted tracking-wide"
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-ink underline underline-offset-4 decoration-border hover:decoration-ink transition-colors mt-2 w-fit"
        >
          View project →
        </a>
      </div>
    </motion.article>
  )
}
