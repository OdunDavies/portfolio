'use client'

import { motion } from 'framer-motion'
import NumberedHeading from '@/components/ui/NumberedHeading'

const competencies = [
  'IT Support & Helpdesk',
  'Web Development',
  'AI Integration',
  'Cloud & VPS Infrastructure',
  'Shopify Development',
  'React / Next.js',
  'Linux & VPS Administration',
  'Automation & Scripting',
  'Device Provisioning',
  'User Account Management',
  'IT Documentation',
  'API Integration',
]

export default function About() {
  return (
    <motion.section
      id="about"
      aria-label="About"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="py-24 px-6 border-t border-border"
    >
      <div className="max-w-5xl mx-auto">
        <NumberedHeading number="05" label="Background" title="About Me" />

        <div className="max-w-2xl">
          <p className="text-base text-muted leading-relaxed mb-6">
            My curiosity about how things work started on the hardware side before
            moving into code. That curiosity found a deliberate path through IT
            support, web development, and AI integration, and it keeps pulling me
            toward problems that sit at the intersection of infrastructure and
            interface.
          </p>
          <p className="text-base text-muted leading-relaxed mb-6">
            I&apos;m an IT Support Technician and freelance technologist with hands-on
            experience across helpdesk support, web application development, and AI
            integration. I deliver a 95% first-contact resolution rate in enterprise
            environments while simultaneously building and shipping production-grade
            web apps, AI-powered tools, and digital products for Nigerian businesses.
          </p>
          <p className="text-base text-muted leading-relaxed mb-10">
            I&apos;m self-directed, fast-learning, and equally comfortable on the terminal
            or the ticket queue.
          </p>

          <div className="mb-10">
            <p className="font-mono text-xs text-accent tracking-wide mb-4 uppercase">
              Core Competencies
            </p>
            <div className="flex flex-wrap gap-2">
              {competencies.map((c) => (
                <span
                  key={c}
                  className="border border-border text-xs px-2.5 py-1 text-muted tracking-wide"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="font-mono text-xs text-accent tracking-wide mb-3 uppercase">
              Education
            </p>
            <p className="text-sm text-ink font-medium">
              B.Sc. Information and Communication Science
            </p>
            <p className="text-sm text-muted">University of Ilorin, Kwara State &middot; Feb 2018 – Oct 2023</p>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
