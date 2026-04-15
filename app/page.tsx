import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import Work from '@/components/sections/Work'
import Process from '@/components/sections/Process'
import About from '@/components/sections/About'
import Contact from '@/components/sections/Contact'

export const metadata: Metadata = {
  title: 'Odunayo Idowu — Freelance Web Developer',
  description:
    'Freelance web developer who listens before building. I help businesses ship web products that solve real problems — more leads, smoother operations, happier customers.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Work />
      <Process />
      <About />
      <Contact />
    </>
  )
}
