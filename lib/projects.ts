import type { Project, ProcessStepData, Experience } from './types'

export const projects: Project[] = [
  {
    slug: 'artsybrandss',
    title: 'ArtsyBrands',
    problem:
      'Live e-commerce platform. Full-stack jewelry storefront: Next.js, Supabase, Cloudinary, Paystack, Resend. Custom JWT admin auth, Paystack webhooks, live in production.',
    outcome: 'Live at artsybrandss.com — production storefront with domain, payments and transactional email working as one system.',
    tags: ['Next.js', 'Supabase', 'Cloudinary', 'Paystack', 'Resend', 'Cloudflare'],
    href: 'https://artsybrandss.com',
    imageSrc: '/images/artsybrandss.jpg',
    imageAlt: 'ArtsyBrands e-commerce platform',
    status: 'shipped',
  },
  {
    slug: 'joseph-ali',
    title: 'Joetheboy — Joseph Ali',
    problem:
      'A videographer needed a professional portfolio site to showcase their work and make it easy for clients to reach out and book.',
    outcome: 'Clean, fast portfolio that puts the work front and centre.',
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Netlify'],
    href: 'https://josephali.netlify.app',
    imageSrc: '/images/josephali.jpg',
    imageAlt: 'Joseph Ali videographer portfolio website',
    status: 'shipped',
  },
  {
    slug: 'hybridgroups',
    title: 'HybridGroups',
    problem: 'Hybrid Groups Nigeria needed a corporate platform spanning Renewable Energy, Agriculture & Food, and Water & Beverages — sectors, impact and leadership in one site.',
    outcome: 'Corporate platform live with sector breakdowns, impact and leadership — built for a diversified conglomerate.',
    tags: ['Next.js', 'Tailwind CSS', 'Vercel'],
    href: 'https://hybridgroups.vercel.app',
    imageSrc: '/images/hybridgroups.jpg',
    imageAlt: 'HybridGroups corporate platform',
    status: 'shipped',
  },
  {
    slug: 'forge',
    title: 'Forge — AI Training OS',
    problem:
      'Gym-goers log sessions in a few taps, follow a plan biased to the muscles they want to grow, and need a coach that actually reads their history. Existing trackers are manual and generic.',
    outcome:
      'Shipped Forge — log sessions in taps, auto-progressive plan by target muscles, Gemini coach, and shareable recap cards. TanStack Start + React 19 + Postgres (Neon/PGlite). Live at forgexyx.vercel.app.',
    tags: ['TanStack Start', 'React 19', 'TypeScript', 'Postgres', 'Better Auth', 'Gemini API'],
    href: 'https://forgexyx.vercel.app',
    imageSrc: '/images/forge.jpg',
    imageAlt: 'Forge — AI training OS for lifting',
    status: 'shipped',
  },
]

export const processSteps: ProcessStepData[] = [
  { number: '01', title: 'Understand', description: 'Requirements, workflow, constraints and desired outcome.' },
  { number: '02', title: 'Build', description: 'Solution in focused iterations — frontend, backend, AI, APIs.' },
  { number: '03', title: 'Deploy', description: 'Hosting, DNS, SSL, env, email, VPS — to production.' },
  { number: '04', title: 'Iterate', description: 'Troubleshoot, collect feedback and improve after launch.' },
]

export const experience: Experience[] = [
  {
    role: 'IT Support Personnel (Intern)',
    company: 'Transmission Company of Nigeria',
    period: '2024',
    bullets: ['95% first-contact resolution across hardware, software and connectivity tickets.'],
  },
  {
    role: 'Data Analyst Intern',
    company: 'Abuja Electricity Distribution Company',
    period: '2020–21',
    bullets: ['Operational dashboards & reporting with Excel pivot tables and charts.'],
  },
]
