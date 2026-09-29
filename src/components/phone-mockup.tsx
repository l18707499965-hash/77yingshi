import Image from 'next/image';

const posters = [
  { src: '/poster-action.jpg', label: '动作大片' },
  { src: '/poster-sci.jpg', label: '科幻巨制' },
  { src: '/poster-romance.jpg', label: '都市情感' },
  { src: '/poster-anime.jpg', label: '热血动漫' },
];

/** CSS 高仿手机壳，内嵌影视瀑布流，营造真实 App 感 */
export default function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[300px] select-none sm:w-[320px]">
      {/* 光晕 */}
      <div className="absolute -inset-6 -z-10 rounded-[48px] bg-[radial-gradient(circle_at_center,rgba(64,180,255,0.35),transparent_70%)] blur-2xl" />
      {/* 机身 */}
      <div className="relative rounded-[44px] border border-white/15 bg-[#0d1322] p-3 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)]">
        <div className="absolute left-1/2 top-2.5 h-6 w-28 -translate-x-1/2 rounded-full bg-black" />
        <div className="overflow-hidden rounded-[32px] bg-[#101729]">
          {/* 状态栏 */}
          <div className="flex items-center justify-between px-5 pt-3 text-[10px] font-medium text-slate-400">
            <span>9:41</span>
            <div className="flex gap-1">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand" />
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-flare" />
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </div>
          </div>
          {/* 顶部导航 */}
          <div className="mt-3 flex items-center justify-between px-4">
            <div className="flex items-center gap-2">
              <Image src="/logo.png" alt="logo" width={24} height={24} className="h-6 w-6 rounded-lg" />
              <span className="text-sm font-bold text-white">七七影视</span>
            </div>
            <span className="rounded-full bg-brand/20 px-2 py-0.5 text-[10px] font-medium text-brand-soft">
              蓝光终极版
            </span>
          </div>
          {/* 搜索条 */}
          <div className="mx-4 mt-3 flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2">
            <span className="h-3 w-3 rounded-full border border-slate-400" />
            <span className="text-[11px] text-slate-500">搜索影视 / 演员</span>
          </div>
          {/* 分类标签 */}
          <div className="mt-3 flex gap-2 overflow-hidden px-4">
            {['首页', '影院热映', '电视剧', '动漫', '短剧'].map((t, i) => (
              <span
                key={t}
                className={`whitespace-nowrap rounded-full px-2.5 py-1 text-[10px] font-medium ${
                  i === 0 ? 'bg-brand text-[#06111f]' : 'bg-white/5 text-slate-300'
                }`}
              >
                {t}
              </span>
            ))}
          </div>
          {/* 海报瀑布流 */}
          <div className="grid grid-cols-2 gap-2.5 p-4">
            {posters.map((p, i) => (
              <div key={p.src} className={i === 3 ? 'col-span-2 flex' : ''}>
                <Image
                  src={p.src}
                  alt={p.label}
                  width={i === 3 ? 320 : 160}
                  height={200}
                  className={`w-full rounded-xl object-cover ${i === 3 ? 'h-28' : 'h-28'}`}
                />
              </div>
            ))}
          </div>
          {/* 底部导航 */}
          <div className="flex items-center justify-around border-t border-white/10 px-4 py-3 text-slate-400">
            {['首页', '广场', '我的'].map((t) => (
              <span key={t} className="flex flex-col items-center gap-1 text-[9px]">
                <span
                  className={`h-1.5 w-1.5 rounded-full ${t === '首页' ? 'bg-brand' : 'bg-slate-600'}`}
                />
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}