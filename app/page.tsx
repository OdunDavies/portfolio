import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import Work from '@/components/sections/Work'
import Process from '@/components/sections/Process'
import Experience from '@/components/sections/Experience'
import About from '@/components/sections/About'
import Contact from '@/components/sections/Contact'

export const metadata: Metadata = {
  title: 'Odunayo Idowu — IT Support & Web Developer',
  description:
    'IT Support Technician and freelance web developer. 95% first-contact resolution rate. Building and shipping production-grade web apps and AI-powered tools.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Work />
      <Process />
      <Experience />
      <About />
      <Contact />
    </>
  )
}
