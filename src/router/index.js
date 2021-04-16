import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import home from '../components/home'
import about from '../components/about'
import user from '../components/user'

// 要告诉 vue 使用 Router
Vue.use(Router)

const routes = [
  {
    path: '/home',
    component: home
  },
  {
    path: '/about',
    component: about
  },
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/user/:id',
    component: user
  }
]

export default new Router({
  routes
})
