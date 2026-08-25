import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import Work from '@/components/sections/Work'
import About from '@/components/sections/About'
import Contact from '@/components/sections/Contact'

export const metadata: Metadata = {
  title: 'Odunayo Idowu — Forward-Deployed Engineer — Software · AI Integration · Infrastructure',
  description:
    'Forward-Deployed Engineer. I embed with the problem, build the software, and get it into production. Full-stack, AI and infrastructure without handoffs.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Work />
      <About />
      <Contact />
    </>
  )
}
