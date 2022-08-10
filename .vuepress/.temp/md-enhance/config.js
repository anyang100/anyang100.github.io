import { defineClientConfig } from "@vuepress/client";
    import { defineAsyncComponent } from "vue";
import Presentation from "D:/ngkinchung/Github/anyang100.github.io/node_modules/vuepress-plugin-md-enhance/lib/client/components/Presentation";
import "D:/ngkinchung/Github/anyang100.github.io/node_modules/vuepress-plugin-md-enhance/lib/client/styles/container/index.scss";
import "D:/ngkinchung/Github/anyang100.github.io/node_modules/vuepress-plugin-md-enhance/lib/client/styles/footnote.scss";


export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("Presentation", Presentation);
    
  }
});