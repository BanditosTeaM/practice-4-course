import { createRouter, createWebHistory } from 'vue-router'

const FirstTask = import('../views/First.vue')
const SecondTask = import('../views/Second.vue')
const ThirdTask = import('../views/Third.vue')
const FourTask = import('../views/Four.vue')
const FiveTask = import('../views/Five.vue')
const Sixask = import('../views/Six.vue')
const SevenTask = import('../views/Seven.vue')
const EightTask = import('../views/Eight.vue')
const NineTask = import('../views/Nine.vue')
const TenTask = import('../views/Ten.vue')
const ElevenTask = import('../views/Eleven.vue')

const routers =[
  { path: '/task-1',
    name : 'First task',
    component: FirstTask
  },
  { path: '/task-2', name : 'Second task', component: SecondTask},
  { path: '/task-3', name : 'Thierd task', component: ThirdTask},
  { path: '/task-4', name : 'Four task', component: FourTask},
  { path: '/task-5', name : 'Five task', component: FiveTask},
  { path: '/task-6', name : 'Six task', component: Sixask},
  { path: '/task-7', name : 'Seven task', component: SevenTask},
  { path: '/task-8', name : 'Eight task', component: EightTask},
  { path: '/task-9', name : 'Nine task', component: NineTask},
  { path: '/task-10', name : 'Ten task', component: TenTask},
  { path: '/task-11', name : 'Eleven task', component: ElevenTask},

  ]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routers
})

export default router
