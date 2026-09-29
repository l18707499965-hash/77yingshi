import { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/config';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/static/'],
      },
      {
        userAgent: 'Baiduspider',
        allow: '/',
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
      {
        userAgent: 'bingbot',
        allow: '/',
      },
      {
        userAgent: 'Sogou',
        allow: '/',
      },
      {
        userAgent: 'YisouSpider',
        allow: '/',
      },
    ],
    sitemap: siteUrl('/sitemap.xml'),
    host: siteUrl('/'),
  };
}