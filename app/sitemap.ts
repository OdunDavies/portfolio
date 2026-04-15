import type { MetadataRoute } from 'next'
import { projects } from '@/lib/projects'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://yourname.dev'

export default function sitemap(): MetadataRoute.Sitemap {
  const projectPages: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${BASE_URL}/work/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...projectPages,
  ]
}
