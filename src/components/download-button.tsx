'use client';

import { Download } from 'lucide-react';
import { SITE } from '@/lib/config';

/**
 * 安卓下载按钮（带百度统计下载事件埋点）
 */
export default function DownloadButton({ compact = false }: { compact?: boolean }) {
  const handleClick = () => {
    try {
      const w = window as unknown as { _hmt?: string[][] };
      if (w._hmt) {
        w._hmt.push(['_trackEvent', 'download', 'click', 'apk']);
      }
    } catch {
      /* ignore */
    }
  };

  return (
    <a
      href={SITE.androidDownloadUrl}
      onClick={handleClick}
      className={`group inline-flex items-center justify-center gap-2 rounded-full bg-brand font-semibold text-[#06111f] shadow-[0_0_24px_rgba(64,180,255,0.45)] transition-all hover:bg-brand-soft hover:shadow-[0_0_34px_rgba(64,180,255,0.7)] ${
        compact ? 'px-3.5 py-2 text-sm' : 'px-6 py-3 text-base'
      }`}
    >
      <Download className={compact ? 'h-4 w-4' : 'h-5 w-5'} />
      <span>安卓下载</span>
    </a>
  );
}