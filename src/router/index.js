import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../views/Index.vue'
import HomeView from '../views/HomeView'
import Login from '../views/Login.vue'
import Register from "../views/Register";

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
  {
    path: '/login',
    name: '登录',
    component: Login
  },
  {
    path: '/register',
    name: '注册',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/repwd',
    name: '修改密码',
    component: () => import('../views/Repwd.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
