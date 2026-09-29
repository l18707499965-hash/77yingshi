import type { Metadata } from 'next';
import { SITE, siteUrl } from '@/lib/config';

/** 站点全局基础 Metadata（覆盖品牌、SEO、OG、Twitter） */
export const baseMetadata: Metadata = {
  metadataBase: new URL(SITE.baseUrl),
  title: {
    default: `${SITE.name} - ${SITE.nameSub} | 海量影视免费追剧`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: SITE.keywords,
  authors: [{ name: SITE.name }],
  applicationName: SITE.name,
  alternates: {
    canonical: siteUrl('/'),
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: siteUrl('/'),
    siteName: SITE.name,
    title: `${SITE.name} - ${SITE.nameSub} | 海量影视免费追剧`,
    description: SITE.description,
    images: [{ url: siteUrl('/logo.png'), width: 512, height: 512, alt: SITE.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} - ${SITE.nameSub}`,
    description: SITE.description,
    images: [siteUrl('/logo.png')],
  },
};