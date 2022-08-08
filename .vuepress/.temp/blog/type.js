export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-0daed70d","v-2149b38c","v-7a7f74cc","v-452b2d08","v-0ed39efe","v-b9483524","v-3ff58fb0","v-2f35cfc1","v-519e77b4","v-642d2f8e","v-e649222e","v-ca06da12","v-7f5547ea","v-30f79f76","v-6e903af4","v-cff801f8","v-ca506ae2","v-48c65ee0","v-1f7098ff","v-380ea3d2","v-05620e25","v-3eb983f5","v-f4d99334","v-d530eb04","v-27f5e5c9","v-10c53a9e","v-195d74aa","v-0a7ce7f2","v-61de729e","v-8668d030","v-33564aaa","v-3de23f43","v-7f6b1f72","v-76d2e1a2","v-2142c37b","v-fd899030"]}},"encrypted":{"/":{"path":"/encrypted/","keys":[]}},"slide":{"/":{"path":"/slide/","keys":[]}},"star":{"/":{"path":"/star/","keys":[]}},"timeline":{"/":{"path":"/timeline/","keys":["v-0daed70d","v-2149b38c","v-7a7f74cc","v-452b2d08"]}}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogType) {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap)
  })
}
