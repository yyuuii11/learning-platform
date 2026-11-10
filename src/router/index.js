import { createRouter, createWebHistory } from 'vue-router'
import Assignment3 from '../views/Assignment3.vue'

const routes = [
  {
    path: '/',
    redirect: '/assignment3'
  },
  {
    path: '/assignment3',
    name: 'Assignment3',
    component: Assignment3
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
