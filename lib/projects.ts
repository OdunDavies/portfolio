import type { Project, ProcessStepData, Experience } from './types'

export const projects: Project[] = [
  {
    slug: 'artsybrandss',
    title: 'ArtsyBrands',
    problem:
      'They needed a complete e-commerce web infrastructure — domain setup, email deliverability, SSL, and a storefront that matched their creative brand identity.',
    outcome: 'Production-ready storefront with proper domain routing, transactional email, and a distinctive visual identity.',
    tags: ['Next.js', 'TypeScript', 'Resend', 'Cloudflare', 'React Email'],
    href: 'https://artsybrandss.com',
    imageSrc: '/images/artsybrandss.jpg',
    imageAlt: 'ArtsyBrands e-commerce platform for jewellery and creative products',
    status: 'shipped',
  },
  {
    slug: 'openclaw',
    title: 'OpenClaw — AI Agent',
    problem:
      'Needed a self-hosted AI agent on a VPS with real-time Telegram interaction, without relying on third-party hosted solutions.',
    outcome: 'Deployed and configured OpenClaw on a Hetzner VPS with Gemini API and Telegram interface — full Linux server administration.',
    tags: ['Hetzner VPS', 'Gemini API', 'Linux/Ubuntu', 'PM2', 'systemd', 'Telegram'],
    href: '#',
    imageSrc: '/images/openclaw.jpg',
    imageAlt: 'OpenClaw self-hosted AI agent on Hetzner VPS',
    status: 'shipped',
  },
  {
    slug: 'proposely',
    title: 'Proposely',
    problem:
      'Freelancers in Nigeria spend hours writing proposals. They needed an AI-powered tool that generates professional, client-ready proposals in minutes.',
    outcome: 'In development — React/Next.js front-end with Anthropic API back-end, targeting Nigerian SMEs and freelancers.',
    tags: ['Next.js', 'Anthropic API', 'TypeScript', 'Tailwind CSS'],
    href: '#',
    imageSrc: '/images/proposely.jpg',
    imageAlt: 'Proposely — AI proposal generator for freelancers',
    status: 'development',
  },
  {
    slug: 'muscleatlas',
    title: 'MuscleAtlas',
    problem:
      'Fitness enthusiasts needed a platform to log workouts, track muscle progress by targeting specific muscle groups, and access structured training content.',
    outcome: 'In development — interactive muscle-group targeting and workout tracking web application.',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    href: 'https://muscleatlas.site',
    imageSrc: '/images/muscleatlas.jpg',
    imageAlt: 'MuscleAtlas fitness platform — workout tracking and training content',
    status: 'development',
  },
]

export const processSteps: ProcessStepData[] = [
  {
    number: '01',
    title: 'Diagnose',
    description:
      'Every project starts like a support ticket: I find the real problem before proposing a fix. Most of the time, the solution isn\'t what you expected — and it\'s simpler.',
  },
  {
    number: '02',
    title: 'Plan',
    description:
      'Once I understand the root issue, I lay out the architecture, timeline, and scope — whether it\'s a network config or a full-stack app. You sign off before I start.',
  },
  {
    number: '03',
    title: 'Build',
    description:
      'Focused execution with regular check-ins. No disappearing for weeks. You see progress as it happens.',
  },
  {
    number: '04',
    title: 'Deliver',
    description:
      'Production deployment, DNS configs, documentation — everything needed to hand over something that actually runs in the real world.',
  },
  {
    number: '05',
    title: 'Support',
    description:
      'After launch, I stay on. Issues come up, features get requested — I\'m available to iterate and keep things running.',
  },
]

export const experience: Experience[] = [
  {
    role: 'IT Support Personnel (Intern)',
    company: 'Transmission Company of Nigeria',
    period: 'Feb 2024 – Oct 2024',
    bullets: [
      'Provisioned and configured desktops and laptops end-to-end — OS setup, software installation, and user account configuration — delivering production-ready devices to incoming staff.',
      'Maintained a 95% first-contact resolution rate across hardware, software, and connectivity tickets, minimising staff downtime.',
      'Diagnosed and resolved printer and workstation issues in collaboration with senior IT staff; maintained accurate resolution logs.',
      'Authored and updated internal IT documentation and knowledge-base articles, improving self-service resolution rates for staff.',
      'Managed user account provisioning, device compliance checks, and access management workflows during onboarding/offboarding cycles.',
      'Tracked hardware inventory using Microsoft Excel, generating reports and managing asset records for the IT team.',
    ],
  },
  {
    role: 'Data Analyst Intern',
    company: 'Abuja Electricity Distribution Company',
    period: 'Aug 2020 – Jan 2021',
    bullets: [
      'Analysed operational datasets and produced actionable reports using Microsoft Excel pivot tables and charts for decision-makers.',
      'Built and maintained interactive Excel dashboards visualising key operational metrics for non-technical stakeholders.',
    ],
  },
]
