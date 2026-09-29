'use client';

import Script from 'next/script';
import { SITE } from '@/lib/config';

/**
 * 站点头部埋点：百度统计（hm.js）
 */
export default function Analytics() {
  return (
    <>
      <Script
        id="baidu-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            var _hmt = _hmt || [];
            (function() {
              var hm = document.createElement("script");
              hm.src = "https://hm.baidu.com/hm.js?${SITE.baiduStatsId}";
              var s = document.getElementsByTagName("script")[0];
              s.parentNode.insertBefore(hm, s);
            })();
          `,
        }}
      />
    </>
  );
}