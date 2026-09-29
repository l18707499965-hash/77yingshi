import Image from 'next/image';
import Link from 'next/link';
import {
  Play,
  Clapperboard,
  Zap,
  ShieldCheck,
  Sparkles,
  MonitorPlay,
  Subtitles,
  RefreshCw,
  Download,
  Gauge,
  CheckCircle2,
  ChevronRight,
} from 'lucide-react';
import PhoneMockup from '@/components/phone-mockup';
import DownloadButton from '@/components/download-button';
import { SITE } from '@/lib/config';

const features = [
  {
    icon: Clapperboard,
    title: '海量影视资源',
    desc: '聚合电影、电视剧、动漫、综艺、纪录片、短剧六大品类，全站正片持续上新，热门新片第一时间同步。',
  },
  {
    icon: MonitorPlay,
    title: '蓝光终极画质',
    desc: '支持 1080P / 蓝光等多档清晰度，配合智能解码引擎，大屏投屏也依旧细腻流畅，沉浸式观影体验。',
  },
  {
    icon: Zap,
    title: '极速秒开播放',
    desc: '多线路智能调度与边缘加速节点，实现点开即播、拖拽不卡顿，告别等待与缓冲，追剧更畅快。',
  },
  {
    icon: Subtitles,
    title: '智能字幕与倍速',
    desc: '精准字幕同步，支持 0.5x–2.0x 智能倍速与跳过片头，一键直达精彩剧情，不浪费每一秒。',
  },
  {
    icon: RefreshCw,
    title: '每日资源更新',
    desc: '专业编辑团队全天候更新，首页与分类标签实时刷新，热搜榜、新片榜帮你发现当下最火的剧集。',
  },
  {
    icon: ShieldCheck,
    title: '纯净安全无广告',
    desc: '正规渠道分发、应用签名校验，无弹窗广告、无诱导扣费，守护你的设备与隐私安全。',
  },
  {
    icon: Sparkles,
    title: '个性化推荐',
    desc: '基于观看习惯的智能推荐，越用越懂你；收藏、历史、追剧进度跨端同步，无缝衔接看片场景。',
  },
  {
    icon: Gauge,
    title: '轻量省心运行',
    desc: '安装包精简、占用内存小，老机型也能流畅运行，小屏、横屏、投屏随心切换。',
  },
];

const categories = [
  { name: '动作大片', img: '/poster-action.jpg', count: '3280+' },
  { name: '科幻巨制', img: '/poster-sci.jpg', count: '1560+' },
  { name: '都市情感', img: '/poster-romance.jpg', count: '2140+' },
  { name: '热血动漫', img: '/poster-anime.jpg', count: '890+' },
];

const stats = [
  { value: '10万+', label: '在线影视资源' },
  { value: '每日', label: '持续上新片' },
  { value: '蓝光', label: '极清画质体验' },
  { value: '0', label: '付费，全网免费看' },
];

const faqs = [
  {
    q: '七七影视大全是什么？需要付费吗？',
    a: '七七影视大全（蓝光终极版）是一款面向安卓手机的免费影视聚合应用，聚合海量电影、电视剧、动漫、综艺等内容，观看与下载均免费，无广告弹窗。',
  },
  {
    q: '如何下载与安装七七影视大全？',
    a: '点击本站任意「安卓下载」按钮即可下载 .apk 安装包。下载完成后，在手机文件管理中找到安装包并点击安装；如系统提示未知来源，请在设置中允许「安装未知应用」即可。',
  },
  {
    q: '支持哪些系统与机型？',
    a: '支持 Android 5.0 及以上系统，适配绝大多数安卓手机与平板设备，老机型同样可流畅运行。',
  },
  {
    q: '视频卡顿或无法播放怎么办？',
    a: '可先切换播放线路或降低清晰度；同时确保网络稳定。如仍无法解决，可通过官方联系方式反馈，我们会尽快处理。',
  },
  {
    q: '资源多久更新一次？',
    a: '我们的编辑团队每日持续更新，热门新片与热播剧集会在第一时间同步上线，并配有新片榜、热搜榜方便查找。',
  },
];

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{ backgroundImage: 'url(/hero-bg.jpg)' }}
        />
        <div className="absolute inset-0 -z-10 bg-[#0b1020]/78" />
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-12 px-4 pb-20 pt-16 sm:px-6 lg:flex-row lg:gap-16 lg:pt-24">
          {/* 左侧文案 */}
          <div className="flex max-w-2xl flex-1 flex-col items-start">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-brand-soft backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" />
              {SITE.nameSub} · 免费追剧神器
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-6xl">
              影视资源，尽在
              <span className="bg-gradient-to-r from-brand to-brand-soft bg-clip-text text-transparent">
                七七影视大全
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
              {SITE.name}（{SITE.nameSub}）聚合海量高清影视资源，蓝光画质、极速播放、每日更新，
              免登录、免付费、无广告，一个 App 看遍全网好剧好片。
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <DownloadButton />
              <Link
                href="/features"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-base font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
              >
                <Play className="h-5 w-5" />
                了解功能
              </Link>
            </div>
            {/* 数据 */}
            <dl className="mt-12 grid w-full grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="border-l-2 border-brand/40 pl-4">
                  <dt className="text-2xl font-extrabold text-white">{s.value}</dt>
                  <dd className="mt-1 text-sm text-slate-400">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>
          {/* 右侧手机 */}
          <div className="shrink-0 pb-6">
            <PhoneMockup />
          </div>
        </div>
      </section>

      {/* ===== 标签条 ===== */}
      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-4 py-5 text-sm text-slate-400">
          {['免费高清', '无广告', '免登录', '蓝光画质', '极速播放', '每日更新', '支持投屏'].map(
            (t) => (
              <span key={t} className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-brand" />
                {t}
              </span>
            ),
          )}
        </div>
      </section>

      {/* ===== 功能亮点 ===== */}
      <section className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6" id="features">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            一个 App，看遍全网
          </h2>
          <p className="mt-4 text-slate-400">
            {SITE.name} 在观影体验上持续打磨，把「找片、开播、追更」做到极致。
          </p>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-3xl border border-white/10 bg-[#121a30]/60 p-6 backdrop-blur transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_0_30px_rgba(64,180,255,0.2)]"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/15 text-brand group-hover:bg-brand group-hover:text-[#06111f]">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-white">{f.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== 分类展示 ===== */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                内容品类全覆盖
              </h2>
              <p className="mt-3 text-slate-400">
                电影、电视剧、动漫、综艺、纪录片、短剧……满足全家人的观影口味。
              </p>
            </div>
            <Link
              href="/download"
              className="inline-flex items-center gap-1 text-brand-soft hover:text-brand"
            >
              立即观看 <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-5 lg:grid-cols-4">
            {categories.map((c) => (
              <div
                key={c.name}
                className="group relative aspect-[3/4] overflow-hidden rounded-3xl border border-white/10"
              >
                <Image
                  src={c.img}
                  alt={`${c.name} - ${SITE.name}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width:768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1020] via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="text-lg font-bold text-white">{c.name}</h3>
                  <p className="text-sm text-brand-soft">{c.count} 部在线</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 为什么选择 ===== */}
      <section className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            为什么选择七七影视大全？
          </h2>
          <p className="mt-4 text-slate-400">
            相比市面常见的影视类应用，{SITE.name} 更注重画质、速度与纯粹体验。
          </p>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {[
            {
              t: '纯净无捆绑',
              d: '不捆绑恶意插件、无强制弹窗、无诱导扣费，正规渠道安装，用得放心。',
            },
            {
              t: '蓝光终极画质',
              d: '独家「蓝光终极版」画质通道，暗部细节与色彩还原更接近院线水准。',
            },
            {
              t: '更新快 · 资源全',
              d: '每日同步热门剧集与院线新片，热搜榜、新片榜助你紧跟当下热门。',
            },
          ].map((x, i) => (
            <div
              key={x.t}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#16203c] to-[#101729] p-8"
            >
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-brand/15 blur-2xl" />
              <span className="font-mono text-5xl font-extrabold text-white/10">
                0{i + 1}
              </span>
              <h3 className="mt-4 text-xl font-bold text-white">{x.t}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{x.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== 下载指南 ===== */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              三步开启看片之旅
            </h2>
            <p className="mt-4 text-slate-400">安卓手机轻松几步，即刻畅享蓝光影视。</p>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { icon: Download, t: '点击下载安装包', d: '点击「安卓下载」按钮，下载七七影视大全 .apk 安装包。', color: 'text-brand' },
              { icon: ShieldCheck, t: '完成安装与授权', d: '如系统提示未知来源，在设置中允许「安装未知应用」即可完成安装。', color: 'text-flare' },
              { icon: Play, t: '免费畅看全站', d: '打开 App，搜索或浏览资源，免登录、免付费，即刻开播。', color: 'text-emerald-400' },
            ].map((s, i) => (
              <div
                key={s.t}
                className="relative rounded-3xl border border-white/10 bg-[#121a30]/60 p-8 text-center"
              >
                <span className="absolute left-6 top-6 font-mono text-sm font-bold text-white/20">
                  STEP 0{i + 1}
                </span>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5">
                  <s.icon className={`h-8 w-8 ${s.color}`} />
                </div>
                <h3 className="mt-6 text-lg font-bold text-white">{s.t}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{s.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <DownloadButton />
          </div>
        </div>
      </section>

      {/* ===== FAQ 预览 ===== */}
      <section className="mx-auto w-full max-w-4xl px-4 py-20 sm:px-6">
        <h2 className="text-center text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          常见问题
        </h2>
        <div className="mt-12 space-y-4">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-2xl border border-white/10 bg-[#121a30]/60 p-5 open:border-brand/40"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-white">
                {f.q}
                <ChevronRight className="h-5 w-5 shrink-0 text-slate-500 transition-transform group-open:rotate-90" />
              </summary>
              <p className="mt-4 text-sm leading-7 text-slate-400">{f.a}</p>
            </details>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/faq"
            className="inline-flex items-center gap-1 text-brand-soft hover:text-brand"
          >
            查看全部常见问题 <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}