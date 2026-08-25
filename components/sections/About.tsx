'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <motion.section
      id="about"
      aria-label="About"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="px-6 py-16 md:py-24 border-b border-border"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="mono-label text-muted mb-10">ABOUT</h2>

        <div className="grid md:grid-cols-2 gap-10 md:gap-12">
          <div>
            <p className="font-display font-bold text-ink leading-tight mb-4" style={{ fontSize: '18px' }}>
              Software engineer with a background in IT support, data analysis, and infrastructure.
            </p>
            <p className="text-muted leading-relaxed mb-6" style={{ fontSize: '17.5px', lineHeight: '1.55' }}>
              Now building full-stack products and AI integrations for clients and founders across Nigeria — taking ownership from requirements to production.
            </p>
            <p className="text-muted leading-relaxed border-t border-border pt-6 text-sm">
              Infrastructure note: self-hosted AI agent on Hetzner, Gemini API + Telegram — Linux/PM2/systemd.
            </p>
          </div>

          <div>
            <p className="mono-label text-muted mb-4">Experience</p>
            <ul className="divide-y divide-border border-y border-border mb-8">
              <li className="py-4">
                <span className="text-sm"><span className="font-medium text-ink">Acacia</span> <span className="text-muted">— IT Support · 2025–2026</span></span>
                <span className="text-muted text-xs block mt-1">Enterprise IT support, device provisioning, endpoint support, user accounts & IT documentation</span>
              </li>
              <li className="py-4">
                <span className="text-sm"><span className="font-medium text-ink">Freelance — Full-stack & AI</span> <span className="text-muted">— 2023–2026</span></span>
                <span className="text-muted text-xs block mt-1">Client products shipped to production (ArtsyBrands, Joetheboy, Atlas, HybridGroups)</span>
              </li>
              <li className="py-4 flex justify-between gap-4">
                <span className="text-sm"><span className="font-medium text-ink">Transmission Company of Nigeria</span> <span className="text-muted">— IT Support · 95% first-contact</span></span>
                <span className="mono-label text-muted shrink-0">2024</span>
              </li>
              <li className="py-4 flex justify-between gap-4">
                <span className="text-sm"><span className="font-medium text-ink">AEDC</span> <span className="text-muted">— Data Analyst · dashboards & reporting</span></span>
                <span className="mono-label text-muted shrink-0">2020</span>
              </li>
            </ul>

            <p className="mono-label text-muted mb-3">Toolkit</p>
            <p className="font-mono text-xs leading-loose text-muted">
              Next.js · React · Tailwind · Supabase · Paystack · Cloudflare · Vercel · Hetzner/PM2/systemd · Claude API · Gemini API · n8n
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
