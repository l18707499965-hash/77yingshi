/** 内页统一的标题区（含面包屑 SEO） */
export default function PageHero({
  badge,
  title,
  desc,
}: {
  badge: string;
  title: string;
  desc: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(80%_120%_at_50%_0%,rgba(64,180,255,0.18),transparent_60%)]" />
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
        <nav className="mb-6 text-sm text-slate-400">
          首页 <span className="mx-1.5 text-slate-600">/</span>
          <span className="text-brand-soft">{badge}</span>
        </nav>
        <h1 className="max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">{desc}</p>
      </div>
    </section>
  );
}