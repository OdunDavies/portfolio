'use client'

import { projects } from '@/lib/projects'
import { useQuietReveal } from '@/components/ui/useQuietReveal'
import ProjectPreview from '@/components/ProjectPreview'

export default function Work() {
  const revealRef = useQuietReveal<HTMLElement>()

  return (
    <section ref={revealRef} id="work" aria-label="Work" className="px-4 md:px-6 py-6 md:py-8">
      <div className="max-w-5xl mx-auto border border-border bg-surface-raised p-6 md:p-10 shadow-sm">
        <div className="flex items-baseline justify-between gap-4 mb-10">
          <h2 className="mono-label text-muted">WORK — DEPLOY LOG</h2>
          <span className="mono-label shrink-0 text-muted">{String(projects.length).padStart(2, '0')} projects</span>
        </div>

        <div id="project-list" className="border-y border-border divide-y divide-border">
          {projects.map(project => (
            <article
              data-reveal-row
              key={project.slug}
              className="quiet-project group grid grid-cols-1 gap-4 py-6 md:grid-cols-[2.5rem_16rem_minmax(0,1fr)] md:gap-6 md:px-4 lg:grid-cols-[2.5rem_18rem_minmax(0,1fr)] hover:bg-panel"
            >
              <span className="mono-label text-muted md:pt-1">2026</span>
              <div className="min-w-0">
                <ProjectPreview project={project} sizes="(min-width: 1024px) 288px, (min-width: 768px) 256px, (min-width: 640px) 85vw, calc(100vw - 5rem)" />
              </div>
              <div className="min-w-0">
                <div className="flex items-start justify-between gap-4">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display font-bold text-ink text-base leading-tight hover:text-accent focus-visible:text-accent transition-colors duration-150"
                  >
                    {project.title} <span aria-hidden="true">↗</span>
                  </a>
                  <span className={project.status === 'development' ? 'status-outline shrink-0' : 'status-live shrink-0'}>
                    {project.status === 'development' ? 'IN DEV' : 'LIVE'}
                  </span>
                </div>
                <p className="text-muted text-sm leading-relaxed mt-2" style={{ fontSize: '14px' }}>
                  {project.outcome || project.problem}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {project.tags.map(tag => (
                    <span key={tag} className="mono-label text-muted bg-panel group-hover:bg-ink group-hover:text-background px-2 py-1 transition-colors" style={{ fontSize: '11px' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
