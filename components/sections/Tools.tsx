'use client'

import { motion } from 'framer-motion'
import NumberedHeading from '@/components/ui/NumberedHeading'

const toolCategories = [
  {
    label: 'IT Support',
    items: ['Hardware Troubleshooting', 'Device Provisioning', 'Endpoint Support', 'IT Documentation', 'User Account Management'],
  },
  {
    label: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    label: 'Backend & AI',
    items: ['Node.js', 'Supabase', 'PostgreSQL', 'Anthropic API', 'Gemini API'],
  },
  {
    label: 'Infrastructure',
    items: ['Hetzner VPS', 'Linux/Ubuntu', 'Cloudflare', 'PM2', 'systemd', 'Vercel'],
  },
  {
    label: 'E-commerce & CMS',
    items: ['Shopify', 'Resend', 'React Email'],
  },
  {
    label: 'Productivity',
    items: ['Microsoft Office', 'Google Workspace', 'Git', 'n8n'],
  },
]

export default function Tools() {
  return (
    <motion.section
      id="tools"
      aria-label="Tools & Stack"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="py-24 px-6 border-t border-border"
    >
      <div className="max-w-5xl mx-auto">
        <NumberedHeading number="05" label="Stack" title="Tools & Technologies" />

        <p className="text-base text-muted leading-relaxed mb-10 max-w-2xl">
          Comfortable across the stack — from hardware provisioning to cloud
          deployments. The tools change, but the discipline stays the same.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8">
          {toolCategories.map((cat) => (
            <div key={cat.label}>
              <p className="font-mono text-xs text-accent tracking-wide mb-3 uppercase">
                {cat.label}
              </p>
              <ul className="space-y-1.5">
                {cat.items.map((item) => (
                  <li key={item} className="text-sm text-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
