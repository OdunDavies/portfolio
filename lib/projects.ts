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
    slug: 'sarkin-mota',
    title: 'Sarkin Mota Group',
    problem:
      'Sarkin Mota Group needed a professional corporate web presence to establish their brand identity and showcase their services online.',
    outcome: 'Live corporate website deployed on Vercel with modern design and fast performance.',
    tags: ['Next.js', 'Vercel', 'TypeScript', 'Tailwind CSS'],
    href: 'https://sarkinmotagroup.vercel.app',
    imageSrc: '/images/sarkinmota.svg',
    imageAlt: 'Sarkin Mota Group corporate website',
    status: 'shipped',
  },
  {
    slug: 'nls-93-alumni',
    title: "NLS '93 — Alumni Association",
    problem:
      'The Nigeria Law School Class of 1993 needed a premium digital home to connect 1000+ alumni — including 40+ SANs and judges — showcase three decades of impact, and centralise conferences, achievements, and membership.',
    outcome:
      'Shipped a fully responsive alumni platform with member directory, conference timeline, achievements archive, gallery, and contact system — navy/gold editorial design inspired by Templars Law.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Vercel', 'Responsive Design'],
    href: 'https://nls93.vercel.app/',
    imageSrc: '/images/nls93.jpg',
    imageAlt: "Nigeria Law School Class of 1993 Alumni Association website — https://nls93.vercel.app",
    status: 'shipped',
  },
  {
    slug: 'muscleatlas',
    title: 'MuscleAtlas',
    problem:
      'AI-powered workout app for Nigerian gym-goers, built around a chat-first AI coach that reads logged sets and proactively adjusts the plan.',
    outcome: 'Live at muscleatlas.site — interactive muscle-group targeting and workout tracking with AI coach.',
    tags: ['Next.js', 'Supabase', 'Tailwind CSS', 'Gemini API'],
    href: 'https://muscleatlas.site',
    imageSrc: '/images/muscleatlas.jpg',
    imageAlt: 'MuscleAtlas fitness platform',
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
