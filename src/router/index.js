import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/round-select',
      name: 'round-select',
      component: () => import('../views/RoundSelectView.vue'),
    },
    {
      path: '/hole/:holeNumber',
      name: 'hole',
      component: () => import('../views/HoleScoreView.vue'),
    },
    {
      path: '/scorecard',
      name: 'scorecard',
      component: () => import('../views/FinalScoreView.vue'),
    },
  ],
})

export default router
