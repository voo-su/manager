import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      name: 'DashboardView',
      component: () => import('@/views/dashboard.vue')
    }
  ]
})

export default router
