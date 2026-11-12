import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import Work from '@/components/sections/Work'
import About from '@/components/sections/About'
import Contact from '@/components/sections/Contact'
import PrototypeLab from '@/components/prototype/PrototypeLab'
import './prototype.css'

export const metadata: Metadata = {
  title: 'Color & Motion Prototype',
  robots: { index: false, follow: false },
}

export default function PrototypePage() {
  return (
    <PrototypeLab>
      <Hero />
      <Work />
      <About />
      <Contact />
    </PrototypeLab>
  )
}
