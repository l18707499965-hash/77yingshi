import type { Metadata } from 'next';
import {
  Download as DownloadIcon,
  Smartphone,
  ShieldCheck,
  FileCheck2,
  RotateCcw,
  AlertTriangle,
} from 'lucide-react';
import PageHero from '@/components/page-hero';
import DownloadButton from '@/components/download-button';
import { SITE } from '@/lib/config';

export const metadata: Metadata = {
  title: '安卓下载中心',
  description: `七七影视大全（${SITE.nameSub}）安卓官方免费下载，支持 Android 5.0 及以上系统。蓝光画质、极速播放、每日更新、纯净无广告，立即下载开启免费追剧之旅。`,
};

const steps = [
  {
    icon: DownloadIcon,
    t: '点击下载',
    d: '点击下方「安卓下载」按钮，获取最新版 .apk 安装包。',
  },
  {
    icon: ShieldCheck,
    t: '允许安装',
    d: '系统若提示未知来源，请在设置中允许「安装未知应用」后继续。',
  },
  {
    icon: FileCheck2,
    t: '一键安装',
    d: '在文件管理中找到安装包并安装，完成后即可打开使用。',
  },
];

export default function Download() {
  return (
    <>
      <PageHero
        badge="下载中心"
        title="安卓版官方下载"
        desc="七七影视大全（蓝光终极版）面向 Android 用户提供官方免费下载。安装后免登录、免付费，海量高清影视即刻畅看。"
      />

      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6">
        {/* 主下载卡片 */}
        <div className="rounded-3xl border border-brand/30 bg-gradient-to-br from-[#182441] to-[#0e1526] p-8 text-center sm:p-12">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-brand/20">
            <Smartphone className="h-10 w-10 text-brand" />
          </div>
          <h2 className="mt-6 text-2xl font-extrabold text-white">
            {SITE.name}（{SITE.nameSub}）
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            最新版本 · 安卓官方渠道 · 免费安装
          </p>
          <div className="mt-8 flex justify-center">
            <DownloadButton />
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-slate-300">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-emerald-400" /> 已签名 · 安全无广告
            </span>
            <span className="inline-flex items-center gap-2">
              <RotateCcw className="h-4 w-4 text-brand" /> 持续更新
            </span>
            <span>适用：Android 5.0+</span>
          </div>

          {/* 版本信息 */}
          <div
            id="versions"
            className="mt-10 grid grid-cols-1 gap-3 border-t border-white/10 pt-8 text-left sm:grid-cols-3"
          >
            {[
              { k: '应用名称', v: `${SITE.name}（${SITE.nameSub}）` },
              { k: '最新版本', v: 'v2.8.6（蓝光终极版）' },
              { k: '系统要求', v: 'Android 5.0 及以上' },
              { k: '安装包大小', v: '约 28 MB' },
              { k: '是否收费', v: '完全免费' },
              { k: '更新内容', v: '修复部分机型播放异常，优化画质' },
            ].map((r) => (
              <div key={r.k} className="rounded-2xl bg-white/5 p-4">
                <dt className="text-xs text-slate-500">{r.k}</dt>
                <dd className="mt-1 text-sm font-semibold text-white">{r.v}</dd>
              </div>
            ))}
          </div>
        </div>

        {/* 安装步骤 */}
        <div className="mt-16">
          <h2 className="text-center text-2xl font-extrabold text-white sm:text-3xl">
            安装步骤
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {steps.map((s, i) => (
              <div
                key={s.t}
                className="relative rounded-3xl border border-white/10 bg-[#121a30]/60 p-8 text-center"
              >
                <span className="absolute left-6 top-6 font-mono text-sm font-bold text-white/20">
                  STEP 0{i + 1}
                </span>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5">
                  <s.icon className="h-8 w-8 text-brand" />
                </div>
                <h3 className="mt-6 text-lg font-bold text-white">{s.t}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{s.d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 注意事项 */}
        <div className="mt-14 flex gap-4 rounded-3xl border border-flare/25 bg-flare/5 p-7">
          <AlertTriangle className="h-6 w-6 shrink-0 text-flare" />
          <div>
            <h3 className="font-bold text-white">安全提示</h3>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-300">
              <li>请仅通过本站公布的官方链接下载，谨防第三方捆绑与篡改包。</li>
              <li>若首次安装被拦截，请到「系统设置」手动允许安装该应用来源。</li>
              <li>本站仅提供 Android 版本，iOS 用户暂不支持下载页面下载。</li>
              <li>如遇版本或安装问题，可通过官网「联系我们」反馈，我们将尽快跟进。</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}