import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { projects } from '@/lib/projects'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return { title: 'Project Not Found' }
  }

  return {
    title: project.title,
    description: project.problem,
    openGraph: {
      title: project.title,
      description: project.problem,
      images: [{ url: project.imageSrc, alt: project.imageAlt }],
    },
  }
}

export default async function WorkPage({ params }: Props) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  return (
    <article className="max-w-4xl mx-auto px-6 py-20" aria-label={project.title}>
      {/* Back link */}
      <Link
        href="/#work"
        className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-ink transition-colors underline underline-offset-4 decoration-border hover:decoration-ink mb-12"
      >
        ← Back to work
      </Link>

      {/* Header */}
      <header className="mb-12">
        <p className="text-accent uppercase tracking-widest text-xs font-medium mb-4">
          Case Study
        </p>
        <h1 className="text-4xl md:text-5xl font-light tracking-tight text-ink mb-6 leading-tight">
          {project.title}
        </h1>
        <p className="text-lg text-muted leading-relaxed max-w-2xl">
          {project.problem}
        </p>
      </header>

      {/* Hero image */}
      <div className="relative w-full aspect-video overflow-hidden bg-border mb-12">
        <Image
          src={project.imageSrc}
          alt={project.imageAlt}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 1024px) 100vw, 896px"
        />
      </div>

      {/* Outcome */}
      {project.outcome && (
        <section aria-label="Outcome" className="border-l-2 border-accent pl-6 mb-12">
          <p className="text-xs uppercase tracking-widest text-accent font-medium mb-2">
            Outcome
          </p>
          <p className="text-xl font-light text-ink">{project.outcome}</p>
        </section>
      )}

      {/* Tags */}
      <section aria-label="Technologies used" className="mb-16">
        <p className="text-xs uppercase tracking-widest text-muted font-medium mb-4">
          Technologies
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="border border-border text-xs px-3 py-1.5 text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="border-t border-border pt-12 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <p className="text-muted text-sm">
          Interested in working together?
        </p>
        <a
          href="mailto:hello@yourname.dev"
          className="text-sm font-medium text-ink underline underline-offset-4 hover:text-accent transition-colors"
        >
          Get in touch →
        </a>
      </div>
    </article>
  )
}
