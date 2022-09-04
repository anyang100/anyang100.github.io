import { defineClientConfig } from "@vuepress/client";
    import { defineAsyncComponent } from "vue";
import Presentation from "/Users/ngkinchung/Documents/GitHub/ay1928.github.io/node_modules/vuepress-plugin-md-enhance/lib/client/components/Presentation";
import "/Users/ngkinchung/Documents/GitHub/ay1928.github.io/node_modules/vuepress-plugin-md-enhance/lib/client/styles/container/index.scss";
import "/Users/ngkinchung/Documents/GitHub/ay1928.github.io/node_modules/vuepress-plugin-md-enhance/lib/client/styles/footnote.scss";


export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("Presentation", Presentation);
    
  }
});