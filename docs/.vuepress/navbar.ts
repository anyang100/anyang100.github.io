import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "文化遺產",
    children: ["/oracle/", "/yinxu/", "/huanbei-shang-city/", "/gao-ling/"],
  },
  { text: "報道", link: "/news.md" },
  { text: "年鑒", link: "/yearbook/new-archaeological-discovery" },
//  { text: "筆記", link: "/note/" },
]);
