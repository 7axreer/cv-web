import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home/Home.vue'
import Skills from '@/pages/Skills/Skills.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { transition: 'fade' },
    },
    {
      path: '/skills',
      name: 'Skills',
      component: Skills,
      meta: { transition: 'fade' },
    },
    {
      path: '/experience',
      name: 'experience',
      meta: { transition: 'fade' },
      component: () => import('@/pages/Experience/Experience.vue')
    },
    {
      path: '/about',
      name: 'about',
      meta: { transition: 'fade' },
      component: () => import('@/pages/About/About.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      meta: { transition: 'fade' },
      component: () => import('@/pages/Contact/Contact.vue')
    },
  ]
})

export default router
