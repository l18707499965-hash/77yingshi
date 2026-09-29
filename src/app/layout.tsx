import type { Metadata } from 'next';
import './globals.css';
import { baseMetadata } from '@/lib/seo';
import { SITE, siteUrl } from '@/lib/config';
import SiteHeader from '@/components/site-header';
import SiteFooter from '@/components/site-footer';
import Analytics from '@/components/analytics';

export const metadata: Metadata = baseMetadata;

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0b1020',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': siteUrl('/#website'),
      url: siteUrl('/'),
      name: SITE.name,
      description: SITE.description,
      inLanguage: 'zh-CN',
    },
    {
      '@type': 'Organization',
      '@id': siteUrl('/#organization'),
      name: SITE.name,
      url: siteUrl('/'),
      logo: { '@type': 'ImageObject', url: siteUrl('/logo.png') },
    },
    {
      '@type': 'SoftwareApplication',
      name: `${SITE.name}（${SITE.nameSub}）`,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Android',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'CNY' },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        ratingCount: '12860',
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={`antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}