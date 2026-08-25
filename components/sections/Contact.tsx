'use client'

import { motion } from 'framer-motion'
import { SiGithub, SiGmail, SiWhatsapp, SiX } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa'

const links = [
  { label: 'Email', href: 'mailto:odunayodev@gmail.com', Icon: SiGmail },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/odunayo-idowu-a114ab217/', Icon: FaLinkedin },
  { label: 'GitHub', href: 'https://github.com/OdunDavies', Icon: SiGithub },
  { label: 'X', href: 'https://x.com/theoduntwits', Icon: SiX },
  { label: 'WhatsApp', href: 'https://wa.me/2348055048536', Icon: SiWhatsapp },
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

          <div className="flex flex-wrap gap-3 mt-10 pt-6 border-t border-border">
            {links.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className="group flex items-center gap-2 border border-border bg-panel pl-1 pr-3 py-1 rounded-full hover:bg-ink hover:border-ink transition-colors"
              >
                <span className="w-7 h-7 rounded-full bg-background border border-border flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:border-accent transition-colors">
                  <Icon className="w-3.5 h-3.5 text-ink group-hover:text-white" />
                </span>
                <span className="mono-label text-muted group-hover:text-background transition-colors">{label}</span>
              </a>
            ))}
          </div>

          <p className="mono-label text-muted mt-8">Odunayo Idowu · MMXXVI</p>
        </div>
      </div>
    </motion.section>
  )
}
