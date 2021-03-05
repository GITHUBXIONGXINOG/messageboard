import { createRouter, createWebHistory } from 'vue-router'
import Tasks from '../views/Tasks/Tasks.vue'


const routes = [
  {
    path: '/',
    redirect: '/tasks'
  },
  {
    path: '/tasks',
    name: 'Tasks',
    component: Tasks,
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
