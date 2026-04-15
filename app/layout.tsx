import type { Metadata } from 'next'
import { GeistMono } from 'geist/font/mono'
import '@fontsource-variable/inter'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://yourname.dev'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Odunayo Idowu — Freelance Web Developer',
    template: '%s | Odunayo Idowu',
  },
  description:
    'Freelance web developer who listens before building. I help businesses ship web products that actually solve problems — faster leads, smoother operations, happier customers.',
  keywords: ['freelance web developer', 'Next.js developer', 'TypeScript', 'React developer'],
  authors: [{ name: 'Odunayo Idowu', url: BASE_URL }],
  creator: 'Odunayo Idowu',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: BASE_URL,
    siteName: 'Odunayo Idowu — Freelance Web Developer',
    title: 'Odunayo Idowu — Freelance Web Developer',
    description:
      'Freelance web developer who listens before building. Clean code, clear communication, results you can measure.',
    images: [
      {
        url: '/odunayo.jpg',
        width: 1200,
        height: 630,
        alt: 'Odunayo Idowu — Freelance Web Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Odunayo Idowu — Freelance Web Developer',
    description:
      'Freelance web developer who listens before building. Clean code, clear communication, results you can measure.',
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
  jobTitle: 'Freelance Web Developer',
  description:
    'Freelance web developer who listens before building. Specialising in Next.js, TypeScript, and React.',
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
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
