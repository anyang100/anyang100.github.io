import { defineUserConfig } from "vuepress";
import theme from "./theme";
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'

export default defineUserConfig({
  lang: "zh-TW",
  title: "安陽・一九二八",
  description: "",
  base: "/",
  head: [
    [
      "script",
      {
        "data-ad-client": "ca-pub-8975507583219124",
        async: true,
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      }
    ]
  ],
    plugins: [
      googleAnalyticsPlugin({
        id: 'G-ST7K7C1TYH',
      }),
    ],

  theme,
});
