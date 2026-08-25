'use client'

import { motion } from 'framer-motion'

const links = [
  { label: 'Email', href: 'mailto:odunayodev@gmail.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/odunayo-idowu-a114ab217/' },
  { label: 'GitHub', href: 'https://github.com/OdunDavies' },
  { label: 'X', href: 'https://x.com/theoduntwits' },
  { label: 'WhatsApp', href: 'https://wa.me/2348055048536' },
]

export default function Contact() {
  return (
    <motion.section
      id="contact"
      aria-label="Contact"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="px-4 md:px-6 py-6 md:py-8"
    >
      <div className="max-w-5xl mx-auto border-2 border-ink bg-surface-raised p-1 shadow-md">
        <div className="contact-sweep bg-panel border border-border p-8 md:p-10">
          <h2 className="mono-label text-muted mb-4">CONTACT</h2>
          <p className="font-display font-bold text-ink leading-tight mb-6" style={{ fontSize: '28px', letterSpacing: '-0.015em' }}>
            Have a problem?
          </p>
          <a
            href="mailto:odunayodev@gmail.com"
            className="inline-flex items-center bg-ink text-background px-6 py-3 font-mono text-xs tracking-widest uppercase hover:opacity-90 transition-opacity"
          >
            Let&apos;s talk →
          </a>

          <div className="flex flex-wrap gap-x-6 gap-y-3 mt-10 pt-6 border-t border-border">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className="mono-label text-muted hover:text-ink transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <p className="mono-label text-muted mt-8">Odunayo Idowu · MMXXVI</p>
        </div>
      </div>
    </motion.section>
  )
}
