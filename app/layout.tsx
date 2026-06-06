import type { Metadata } from 'next'
import { GeistMono } from 'geist/font/mono'
import '@fontsource-variable/inter'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import WayfindingNav from '@/components/WayfindingNav'
import ScrollToTop from '@/components/ScrollToTop'
import ChatWidget from '@/components/ChatWidget'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://odunayoidowu.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Odunayo Idowu — IT Support & Web Developer',
    template: '%s | Odunayo Idowu',
  },
  description:
    'IT Support Technician and freelance web developer. 95% first-contact resolution rate. Building and shipping production-grade web apps and AI-powered tools for Nigerian businesses.',
  keywords: ['IT support technician', 'web developer', 'Next.js developer', 'freelance technologist', 'Abuja'],
  authors: [{ name: 'Odunayo Idowu', url: BASE_URL }],
  creator: 'Odunayo Idowu',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: BASE_URL,
    siteName: 'Odunayo Idowu — IT Support & Web Developer',
    title: 'Odunayo Idowu — IT Support & Web Developer',
    description:
      'IT Support Technician and freelance technologist. Helpdesk support, web apps, AI integration, and VPS infrastructure.',
    images: [
      {
        url: '/odunayo.jpg',
        width: 1200,
        height: 630,
        alt: 'Odunayo Idowu — IT Support & Web Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Odunayo Idowu — IT Support & Web Developer',
    description:
      'IT Support Technician and freelance technologist. Helpdesk support, web apps, AI integration, and VPS infrastructure.',
    images: ['/odunayo.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Odunayo Idowu',
  url: BASE_URL,
  jobTitle: 'IT Support Technician & Freelance Web Developer',
  description:
    'IT Support Technician and freelance technologist with hands-on experience across helpdesk support, web application development, and AI integration.',
  sameAs: [
    'https://www.linkedin.com/in/odunayo-idowu-a114ab217/',
    'https://github.com/OdunDavies',
    'https://x.com/theoduntwits',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={GeistMono.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema).replace(/</g, '\\u003c'),
          }}
        />
      </head>
      <body className="bg-background text-ink font-sans antialiased">
        <ScrollProgress />
        <Navbar />
        <WayfindingNav />
        <ScrollToTop />
        <main id="main-content">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  )
}
