import type { Metadata } from 'next'
import { Space_Grotesk, JetBrains_Mono, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import WayfindingNav from '@/components/WayfindingNav'
import ScrollToTop from '@/components/ScrollToTop'
import ChatWidget from '@/components/ChatWidget'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://odunayo.xyz'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Odunayo Idowu — Forward-Deployed Engineer — Software · AI Integration · Infrastructure',
    template: '%s | Odunayo Idowu',
  },
  description:
    'Forward-Deployed Engineer. I embed with the problem, build the software, and get it into production. Full-stack, AI integration, and infrastructure — from requirements to deployed product without a handoff.',
  keywords: ['forward-deployed engineer', 'software engineer', 'full-stack developer', 'AI integration', 'infrastructure', 'Nigeria', 'Odunayo Idowu'],
  authors: [{ name: 'Odunayo Idowu', url: BASE_URL }],
  creator: 'Odunayo Idowu',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: BASE_URL,
    siteName: 'Odunayo Idowu — Forward-Deployed Engineer — Software · AI Integration · Infrastructure',
    title: 'Odunayo Idowu — Forward-Deployed Engineer — Software · AI Integration · Infrastructure',
    description:
      'I embed with the problem, build the software, and get it into production. Full-stack builds, AI integration, and infrastructure.',
    images: [
      {
        url: '/odunayo.jpg',
        width: 1200,
        height: 630,
        alt: 'Odunayo Idowu — Forward-Deployed Engineer — Software · AI Integration · Infrastructure',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Odunayo Idowu — Forward-Deployed Engineer — Software · AI Integration · Infrastructure',
    description:
      'I embed with the problem, build the software, and get it into production. Full-stack, AI and infrastructure.',
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
  jobTitle: 'Forward-Deployed Engineer — Software · AI Integration · Infrastructure',
  description:
    'Forward-Deployed Engineer — Software · AI Integration · Infrastructure — embedding with problems to build and ship production software without handoffs.',
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
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrains.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema).replace(/</g, '\\u003c'),
          }}
        />
      </head>
      <body className="bg-background text-ink font-sans antialiased" style={{ fontSize: '17.5px', lineHeight: '1.55' }}>
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
