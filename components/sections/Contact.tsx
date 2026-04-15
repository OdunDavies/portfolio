'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import CTAButton from '@/components/ui/CTAButton'

const options = ['New website', 'Improve existing site', 'Custom web app'] as const
type Option = (typeof options)[number]

const responses: Record<Option, string> = {
  'New website':
    "New websites are where I start from first principles — your goals, your users, and the outcome you need. We scope it together before I write a line of code.",
  'Improve existing site':
    "Before touching any code, I audit what you have and why it's not working. Most fixes are smaller than people expect — and more impactful.",
  'Custom web app':
    "Web apps live or die on their brief. I spend real time understanding the workflows and edge cases before I architect anything.",
}

export default function Contact() {
  const [selected, setSelected] = useState<Option | null>(null)

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
        <p className="text-accent uppercase tracking-widest text-xs font-medium mb-6">
          Get In Touch
        </p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-ink leading-tight mb-6 max-w-2xl">
          Got a project in mind?
        </h2>
        <p className="text-base text-muted leading-relaxed mb-10 max-w-md">
          Tell me about your business and what you&apos;re trying to build. Even
          if you&apos;re not sure yet — that&apos;s the best time to talk.
        </p>

        {/* Project type selector */}
        <div className="mb-8">
          <p className="text-xs uppercase tracking-widest text-muted font-medium mb-4">
            What kind of project do you have?
          </p>
          <div className="flex flex-wrap gap-3" role="group" aria-label="Project type">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => setSelected(option === selected ? null : option)}
                aria-pressed={selected === option}
                className={`px-4 py-2 text-sm border transition-colors duration-200 cursor-pointer ${
                  selected === option
                    ? 'border-accent text-accent'
                    : 'border-border text-muted hover:border-ink hover:text-ink'
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          {/* Animated response */}
          <div className="mt-6 min-h-[3.5rem]">
            <AnimatePresence mode="wait">
              {selected && (
                <motion.p
                  key={selected}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="text-base text-ink leading-relaxed max-w-lg border-l-2 border-accent pl-4"
                >
                  {responses[selected]}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mb-12">
          <CTAButton variant="filled" href="mailto:hello@yourname.dev">
            Send me a message
          </CTAButton>
        </div>

        {/* Social links */}
        <div className="flex gap-6 text-sm text-muted">
          <a
            href="https://www.linkedin.com/in/odunayo-idowu-a114ab217/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Odunayo Idowu on LinkedIn"
            className="hover:text-ink underline underline-offset-4 decoration-border hover:decoration-ink transition-colors duration-200"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/OdunDavies"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Odunayo Idowu on GitHub"
            className="hover:text-ink underline underline-offset-4 decoration-border hover:decoration-ink transition-colors duration-200"
          >
            GitHub
          </a>
          <a
            href="https://x.com/theoduntwits"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Odunayo Idowu on X"
            className="hover:text-ink underline underline-offset-4 decoration-border hover:decoration-ink transition-colors duration-200"
          >
            X
          </a>
        </div>
      </div>
    </motion.section>
  )
}
