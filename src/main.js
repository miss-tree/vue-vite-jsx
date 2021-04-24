import { createApp } from 'vue'
import router from "./router";
import App from './App.vue'
import "@/assets/scss/index.scss"
import 'normalize.css/normalize.css'

const app = createApp(App);
app.use(router);

app.mount('#app')
