import type { Metadata } from 'next';
import PageHero from '@/components/page-hero';
import { SITE } from '@/lib/config';

export const metadata: Metadata = {
  title: '隐私政策',
  description: `${SITE.name}（${SITE.nameSub}）官方隐私政策：我们如何收集、使用与保护您的个人信息，尊重并守护每一位用户的隐私安全。`,
};

const sections = [
  {
    id: 'collect',
    t: '一、我们收集的信息',
    items: [
      '当您下载并使用七七影视大全时，我们可能收集必要的设备信息（如设备型号、系统版本）以保障应用正常兼容运行。',
      '应用可能根据系统授权访问存储空间，用于播放缓存与离线下载，相关文件由用户自主管理。',
      '我们不会主动收集与使用本应用无关的个人信息，例如通讯录、短信、通话记录等敏感数据。',
    ],
  },
  {
    id: 'use',
    t: '二、信息的使用',
    items: [
      '用于提供、维护和优化应用的基础功能，如内容推荐、缓存与播放服务。',
      '用于统计应用使用情况、改进产品体验（例如通过第三方统计工具进行匿名数据统计）。',
      '仅会让法律法规允许的必要人员访问相关信息，并采取相应安全措施。',
    ],
  },
  {
    id: 'share',
    t: '三、信息的共享与披露',
    items: [
      '除法律法规要求、或为保障服务所必须（如第三方统计分析）外，我们不会向无关第三方出售、出租或共享您的个人信息。',
      '我们使用第三方统计服务用于了解产品使用情况，其数据经过匿名化处理，不涉及可识别个人身份的信息。',
    ],
  },
  {
    id: 'secure',
    t: '四、信息安全',
    items: [
      '我们采用行业通用的技术与组织措施保护数据安全，尽力防止信息被未经授权访问、使用或披露。',
      '请您也注意保护个人账户信息，避免在不可信环境使用本应用。',
    ],
  },
  {
    id: 'child',
    t: '五、未成年人保护',
    items: [
      '我们重视未成年人个人信息保护。若您为未成年人，请在监护人指导下使用本应用，并征得监护人同意。',
    ],
  },
  {
    id: 'policy',
    t: '六、政策更新与联系我们',
    items: [
      '我们可能会适时更新本隐私政策，更新后将在官网显著位置公布最新版本。',
      '如对本政策或个人数据处理有任何疑问，可通过官方联系邮箱联系我们。',
    ],
  },
];

export default function Privacy() {
  return (
    <>
      <PageHero
        badge="隐私政策"
        title="隐私政策"
        desc="我们深知个人信息的重要性，并承诺以负责任的态度处理与保护您的数据。以下为本应用隐私政策说明。"
      />
      <section className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6">
        <div className="rounded-3xl border border-white/10 bg-[#121a30]/50 p-8 sm:p-10">
          <p className="text-sm leading-7 text-slate-400">
            最近更新日期：{new Date().getFullYear()} 年 · 生效于本政策发布之日起。请务必通过官方网站渠道下载并安装本应用。
          </p>
          {sections.map((s) => (
            <section key={s.id} className="mt-8">
              <h2 className="text-lg font-bold text-white">{s.t}</h2>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-400">
                {s.items.map((it, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                    {it}
                  </li>
                ))}
              </ul>
            </section>
          ))}
          <p className="mt-10 text-sm text-slate-500">
            联系方式：{SITE.supportEmail}
          </p>
        </div>
      </section>
    </>
  );
}