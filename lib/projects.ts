import type { Project, ProcessStepData } from './types'

export const projects: Project[] = [
  {
    slug: 'muscleatlas',
    title: 'MuscleAtlas',
    problem:
      'They needed a platform where fitness enthusiasts could log workouts, track muscle progress, and access structured training content — all in one place.',
    outcome: 'Launched to active users with a full workout logging and content system.',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    href: 'https://muscleatlas.site',
    imageSrc: '/images/muscleatlas.jpg',
    imageAlt: 'MuscleAtlas fitness platform — workout tracking and training content',
  },
  {
    slug: 'joseph-ali',
    title: 'Joseph Ali — Videographer',
    problem:
      'They needed a professional portfolio site that showcased their video work and made it easy for clients to reach out and book.',
    outcome: 'Clean, fast portfolio that puts the work front and centre.',
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Netlify'],
    href: 'https://josephali.netlify.app',
    imageSrc: '/images/josephali.jpg',
    imageAlt: 'Joseph Ali videographer portfolio website',
  },
  {
    slug: 'artsybrandss',
    title: 'ArtsyBrands',
    problem:
      'They needed an e-commerce and brand platform that felt as creative and premium as the jewellery and products they sell.',
    outcome: 'Full e-commerce experience with a distinctive visual identity.',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    href: 'https://artsybrandss.com',
    imageSrc: '/images/artsybrandss.jpg',
    imageAlt: 'ArtsyBrands e-commerce platform for jewellery and creative products',
  },
]

export const processSteps: ProcessStepData[] = [
  {
    number: '01',
    title: 'Listen',
    description:
      'Before I open my editor, I want to understand your business, your customers, and what success actually looks like for you. Most problems aren\'t solved with code — they\'re solved with clarity.',
  },
  {
    number: '02',
    title: 'Clarify',
    description:
      'I turn what I\'ve heard into a clear brief: goals, non-goals, user journeys, and technical constraints. You sign off before a single line of code is written.',
  },
  {
    number: '03',
    title: 'Build',
    description:
      'I build in focused sprints with regular check-ins. You can see progress every step of the way — no disappearing for three weeks and hoping for the best.',
  },
  {
    number: '04',
    title: 'Iterate',
    description:
      'Real users find things we didn\'t expect. After launch, I stay available to refine, improve, and make sure what we built actually works in the wild.',
  },
]
