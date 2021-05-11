import { createApp } from 'vue'
import router from "./router";
import App from './App.vue'
import "@/assets/scss/index.scss"
import 'normalize.css/normalize.css'

const app = createApp(App);

// 分环境处理
if (process.env.NODE_ENV === 'development') {
    if ('__VUE_DEVTOOLS_GLOBAL_HOOK__' in window) {
    // 这里__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue赋值一个createApp实例
      window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app
    }
    app.config.devtools = true
}

app.use(router);
app.mount('#app')
