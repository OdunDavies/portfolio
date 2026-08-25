'use client'

const links = [
  { label: 'Email', href: 'mailto:odunayodev@gmail.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/odunayo-idowu-a114ab217/' },
  { label: 'GitHub', href: 'https://github.com/OdunDavies' },
  { label: 'X', href: 'https://x.com/theoduntwits' },
  { label: 'WhatsApp', href: 'https://wa.me/2348055048536' },
]

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
          className="inline-flex font-mono text-sm tracking-widest text-ink hover:text-accent transition-colors border-b border-ink pb-1 mb-10"
        >
          Let&apos;s talk →
        </a>

        <div className="flex flex-wrap gap-x-6 gap-y-3 border-t border-border pt-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              className="font-mono text-xs tracking-widest text-muted hover:text-ink transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <p className="text-xs text-muted font-mono tracking-wide mt-8">
          Odunayo Idowu · MMXXVI
        </p>
      </div>
    </section>
  )
}
