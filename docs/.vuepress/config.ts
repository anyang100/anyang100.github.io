import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics';
import { searchProPlugin } from "vuepress-plugin-search-pro";

export default defineUserConfig({
  base: "/",
  lang: "zh-TW",
  title: "安陽・一九二八",
  description: "安陽考古學研究索引集",
  head:[
    [
      "script",
      {
        "data-ad-client": "ca-pub-8975507583219124",
        async: true,
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      }
    ],
  ],
  plugins: [
    googleAnalyticsPlugin({
      id: 'G-ST7K7C1TYH',
    }),
    searchProPlugin({
      indexContent: true,
    }),
  ],
  theme: hopeTheme({
    hostname: "https://ay1928.github.io",
    darkmode: "disable",
    themeColor: false,
    fullscreen: false,
    pageInfo: false,
    contributors: false,
    lastUpdated: false,
    favicon: "/favicon.ico",
    footer: "",
    copyright: "安陽考古學研究索引集",
    displayFooter: true,
    author: {
        name: "NG, Kin-chung",
        url: "https://ay1928.github.io",
      },
    navbar: [
      {
        text: "文獻",
        link: "/reference.md",
      },
      {
        text: "報道",
        link: "/news.md",
      },
      {
        text: "關於",
        link: "/about.md",
      },
      {
        text: "追跡香江",
        link: "https://www.pasthk.com/",
      }, 
    ],
      plugins: {
        feed: {
          rss: true,
          atom: true,
        },
        mdEnhance: {
                  footnote: true,
                  imgLazyload: true,
                  sup: true,
                  sub: true,
                  mark: true,
                  container: true,
                },
      },
  }),
});