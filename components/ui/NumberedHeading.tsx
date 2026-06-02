interface NumberedHeadingProps {
  number: string
  label: string
  title: string
  className?: string
}

export default function NumberedHeading({ number, label, title, className = '' }: NumberedHeadingProps) {
  return (
    <div className={`mb-12 ${className}`}>
      <p className="font-mono text-accent text-sm mb-3 tracking-wide">
        {number} / {label.toUpperCase()}
      </p>
      <h2 className="text-4xl md:text-5xl font-light tracking-tight text-ink leading-tight">
        {title}
      </h2>
    </div>
  )
}
