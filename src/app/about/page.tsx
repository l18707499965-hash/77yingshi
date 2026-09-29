import type { Metadata } from 'next';
import { Target, Rocket, HeartHandshake, ShieldCheck } from 'lucide-react';
import PageHero from '@/components/page-hero';
import DownloadButton from '@/components/download-button';
import { SITE } from '@/lib/config';

export const metadata: Metadata = {
  title: '关于我们',
  description: `了解${SITE.name}（${SITE.nameSub}）的产品理念、发展历程与团队初心，认识这款免费高清影视聚合应用的背后故事。`,
};

const values = [
  {
    icon: Target,
    t: '我们的使命',
    d: '让每一位用户都能免费、流畅、纯净地看到喜欢的影视内容。',
  },
  {
    icon: Rocket,
    t: '极致体验',
    d: '从画质到播放速度，从更新频率到交互细节，持续打磨每一个环节。',
  },
  {
    icon: HeartHandshake,
    t: '用户至上',
    d: '倾听用户真实反馈，快速迭代，做真正被需要的影视工具。',
  },
  {
    icon: ShieldCheck,
    t: '安全合规',
    d: '坚持正规渠道分发、尊重内容版权，持续优化内容的合规与安全。',
  },
];

export default function About() {
  return (
    <>
      <PageHero
        badge="关于我们"
        title="关于七七影视大全"
        desc="我们是一群热爱影视、专注产品体验的开发者，希望通过一款好用、免费、纯净的应用，让看片这件事变得简单而快乐。"
      />

      <section className="mx-auto w-full max-w-4xl px-4 py-16 sm:px-6">
        <div className="space-y-6 text-[15px] leading-8 text-slate-300">
          <p>
            <strong className="text-white">{SITE.name}</strong>
            （{SITE.nameSub}）是一款面向安卓用户的高清影视聚合应用。自上线以来，我们始终围绕「免费、高清、纯净、快速」四个关键词打磨产品，努力成为大家手机里那个值得信赖的看片工具。
          </p>
          <p>
            我们聚合了电影、电视剧、动漫、综艺、纪录片与短剧等丰富内容，并采用多线路调度与智能解码技术，让播放流畅稳定；同时坚持无广告、无捆绑的纯净策略，把干净的选择权交还给用户。
          </p>
          <div className="rounded-2xl border border-white/10 bg-[#121a30]/60 p-6">
            <p className="font-semibold text-white">我们的愿景</p>
            <p className="mt-2">
              打造一个人人用得起的免费观影平台，让好的内容触手可及。未来我们会持续扩展片库、优化画质与体验，也欢迎每一位用户的建议。
            </p>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {values.map((v) => (
            <div
              key={v.t}
              className="rounded-3xl border border-white/10 bg-[#121a30]/60 p-7 transition-colors hover:border-brand/40"
            >
              <v.icon className="h-8 w-8 text-brand" />
              <h3 className="mt-4 text-lg font-bold text-white">{v.t}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">{v.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-extrabold text-white">加入我们，一起看片</h2>
          <p className="mt-3 text-slate-400">安卓免费下载，即刻开启光影之旅</p>
          <div className="mt-6 flex justify-center">
            <DownloadButton />
          </div>
        </div>
      </section>
    </>
  );
}