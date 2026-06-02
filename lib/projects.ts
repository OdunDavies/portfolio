import type { Project, ProcessStepData, Experience } from './types'

export const projects: Project[] = [
  {
    slug: 'artsybrandss',
    title: 'ArtsyBrands',
    problem:
      'The client needed a complete e-commerce web infrastructure — domain setup, email deliverability, SSL, and a storefront that matched their creative brand identity. Built and deployed with Next.js, React Email transactional templates, Cloudflare DNS, and SSL management.',
    outcome: 'Production-ready storefront with proper domain routing, transactional email, and a distinctive visual identity.',
    tags: ['Next.js', 'TypeScript', 'Resend', 'Cloudflare', 'React Email'],
    href: 'https://artsybrandss.com',
    imageSrc: '/images/artsybrandss.jpg',
    imageAlt: 'ArtsyBrands e-commerce platform for jewellery and creative products',
    status: 'shipped',
  },
  {
    slug: 'joseph-ali',
    title: 'Joseph Ali — Videographer Portfolio',
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
      'Freelancers in Nigeria spend hours writing proposals. They need an AI-powered tool that generates professional, client-ready proposals in minutes.',
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
      'Fitness enthusiasts need a platform to log workouts, track muscle progress by targeting specific muscle groups, and access structured training content.',
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
    title: 'Discover',
    description:
      'I start with a conversation — understanding your business, your audience, and the outcome you actually need. Most of the time, the right solution is simpler than you expect.',
  },
  {
    number: '02',
    title: 'Design',
    description:
      'I turn what I\'ve learned into wireframes, architecture decisions, and a clear scope. You see the plan and sign off before a single line of code is written.',
  },
  {
    number: '03',
    title: 'Build',
    description:
      'Focused development sprints with regular check-ins. No disappearing for weeks. You see progress as it happens and can course-correct early.',
  },
  {
    number: '04',
    title: 'Deploy',
    description:
      'I handle the full launch — domain setup, hosting configuration, SSL, email deliverability, and everything needed to go live without hiccups.',
  },
  {
    number: '05',
    title: 'Iterate',
    description:
      'After launch, I stay available. Real users uncover things we couldn\'t predict. I refine, improve, and make sure what we built actually works in the wild.',
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
