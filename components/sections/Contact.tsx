'use client'

export default function Contact() {
  return (
    <section id="contact" aria-label="Contact" className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-mono text-xs tracking-[0.2em] text-muted mb-6">CONTACT</h2>
        <p className="text-2xl md:text-3xl font-light tracking-tight text-ink mb-6">
          Have a problem?
        </p>
        <a
          href="mailto:odunayodev@gmail.com"
          className="inline-flex font-mono text-sm tracking-widest text-ink hover:text-accent transition-colors border-b border-ink pb-1"
        >
          Let&apos;s talk →
        </a>
      </div>
    </section>
  )
}
