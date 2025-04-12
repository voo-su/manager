import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { instanceI18n } from '@/utils/i18n'
import './assets/styles/main.scss'

const i18n = instanceI18n()

const app = createApp(App)
  .use(router)
  .use(i18n as any)

app.mount('#app')
