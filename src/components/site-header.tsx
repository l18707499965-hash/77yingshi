import Link from 'next/link';
import { Download, Menu } from 'lucide-react';
import Logo from '@/components/logo';
import DownloadButton from '@/components/download-button';

const nav = [
  { label: '首页', href: '/' },
  { label: '功能介绍', href: '/features' },
  { label: '下载中心', href: '/download' },
  { label: '常见问题', href: '/faq' },
  { label: '关于我们', href: '/about' },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0b1020]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6">
        <Logo />

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-slate-300 transition-colors hover:text-white hover:bg-white/5"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <DownloadButton />
        </div>

        {/* 移动端：始终置顶的下载按钮 + 折叠菜单 */}
        <div className="flex items-center gap-2 md:hidden">
          <DownloadButton compact />
          <details className="group relative">
            <summary className="flex cursor-pointer list-none items-center rounded-lg p-2 text-slate-200 hover:bg-white/5">
              <Menu className="h-5 w-5" />
            </summary>
            <div className="absolute right-0 top-12 w-56 rounded-2xl border border-white/10 bg-[#121a30] p-2 shadow-2xl">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-200 hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}