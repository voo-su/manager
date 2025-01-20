import type { App } from 'vue'

import {
  create,
  NInput,
  NButton,
} from 'naive-ui'

const naive = create({
  components: [
    NInput,
    NButton,
  ]
})

export function setupNaiveUI(app: App) {
  app.use(naive)
}
