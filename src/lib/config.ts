/**
 * 站点全局配置
 * 所有域名/链接/统计ID在此统一维护，禁止散落硬编码。
 */
export const SITE = {
  name: '七七影视大全',
  nameSub: '蓝光终极版',
  tagline: '海量影视 · 蓝光画质 · 畅快看',
  description:
    '七七影视大全（蓝光终极版）是一款面向安卓用户的免费影视聚合应用，聚合海量高清影视资源，支持蓝光画质、流畅播放与每日更新。上七七影视，追剧看片不受限。',
  keywords: [
    '七七影视大全',
    '七七影视',
    '影视大全',
    '蓝光终极版',
    '安卓影视app',
    '免费追剧',
    '免费看片',
    '高清影视',
    '蓝光画质',
    '在线影视',
    '影视聚合',
    '七七八八影视',
  ],
  // 生产/预览域名（运行时由环境变量注入）
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL ?? process.env.COZE_PROJECT_DOMAIN_DEFAULT ?? 'https://example.com',
  androidDownloadUrl:
    'https://bos.liao-hai.chat/yxq/%e4%b8%83%e4%b8%83%e5%bd%b1%e8%a7%86%e5%a4%a7%e5%85%a8.apk',
  apkFileName: '七七影视大全.apk',
  // 百度统计 hm.js 站点ID（32位十六进制）
  baiduStatsId: 'ab9da7dced52caf664eb923c2dedec35',
  supportEmail: 'support@qishi-video.example.com',
};

/** 统一拼接绝对 URL */
export function siteUrl(path = '') {
  return `${SITE.baseUrl}${path}`;
}