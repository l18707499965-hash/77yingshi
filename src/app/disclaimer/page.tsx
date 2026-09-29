import type { Metadata } from 'next';
import PageHero from '@/components/page-hero';
import { SITE } from '@/lib/config';

export const metadata: Metadata = {
  title: '免责声明',
  description: `${SITE.name}（${SITE.nameSub}）官方免责声明：版权说明、免责条款与用户使用须知。`,
};

const clauses = [
  {
    t: '内容与版权声明',
    d: '本应用中的影视资源均来源于公开网络渠道聚合索引，仅用于个人学习与试看交流。本站及本应用不存储、不上传任何影视内容原文件，也不对相关资源拥有版权。所有影视作品的著作权归其原始权利人所有。',
  },
  {
    t: '合法使用义务',
    d: '请您在下载、观看前确认当地法律法规的合规性，遵守相关版权规定，仅将资源用于个人合法的学习与试看用途，不得用于任何商业或非法用途。',
  },
  {
    t: '第三方链接声明',
    d: '应用内可能包含第三方链接或对外跳转，我们不对第三方网站内容、隐私政策及安全性负责，请审慎判断并自行承担相应风险。',
  },
  {
    t: '下载与安装风险',
    d: '请务必通过本官方网站公布的链接下载安装包。因从非官方渠道下载或安装导致的安全问题、数据损失或设备故障，本应用不承担相关责任。',
  },
  {
    t: '服务中断声明',
    d: '由于网络、设备、第三方服务或不可抗力等原因，应用可能发生临时性中断或内容调整，我们保留对服务进行维护、升级或调整的权利，恕不另行逐一通知。',
  },
  {
    t: '联系我们（侵权投诉）',
    d: '如权利人认为相关聚合索引内容侵犯了其合法权益，请通过本站公布的官方联系邮箱与我们取得联系，我们将在核实情况后视需要移除相关链接。',
  },
];

export default function Disclaimer() {
  return (
    <>
      <PageHero
        badge="免责声明"
        title="免责声明"
        desc="请在使用七七影视大全前仔细阅读以下条款。下载、安装或使用本应用即视为您已理解并同意本声明。"
      />
      <section className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6">
        <div className="space-y-6">
          {clauses.map((c, i) => (
            <div
              key={c.t}
              className="rounded-3xl border border-white/10 bg-[#121a30]/50 p-7"
            >
              <h2 className="flex items-center gap-3 text-lg font-bold text-white">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand/15 text-sm font-bold text-brand">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {c.t}
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-400">{c.d}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-slate-500">
          联系方式：{SITE.supportEmail}
        </p>
      </section>
    </>
  );
}