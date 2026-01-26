import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Composition from '../views/Composition.vue'
import Posts from '@/views/Posts.vue'
import Foods from '@/views/Foods.vue'
import Createform from '@/functions/Createform.vue'

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
      path: '/composition',
      name: 'composition',
      component: Composition
    },
    {
      path: '/post',
      name: 'post',
      component: Posts
    },
    {
      path: '/foods',
      name: 'foods',
      component: Foods
    },
    {
      path: '/createform',
      name: 'createform', 
      component: Createform
    }, 
    {
      path: "/FoodList",
      name: "FoodList",
      component: 'FoodList'
    }, 
  ],
})

export default router
