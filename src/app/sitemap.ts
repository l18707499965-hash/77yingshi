import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/config';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }[] = [
    { path: '/', priority: 1.0, changeFrequency: 'daily' },
    { path: '/download', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/features', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/faq', priority: 0.7, changeFrequency: 'weekly' },
    { path: '/about', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/privacy', priority: 0.4, changeFrequency: 'yearly' },
    { path: '/disclaimer', priority: 0.4, changeFrequency: 'yearly' },
  ];

  return pages.map((p) => ({
    url: siteUrl(p.path),
    lastModified: now,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));
}