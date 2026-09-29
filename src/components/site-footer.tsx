import Link from 'next/link';
import { Mail, ShieldCheck, FileText, Info } from 'lucide-react';
import Logo from '@/components/logo';
import DownloadButton from '@/components/download-button';
import { SITE } from '@/lib/config';

const quick = [
  { label: '功能介绍', href: '/features' },
  { label: '下载中心', href: '/download' },
  { label: '常见问题', href: '/faq' },
  { label: '版本更新', href: '/download#versions' },
];
const legal = [
  { label: '隐私政策', href: '/privacy' },
  { label: '免责声明', href: '/disclaimer' },
  { label: '软件许可', href: '/privacy#policy' },
  { label: '关于我们', href: '/about' },
];
const cats = ['电影', '电视剧', '动漫', '综艺', '纪录片', '短剧'];

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#0e1526]">
      <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6">
        {/* 顶部品牌 + CTA */}
        <div className="mb-12 flex flex-col items-start justify-between gap-8 rounded-3xl border border-white/10 bg-gradient-to-br from-[#16203c] to-[#0e1526] p-8 sm:flex-row sm:items-center">
          <div className="flex items-center gap-4">
            <Logo withText={false} />
            <div>
              <p className="text-xl font-bold text-white">立即开启看片之旅</p>
              <p className="text-sm text-slate-400">
                {SITE.name}（{SITE.nameSub}）免费安卓下载
              </p>
            </div>
          </div>
          <DownloadButton />
        </div>

        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-400">
              {SITE.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {cats.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-white/10 px-2.5 py-0.5 text-xs text-slate-300"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">快速导航</h3>
            <ul className="space-y-2.5">
              {quick.map((i) => (
                <li key={i.label}>
                  <Link href={i.href} className="text-sm text-slate-400 hover:text-brand-soft">
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">法律与帮助</h3>
            <ul className="space-y-2.5">
              {legal.map((i) => (
                <li key={i.label}>
                  <Link href={i.href} className="text-sm text-slate-400 hover:text-brand-soft">
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">联系我们</h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-brand" />
                {SITE.supportEmail}
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-brand" />
                正版授权 / 纯净无广告
              </li>
              <li className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-brand" />
                每日资源更新
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {SITE.name}（{SITE.nameSub}）官方网站 All Rights
            Reserved.
          </p>
          <p className="flex items-center gap-1.5">
            <Info className="h-3.5 w-3.5" />
            本站仅提供 Android 版本下载，请通过官方渠道获取应用。
          </p>
        </div>
      </div>
    </footer>
  );
}