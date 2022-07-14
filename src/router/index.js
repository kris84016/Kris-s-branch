import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../views/Index.vue'
import HomeView from '../views/HomeView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '主页',
    component: App
  },
  {
    path: '/home',
    name: '首页',
    component: HomeView
  },
  {
    path: '/movie',
    name: '电影',
    component: () => import('../views/MovieView.vue'),
  },
  {
    path: '/cinema',
    name: '影院',
    component: () => import('../views/CinemaView.vue'),
  }, {
    path: '/me',
    name: '我的',
    component: () => import('../views/MeView.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
