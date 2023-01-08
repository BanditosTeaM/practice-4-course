import { createRouter, createWebHistory } from 'vue-router'

const firstTask = import('../views/task1.vue')
const secondTask = import('../views/task2.vue')
const thirdTask = import('../views/task3.vue')
const routers = [
  { path: '/task-1', name : 'First task', component: firstTask},
  { path: '/task-2', name : 'Second task', component: secondTask},
  { path: '/task-3', name : 'Thierd task', component: thirdTask}
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routers
})

export default router
