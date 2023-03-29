export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"zh-TW\",\"title\":\"安陽・一九二八\",\"description\":\"安陽考古學研究索引集\",\"head\":[[\"script\",{\"data-ad-client\":\"ca-pub-8975507583219124\",\"async\":true,\"src\":\"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js\"}],[\"link\",{\"rel\":\"icon\",\"href\":\"/favicon.ico\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
