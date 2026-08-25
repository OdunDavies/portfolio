'use client'

const projects = [
  {
    title: 'ArtsyBrands',
    kicker: 'Live e-commerce platform → artsybrandss.com',
    desc: 'Full-stack jewelry storefront: Next.js, Supabase, Cloudinary, Paystack, Resend. Custom JWT admin auth, Paystack webhooks, live in production.',
    href: 'https://artsybrandss.com',
    cta: 'Visit live site →',
  },
  {
    title: 'MuscleAtlas',
    kicker: 'AI fitness platform → muscleatlas.site',
    desc: 'AI-powered workout app for Nigerian gym-goers, built around a chat-first AI coach that reads logged sets and proactively adjusts the plan.',
    href: 'https://muscleatlas.site',
    cta: 'Visit live site →',
  },
  {
    title: 'SarkiMota Group',
    kicker: 'Speculative pitch → interview',
    desc: 'Built an unsolicited pitch site and content strategy playbook for a Nigerian luxury holding company. Led to a direct interview invitation from the chairman.',
    href: null,
    cta: null,
  },
]

export default function Work() {
  return (
    <section id="work" aria-label="Work" className="px-6 py-24 border-b border-border">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-mono text-xs tracking-[0.2em] text-muted mb-10">WORK</h2>

        <div className="flex flex-col divide-y divide-border border-y border-border mb-10">
          {projects.map((p) => (
            <div key={p.title} className="py-8 grid md:grid-cols-[200px_1fr] gap-4">
              <div>
                <h3 className="text-base font-medium text-ink">{p.title}</h3>
                <p className="font-mono text-xs text-muted mt-1">{p.kicker}</p>
              </div>
              <div>
                <p className="text-sm text-muted leading-relaxed mb-3">{p.desc}</p>
                {p.href && (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs tracking-widest text-ink hover:text-accent transition-colors"
                  >
                    {p.cta}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="border border-border p-6">
          <p className="font-mono text-xs tracking-widest text-muted uppercase mb-3">Freelancing — 2023–2026</p>
          <p className="text-sm text-muted leading-relaxed">
            Independent full-stack and AI integration work for clients and founders — taking problems from requirements to deployed products without handoffs. Selected shipped work above; ongoing.
          </p>
        </div>
      </div>
    </section>
  )
}
