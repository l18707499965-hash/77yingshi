import type { Metadata } from 'next';
import { ChevronRight, HelpCircle } from 'lucide-react';
import PageHero from '@/components/page-hero';
import DownloadButton from '@/components/download-button';
import { SITE } from '@/lib/config';

export const metadata: Metadata = {
  title: '常见问题 FAQ',
  description: `七七影视大全（${SITE.nameSub}）常见问题解答：怎么下载、怎么安装、支持哪些机型、卡顿怎么办、资源多久更新等，一文看懂。`,
};

const faqs = [
  {
    q: '七七影视大全是什么？需要付费吗？',
    a: '七七影视大全（蓝光终极版）是面向安卓用户的免费影视聚合应用，聚合海量电影、电视剧、动漫、综艺、纪录片与短剧，观看与下载均免费，无广告弹窗、无需注册付费。',
  },
  {
    q: '如何下载与安装七七影视大全？',
    a: '点击官网任意「安卓下载」按钮，下载 .apk 安装包；在文件管理中找到安装包并点击安装。若系统提示未知来源，请在系统设置中允许「安装未知来源」后重试即可。',
  },
  {
    q: '支持哪些系统与机型？',
    a: '支持 Android 5.0 及以上系统，兼容绝大多数安卓手机与平板。安装包精简、内存占用低，老机型同样可流畅运行。',
  },
  {
    q: '视频卡顿或无法播放怎么办？',
    a: '可先切换播放线路或降低清晰度（如从蓝光切到 1080P/720P）；同时确认网络稳定。若仍无法解决，可通过官网联系方式反馈，我们会在核实后尽快处理。',
  },
  {
    q: '资源多久更新一次？',
    a: '内容团队每日持续更新，热门新片与热播剧集第一时间同步，并配有热搜榜、新片榜方便查找。',
  },
  {
    q: '是否支持投屏与边下边看？',
    a: '支持投屏播放，可将手机画面投到大屏设备；同时支持离线缓存，可提前缓存后无网观看。',
  },
  {
    q: '安装后应用无法打开或闪退？',
    a: '请先卸载后重新从官网下载最新版安装；同时确认设备存储与运行内存充足，并更新系统至最新版本。',
  },
  {
    q: '为什么需要允许安装未知来源？',
    a: '因为应用以独立安装包（.apk）形式分发，安卓系统会在首次安装时校验来源。请放心，本站下载链接为官方渠道且经过签名校验，允许后即可正常安装。',
  },
];

// FAQPage 结构化数据（利于搜索引擎展示常见问题摘要）
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function Faq() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero
        badge="常见问题"
        title="常见问题解答"
        desc="关于下载、安装、播放与更新的常见疑问，这里都能找到答案。如仍有问题，欢迎随时联系我们。"
      />

      <section className="mx-auto w-full max-w-4xl px-4 py-16 sm:px-6">
        <div className="space-y-4">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-2xl border border-white/10 bg-[#121a30]/60 p-5 open:border-brand/40"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-white">
                <span className="flex items-center gap-3">
                  <HelpCircle className="h-5 w-5 shrink-0 text-brand" />
                  {f.q}
                </span>
                <ChevronRight className="h-5 w-5 shrink-0 text-slate-500 transition-transform group-open:rotate-90" />
              </summary>
              <p className="mt-4 pl-8 text-sm leading-7 text-slate-400">{f.a}</p>
            </details>
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-white/10 bg-gradient-to-br from-[#182441] to-[#0e1526] p-10 text-center">
          <h2 className="text-2xl font-extrabold text-white">还有问题没解决？</h2>
          <p className="mt-3 text-slate-400">下载并体验，或联系官方获取帮助。</p>
          <div className="mt-6 flex justify-center">
            <DownloadButton />
          </div>
        </div>
      </section>
    </>
  );
}