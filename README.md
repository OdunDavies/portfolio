# [YOUR NAME] — Portfolio Website

A minimalist freelance web developer portfolio built with Next.js 16, Tailwind CSS 4, TypeScript, and Framer Motion.

Design philosophy: **"I listen before I build."** Every section is written from the client's perspective.

## Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS 4** (`@theme` block, no config file)
- **Framer Motion** (subtle scroll animations only)
- **next/font** (Inter + Geist Mono)
- **Next.js Metadata API** (SEO, Open Graph, JSON-LD)

## Getting Started

### Prerequisites

- Node.js 18.17+
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build

```bash
npm run build
npm start
```

## Personalisation Checklist

Replace all `[TOKEN]` placeholders before going live:

| Token | Replace with |
|---|---|
| `[YOUR NAME]` | Your full name |
| `[YN]` | Your initials (Navbar logo) |
| `[CITY]` | Your city/location |
| `yourname.dev` | Your actual domain (or set `NEXT_PUBLIC_BASE_URL` env var) |
| `your-linkedin` | Your LinkedIn username |
| `your-github` | Your GitHub username |
| `[CLIENT NAME]` | Real client names (in `lib/projects.ts`) |
| `[PROJECT NAME]` | Real project names (in `lib/projects.ts`) |

Create a `.env.local` file to set your domain:

```
NEXT_PUBLIC_BASE_URL=https://yourdomain.com
```

### Things to update

1. **`lib/projects.ts`** — Replace placeholder projects, steps, and testimonials with real data
2. **`app/layout.tsx`** — Update `BASE_URL`, metadata, and JSON-LD schema
3. **`app/sitemap.ts`** + **`app/robots.ts`** — Update `BASE_URL`
4. **`components/Navbar.tsx`** — Replace `[YN]` with your initials
5. **`components/sections/About.tsx`** — Update bio, skills, and stats
6. **`components/sections/Contact.tsx`** — Update mailto and social links
7. **`public/odunayo.jpg`** — Replace with your own photo
8. **Project images** — Add real screenshots to `/public/` and update `imageSrc` in `lib/projects.ts`

## Project Structure

```
portfolio/
├── app/
│   ├── globals.css          # Tailwind v4 @theme tokens
│   ├── layout.tsx           # Root layout, fonts, metadata, JSON-LD
│   ├── page.tsx             # Homepage (all sections)
│   ├── sitemap.ts           # Auto-generates /sitemap.xml
│   ├── robots.ts            # Auto-generates /robots.txt
│   └── work/[slug]/
│       └── page.tsx         # Project detail page
├── components/
│   ├── ui/
│   │   ├── CTAButton.tsx    # filled / ghost variants
│   │   └── SectionHeading.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Work.tsx
│   │   ├── Process.tsx
│   │   ├── About.tsx
│   │   ├── Testimonials.tsx
│   │   └── Contact.tsx
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── ProjectCard.tsx
│   ├── ProcessStep.tsx
│   └── TestimonialBlock.tsx
├── lib/
│   ├── types.ts             # TypeScript interfaces
│   └── projects.ts          # All static content data
└── public/
    └── odunayo.jpg          # Developer photo
```

## SEO

- **Metadata API** — title templates, Open Graph, Twitter cards
- **JSON-LD** — Person schema injected in `<head>` on every page
- **sitemap.xml** — auto-generated at `/sitemap.xml`
- **robots.txt** — auto-generated at `/robots.txt`
- **Semantic HTML** — `<header>`, `<main>`, `<section>`, `<article>`, `<footer>`, `aria-label`

## Deployment

Deploy to Vercel in one command:

```bash
npx vercel
```

Set your domain in Vercel settings, then update `BASE_URL` in `layout.tsx`, `sitemap.ts`, and `robots.ts`.
