'use client'

export default function About() {
  return (
    <section id="about" aria-label="About" className="px-6 py-24 border-b border-border">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-mono text-xs tracking-[0.2em] text-muted mb-10">ABOUT</h2>

        <div className="max-w-2xl">
          <p className="text-base text-ink leading-relaxed mb-10">
            Software engineer with a background in IT support, data analysis, and
            infrastructure — now building full-stack products and AI integrations for
            clients and founders across Nigeria.
          </p>

          <div className="mb-10">
            <p className="font-mono text-xs tracking-widest text-muted uppercase mb-4">Experience</p>
            <ul className="space-y-3">
              <li className="flex gap-3 text-sm">
                <span className="text-muted shrink-0">—</span>
                <span className="text-muted">
                  <span className="text-ink font-medium">Acacia</span> — 2021–2023
                </span>
              </li>
              <li className="flex gap-3 text-sm">
                <span className="text-muted shrink-0">—</span>
                <span className="text-muted">
                  <span className="text-ink font-medium">Freelance — Full-stack & AI</span> — 2023–2026 — client products shipped to production (ArtsyBrands, MuscleAtlas, SarkiMota)
                </span>
              </li>
              <li className="flex gap-3 text-sm">
                <span className="text-muted shrink-0">—</span>
                <span className="text-muted">
                  <span className="text-ink font-medium">IT Support, Transmission Company of Nigeria</span> — 95% first-contact resolution — 2024
                </span>
              </li>
              <li className="flex gap-3 text-sm">
                <span className="text-muted shrink-0">—</span>
                <span className="text-muted">
                  <span className="text-ink font-medium">Data Analyst, Abuja Electricity Distribution Company</span> — operational dashboards & reporting — 2020–21
                </span>
              </li>
            </ul>
          </div>

          <div className="mb-10">
            <p className="font-mono text-xs tracking-widest text-muted uppercase mb-4">Toolkit</p>
            <p className="font-mono text-xs leading-loose text-muted">
              Next.js · React · Tailwind · Supabase · Paystack · Cloudflare · Vercel · Hetzner/PM2/systemd · Claude API · Gemini API · n8n
            </p>
          </div>

          <p className="text-sm text-muted leading-relaxed border-t border-border pt-6">
            Infrastructure note: self-hosted AI agent on Hetzner, Gemini API + Telegram — Linux/PM2/systemd.
          </p>
        </div>
      </div>
    </section>
  )
}
