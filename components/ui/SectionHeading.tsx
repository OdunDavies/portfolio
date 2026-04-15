interface SectionHeadingProps {
  label: string
  title: string
  className?: string
}

export default function SectionHeading({ label, title, className = '' }: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${className}`}>
      <p className="text-accent uppercase tracking-widest text-xs font-medium mb-3">
        {label}
      </p>
      <h2 className="text-4xl md:text-5xl font-light tracking-tight text-ink leading-tight">
        {title}
      </h2>
    </div>
  )
}
