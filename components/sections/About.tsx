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
      className="px-4 md:px-6 py-6 md:py-8"
    >
      <div className="max-w-5xl mx-auto border border-border bg-surface-raised p-6 md:p-10 shadow-sm">
        <h2 className="mono-label text-muted mb-10">ABOUT</h2>

        <div className="grid md:grid-cols-2 gap-10 md:gap-12">
          <div>
            <p className="font-display font-bold text-ink leading-tight mb-4" style={{ fontSize: '18px' }}>
              Software engineer with a background in IT support, data analysis, and infrastructure.
            </p>
            <p className="text-muted leading-relaxed mb-8" style={{ fontSize: '17.5px', lineHeight: '1.55' }}>
              Now building full-stack products and AI integrations for global clients and founders — taking ownership from requirements to production, regardless of timezone or team setup.
            </p>

            <div className="mb-8">
              <p className="mono-label text-muted mb-4">Who I Work With</p>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <p className="text-sm font-medium text-ink">Businesses</p>
                  <p className="text-xs text-muted leading-relaxed">Companies needing more than a brochure site — e-commerce, booking flows, internal tools that actually run the operation.</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-ink">Creatives</p>
                  <p className="text-xs text-muted leading-relaxed">Videographers, photographers and designers who need their work to stay center stage while the tech disappears — like Joetheboy.</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-ink">SMEs & Startups</p>
                  <p className="text-xs text-muted leading-relaxed">Teams moving beyond social media to owned infrastructure — domain, payments, email and deploy handled end-to-end.</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-ink">Organizations</p>
                  <p className="text-xs text-muted leading-relaxed">Teams needing troubleshooting, device/account setup, documentation and hands-on support that turns fuzzy requirements into shipped software.</p>
                </div>
              </div>
            </div>

            <p className="text-muted leading-relaxed border-t border-border pt-6 text-sm">
              Infrastructure note: self-hosted AI agent on Hetzner, Gemini API + Telegram — Linux/PM2/systemd. Available for remote collaboration worldwide.
            </p>
          </div>

          <div>
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } }}
            >
              <p className="mono-label text-muted mb-4">Experience</p>
              <motion.ul variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }} className="divide-y divide-border border-y border-border mb-8">
              <motion.li variants={{ hidden: { opacity: 0, x: -8 }, show: { opacity: 1, x: 0, transition: { duration: 0.45 } } }} className="py-4">
                <span className="text-sm"><span className="font-medium text-ink">Acacia — IT Support</span> <span className="text-muted">· 2025–2026</span></span>
                <span className="text-muted text-xs block mt-1 leading-relaxed">Enterprise IT support covering device provisioning and lifecycle management, endpoint hardening, user account provisioning and access control, hardware inventory and asset tracking, plus internal knowledge-base documentation. First-contact resolution focus with clear hand-offs to engineering when needed.</span>
              </motion.li>
              <motion.li variants={{ hidden: { opacity: 0, x: -8 }, show: { opacity: 1, x: 0, transition: { duration: 0.45 } } }} className="py-4">
                <span className="text-sm"><span className="font-medium text-ink">Freelance — Full-stack & AI</span> <span className="text-muted">— 2023–2026</span></span>
                <span className="text-muted text-xs block mt-1 leading-relaxed">Independent builds for global clients — e-commerce, corporate platforms and AI products — owning requirements through deploy without handoffs.</span>
              </motion.li>
                <motion.li variants={{ hidden: { opacity: 0, x: -8 }, show: { opacity: 1, x: 0, transition: { duration: 0.45 } } }} className="py-4">
                  <span className="text-sm"><span className="font-medium text-ink">Transmission Company of Nigeria — IT Support Intern</span> <span className="text-muted">· 2024</span></span>
                  <span className="text-muted text-xs block mt-1 leading-relaxed">95% first-contact resolution across hardware, software and connectivity tickets. Provisioned desktops/laptops end-to-end, managed onboarding/offboarding and compliance checks, authored internal docs to unblock non-technical users.</span>
                </motion.li>
                <motion.li variants={{ hidden: { opacity: 0, x: -8 }, show: { opacity: 1, x: 0, transition: { duration: 0.45 } } }} className="py-4">
                  <span className="text-sm"><span className="font-medium text-ink">Abuja Electricity Distribution Company — Data Analyst Intern</span> <span className="text-muted">· 2020–2021</span></span>
                  <span className="text-muted text-xs block mt-1 leading-relaxed">Analysed operational datasets and built interactive Excel dashboards with pivot tables and charts — turning raw meter and billing data into decisions for non-technical stakeholders.</span>
                </motion.li>
              </motion.ul>
            </motion.div>

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
