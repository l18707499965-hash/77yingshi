import type { Metadata } from 'next';
import {
  Clapperboard,
  MonitorPlay,
  Zap,
  Subtitles,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Gauge,
  Smartphone,
  Wifi,
  Globe,
} from 'lucide-react';
import PageHero from '@/components/page-hero';
import DownloadButton from '@/components/download-button';

export const metadata: Metadata = {
  title: '功能介绍',
  description:
    '七七影视大全（蓝光终极版）核心功能一览：海量影视资源、蓝光画质、极速播放、智能字幕、每日更新、纯净无广告，安卓免费追剧神器。',
};

const detailFeatures = [
  {
    icon: Clapperboard,
    title: '海量影视资源',
    desc: '聚合六大品类正片资源库，电影、电视剧、动漫、综艺、纪录片、短剧一应俱全，热门新片第一时间同步更新。',
    points: ['全国正片聚合', '热门新片同步', '资源智能检索'],
  },
  {
    icon: MonitorPlay,
    title: '蓝光终极画质',
    desc: '独家画质通道，支持多种清晰度自由切换。大屏设备配合投屏能力，还原接近院线的高清观感。',
    points: ['1080P / 蓝光', '智能解码引擎', '大屏投屏'],
  },
  {
    icon: Zap,
    title: '极速秒开播放',
    desc: '多线路调度与加速节点加持，点开即播、拖拽即到，配合本地缓存优化，弱网环境同样流畅。',
    points: ['点开即播', '拖拽不卡顿', '弱网优化'],
  },
  {
    icon: Subtitles,
    title: '智能字幕与倍速',
    desc: '字幕精准跟读，支持多档倍速播放与跳过片头，尊重你们的每一分钟。',
    points: ['精准字幕', '0.5x-2.0x 倍速', '跳过片头'],
  },
  {
    icon: RefreshCw,
    title: '每日资源更新',
    desc: '专业内容团队全天候运营，首页标签实时刷新，新片榜、热搜榜帮你随时掌握热门动态。',
    points: ['编辑当日上新', '热搜榜', '新片榜'],
  },
  {
    icon: ShieldCheck,
    title: '纯净安全无广告',
    desc: '正规渠道分发、安装包签名校验，无弹窗广告、无诱导扣费，安全可靠。',
    points: ['无弹窗', '无诱导扣费', '签名校验'],
  },
  {
    icon: Sparkles,
    title: '个性化推荐',
    desc: '基于观看历史的智能推荐引擎，收藏与追剧进度本地保存，越看越懂你。',
    points: ['智能推荐', '收藏追剧', '进度记忆'],
  },
  {
    icon: Gauge,
    title: '轻量低功耗',
    desc: '精简安装包、低内存占用，对老机型友好，边看边省电。',
    points: ['精简体积', '低内存', '省电优化'],
  },
  {
    icon: Smartphone,
    title: '多形态适配',
    desc: '竖屏浏览、横屏观影、投屏播放，手机平板皆适配，全场景无缝切换。',
    points: ['竖屏/横屏', '平板适配', '投屏播放'],
  },
];

export default function Features() {
  return (
    <>
      <PageHero
        badge="功能介绍"
        title="功能全面，把观影体验做到极致"
        desc="从海量片库到蓝光画质，再到极速播放与纯净体验，每一项功能都只为让你看得更爽、追得更尽兴。"
      />

      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {detailFeatures.map((f) => (
            <div
              key={f.title}
              className="flex flex-col rounded-3xl border border-white/10 bg-[#121a30]/60 p-7 transition-colors hover:border-brand/40"
            >
              <div className="flex items-center gap-4">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand/15 text-brand">
                  <f.icon className="h-6 w-6" />
                </span>
                <h2 className="text-lg font-bold text-white">{f.title}</h2>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-400">{f.desc}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {f.points.map((p) => (
                  <li
                    key={p}
                    className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 特色能力横条 */}
        <div className="mt-16 grid grid-cols-1 gap-5 rounded-3xl border border-white/10 bg-gradient-to-r from-[#16203c] to-[#0e1526] p-8 sm:grid-cols-3">
          {[
            { icon: Wifi, t: '离线缓存', d: '支持缓存到本地，无网也能看' },
            { icon: Globe, t: '多线路切换', d: '智能切换最优稳定线路' },
            { icon: ShieldCheck, t: '隐私保护', d: '正规渠道，安心使用' },
          ].map((x) => (
            <div key={x.t} className="flex items-start gap-4">
              <x.icon className="mt-0.5 h-6 w-6 shrink-0 text-brand" />
              <div>
                <h3 className="font-semibold text-white">{x.t}</h3>
                <p className="mt-1 text-sm text-slate-400">{x.d}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-extrabold text-white">现在就来体验</h2>
          <p className="mt-3 text-slate-400">安卓手机免费下载七七影视大全</p>
          <div className="mt-6">
            <DownloadButton />
          </div>
        </div>
      </section>
    </>
  );
}