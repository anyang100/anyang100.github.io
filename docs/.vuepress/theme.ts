import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({
  hostname: "https://ay1928.github.io",
  themeColor: false,
  darkmode: "disable",
  fullscreen: false,
  contributors: false,
  author: {
    name: "NG, Kinchung",
    url: "https://ay1928.github.io",
  },
  iconAssets: "",
  logo: "/logo.svg",
  navbar: navbar,
  sidebar: sidebar,
  footer: "@ Peking University",
  copyright: "Anyang Centenary Project",
  displayFooter: true,
  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  plugins: {
    blog: {
      autoExcerpt: false,
    },

    mdEnhance: {
//      enableAll: true,
      footnote: true,
      lazyLoad: true,
      sup: true,
      sub: true,
      mark: true,
      container: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});
