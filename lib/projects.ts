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
