import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/reset.scss'
import './assets/iconfont/iconfont'
createApp(App).use(store).use(router).mount('#app')
