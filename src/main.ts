import { createApp } from 'vue'
import App from './App.vue'
import * as plugins from './plugins'
import './assets/main.css'

const app = createApp(App)

plugins.setupNaiveUI(app)

app.mount('#app')
