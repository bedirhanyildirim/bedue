import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import './firebase/index.js'
import store from './store'
import VueClickAway from 'vue3-click-away'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(VueClickAway)
app.mount('#app')