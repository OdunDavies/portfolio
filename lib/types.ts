export interface Project {
  slug: string
  title: string
  problem: string
  outcome: string
  tags: string[]
  href: string
  imageSrc: string
  imageAlt: string
  status?: 'shipped' | 'development'
}

export interface ProcessStepData {
  number: string
  title: string
  description: string
}

export interface Experience {
  role: string
  company: string
  period: string
  bullets: string[]
}

