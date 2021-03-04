import { createRouter, createWebHistory } from 'vue-router'
import Inbox from '../views/Inbox/Inbox.vue'


const routes = [
  {
    path: '/',
    redirect: '/inbox'
  },
  {
    path: '/inbox',
    name: 'Inbox',
    component: Inbox,
  },
  {
    path: '/myday',
    name: 'Myday',
    component: () => import('../views/Myday/Myday.vue')
  },
  {
    path: '/important',
    name: 'Important',
    component: () => import('../views/Important/Important.vue')
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
