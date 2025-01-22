import { createApp } from 'vue'
import App from './App.vue'
import * as plugins from './plugins'
import router from './router'
import './assets/scss/main.scss'

const app = createApp(App)

app.use(router)

plugins.setupNaiveUI(app)
plugins.setLocale(app)

app.mount('#app')
