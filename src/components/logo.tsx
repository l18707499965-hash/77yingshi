import Image from 'next/image';
import Link from 'next/link';
import { SITE } from '@/lib/config';

export default function Logo({ withText = true }: { withText?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-2.5" aria-label={`${SITE.name} 首页`}>
      <span className="relative inline-flex overflow-hidden rounded-2xl ring-1 ring-white/15 transition-shadow group-hover:shadow-[0_0_20px_rgba(64,180,255,0.35)]">
        <Image
          src="/logo.png"
          alt={`${SITE.name} 官方 Logo`}
          width={40}
          height={40}
          className="h-10 w-10 object-cover"
          priority
        />
      </span>
      {withText && (
        <span className="flex flex-col leading-none">
          <span className="text-lg font-extrabold tracking-tight text-white">
            {SITE.name}
          </span>
          <span className="mt-0.5 text-[11px] font-medium text-brand-soft/90">
            {SITE.nameSub} · 免费追剧
          </span>
        </span>
      )}
    </Link>
  );
}