'use client'

import { motion } from 'framer-motion'
import NumberedHeading from '@/components/ui/NumberedHeading'

const clientTypes = [
  {
    type: 'Small & growing businesses',
    description:
      'You need a web presence that works — a site that brings in leads, explains what you do, and gives customers a reason to reach out. I build lean, fast sites that serve your business goals without the overhead.',
  },
  {
    type: 'Creatives & portfolio professionals',
    description:
      'Videographers, photographers, designers, and artists who need a portfolio that showcases their work as well as they do. Clean, visual, and built to impress potential clients.',
  },
  {
    type: 'Nigerian SMEs & startups',
    description:
      'E-commerce stores, service platforms, and internal tools for businesses that are ready to move beyond social media. I handle the full stack — frontend, backend, hosting, and email setup.',
  },
  {
    type: 'Enterprises needing IT support',
    description:
      'Device provisioning, user account management, IT documentation, and helpdesk support. My enterprise experience means I can integrate into existing workflows without missing a beat.',
  },
]

export default function Clients() {
  return (
    <motion.section
      id="clients"
      aria-label="Who I Work With"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="py-24 px-6 border-t border-border"
    >
      <div className="max-w-5xl mx-auto">
        <NumberedHeading number="04" label="Clients" title="Who I Work With" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {clientTypes.map((client) => (
            <div key={client.type}>
              <h3 className="text-lg font-medium text-ink mb-2">{client.type}</h3>
              <p className="text-sm text-muted leading-relaxed">{client.description}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
