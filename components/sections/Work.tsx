'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

type Project = {
  year: string
  title: string
  desc: string
  stack: string[]
  thumb?: string
  href?: string | null
  status: 'LIVE' | 'CASE STUDY'
}

const allProjects: Project[] = [
  {
    year: '2026',
    title: 'ArtsyBrands',
    desc: 'Full-stack jewelry storefront: Next.js, Supabase, Cloudinary, Paystack, Resend. Custom JWT admin auth, Paystack webhooks, live in production.',
    stack: ['Next.js', 'Supabase', 'Cloudinary', 'Paystack', 'Resend'],
    thumb: '/images/artsybrandss.jpg',
    href: 'https://artsybrandss.com',
    status: 'LIVE',
  },
  {
    year: '2026',
    title: 'Joetheboy',
    desc: 'Fashion portfolio platform — curated showcase for a videographer/creative, clean visual routing and fast media delivery.',
    stack: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Netlify'],
    href: 'https://josephali.netlify.app',
    status: 'LIVE',
  },
  {
    year: '2026',
    title: 'HybridGroups',
    desc: 'Corporate platform for Hybrid Groups Nigeria — Renewable Energy, Agriculture & Food, Water & Beverages. Diversified conglomerate site with sectors, impact and leadership.',
    stack: ['Next.js', 'Tailwind', 'Vercel'],
    href: 'https://hybridgroups.vercel.app',
    status: 'LIVE',
  },
  {
    year: '2026',
    title: 'MuscleAtlas',
    desc: 'AI-powered workout app for Nigerian gym-goers, built around a chat-first AI coach that reads logged sets and proactively adjusts the plan.',
    stack: ['Next.js', 'Supabase', 'Gemini API', 'Tailwind'],
    thumb: '/images/muscleatlas.jpg',
    href: 'https://muscleatlas.site',
    status: 'LIVE',
  },
  {
    year: '2026',
    title: 'Northpoint Electrical',
    desc: 'Licensed Master Electrician — Houston & Katy. Service site for Northpoint Houston Electric.',
    stack: ['Next.js', 'Tailwind', 'Vercel'],
    href: 'https://northpointelectrical.vercel.app',
    status: 'LIVE',
  },
  {
    year: '2026',
    title: 'Appliant',
    desc: 'Roof and home — Celina, TX roofing & storm restoration. Lead site for Appliant.',
    stack: ['Next.js', 'Tailwind', 'Vercel'],
    href: 'https://leads-zeta-sage.vercel.app',
    status: 'LIVE',
  },
  {
    year: '2024',
    title: 'SarkiMota Group',
    desc: 'Built an unsolicited pitch site and content strategy playbook for a Nigerian luxury holding company. Led to a direct interview invitation from the chairman.',
    stack: ['Next.js', 'Content Strategy'],
    href: null,
    status: 'CASE STUDY',
  },
]

export default function Work() {
  const [showAll, setShowAll] = useState(false)
  const projects = showAll ? allProjects : allProjects.slice(0, 3)

  return (
    <motion.section
      id="work"
      aria-label="Work"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="px-6 py-16 md:py-24 border-b border-border"
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex items-baseline justify-between mb-10">
          <h2 className="mono-label text-muted">WORK — DEPLOY LOG</h2>
          {allProjects.length > 3 && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="mono-label text-ink border border-border px-3 py-1 hover:bg-panel transition-colors"
            >
              {showAll ? 'Featured' : 'All'}
            </button>
          )}
        </div>

        <motion.div
          key={showAll ? 'all' : 'featured'}
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } } }}
          className="border-y border-border divide-y divide-border"
        >
          {projects.map((p) => (
            <motion.a
              key={p.title}
              href={p.href ?? undefined}
              target={p.href ? '_blank' : undefined}
              rel={p.href ? 'noopener noreferrer' : undefined}
              variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } } }}
              whileHover={{ x: 4 }}
              className={`group flex gap-4 md:gap-6 py-6 px-0 md:px-4 hover:bg-surface-raised transition-colors duration-200 ${p.href ? '' : 'pointer-events-none'}`}
            >
              <span className="mono-label text-muted shrink-0 w-10 pt-1">{p.year}</span>

              {p.thumb && (
                <span className="hidden md:block shrink-0 w-24 h-16 bg-panel border border-border overflow-hidden">
                  <Image src={p.thumb} alt="" width={96} height={64} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" />
                </span>
              )}

              <span className="flex-1 min-w-0">
                <span className="flex items-start justify-between gap-4">
                  <span>
                    <span className="font-display font-bold text-ink text-base leading-tight block">{p.title}</span>
                    <span className="text-muted text-sm leading-relaxed block mt-1" style={{ fontSize: '14px' }}>{p.desc}</span>
                  </span>
                  <span className={p.status === 'LIVE' ? 'status-live shrink-0' : 'status-outline shrink-0'}>{p.status}</span>
                </span>
                <span className="flex flex-wrap gap-1.5 mt-3">
                  {p.stack.map((t) => (
                    <span key={t} className="mono-label text-muted bg-panel group-hover:bg-ink group-hover:text-background px-2 py-1 transition-colors" style={{ fontSize: '11px' }}>
                      {t}
                    </span>
                  ))}
                </span>
              </span>
            </motion.a>
          ))}
        </motion.div>

      </div>
    </motion.section>
  )
}
