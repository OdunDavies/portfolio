'use client'

import { motion } from 'framer-motion'
import NumberedHeading from '@/components/ui/NumberedHeading'

const links = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/odunayo-idowu-a114ab217/' },
  { label: 'GitHub', href: 'https://github.com/OdunDavies' },
  { label: 'X', href: 'https://x.com/theoduntwits' },
  { label: 'Email', href: 'mailto:odunayodev@gmail.com' },
  { label: 'WhatsApp', href: 'https://wa.me/2348055048536' },
]

export default function Contact() {
  return (
    <motion.section
      id="contact"
      aria-label="Contact"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="py-24 px-6 border-t border-border"
    >
      <div className="max-w-5xl mx-auto">
        <NumberedHeading number="07" label="Reach" title="Get In Touch" />

        <p className="text-base text-muted leading-relaxed mb-10 max-w-md">
          Based in FCT, Nigeria. Available for freelance work, IT support contracts,
          and collaboration. The best time to talk is before you&apos;re sure what
          you need.
        </p>

        <div className="flex flex-wrap gap-x-10 gap-y-4 mb-16">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              className="reticule-link text-base text-ink hover:text-accent transition-colors duration-200"
            >
              {link.label}
              <span className="reticule-corners"><span /><span /><span /><span /></span>
            </a>
          ))}
        </div>

        <div className="border-t border-border pt-8">
          <p className="text-xs text-muted font-mono tracking-wide">
            Odunayo Idowu &middot; MMXXVI
          </p>
        </div>
      </div>
    </motion.section>
  )
}
