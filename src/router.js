// router.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from './myComponents/HomePage.vue'
import About from './myComponents/buttonsHome.vue'
import showPhotos from './myComponents/showPhotos.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/photos', component: showPhotos }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
