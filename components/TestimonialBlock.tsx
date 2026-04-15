interface TestimonialBlockProps {
  quote: string
  author: string
  company: string
}

export default function TestimonialBlock({ quote, author, company }: TestimonialBlockProps) {
  return (
    <figure className="border-t border-border pt-8">
      <blockquote>
        <p className="text-xl md:text-2xl font-light text-ink leading-relaxed tracking-tight">
          <span className="text-accent mr-1">&ldquo;</span>
          {quote}
          <span className="text-accent ml-1">&rdquo;</span>
        </p>
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-2 text-sm text-muted">
        <span className="font-medium text-ink">{author}</span>
        <span aria-hidden="true">—</span>
        <span>{company}</span>
      </figcaption>
    </figure>
  )
}
