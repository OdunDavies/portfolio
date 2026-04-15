'use client'

import { motion } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'

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
        <SectionHeading label="About" title="Odunayo Idowu" />

        <div className="max-w-2xl">
          <p className="text-base text-muted leading-relaxed mb-6">
            I&apos;m a freelance web developer. I&apos;ve spent the last five
            years helping small businesses and growing startups build web
            products that actually do something — attract clients, save time,
            or both.
          </p>
          <p className="text-base text-muted leading-relaxed mb-10">
            I work best when I&apos;m involved early. Tell me your business
            problem before you tell me what you want built — more often than
            not, the solution is simpler (and cheaper) than you expected.
          </p>

          <p className="text-base text-muted leading-relaxed mb-10">
            Outside of work, I&apos;m either deep in a football match, arguing
            about tactics I&apos;ll never get to use, or quietly tinkering with
            a side project that may or may not ever see the light of day. I
            believe good software, like good football, is about the team — and
            I bring that same mindset to every client I work with.
          </p>

          {/* Skills */}
          <div className="mb-10">
            <p className="text-xs uppercase tracking-widest text-accent mb-3 font-medium">
              Technologies
            </p>
            <p className="text-sm text-muted leading-relaxed">
              Next.js, React, TypeScript, Node.js, Tailwind CSS, PostgreSQL,
              Supabase, Framer Motion, Vercel, Figma
            </p>
          </div>

        </div>
      </div>
    </motion.section>
  )
}
