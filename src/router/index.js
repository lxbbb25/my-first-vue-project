import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import home from '../components/home'
import about from '../components/about'
import user from '../components/user'
import phone from '../components/phone'
import tablet from "../components/tablet"
import computer from "../components/computer";

// 要告诉 vue 使用 Router
Vue.use(Router)

const routes = [
  {
    path: '/home',
    component: home,
    // 子路由
    children: [
      {
        path: 'phone',
        component: phone
      },
      {
        path: 'tablet',
        component: tablet
      },
      {
        path: 'computer',
        component: computer
      }
    ]

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
    // 命名路由
    name: 'user',
    component: user
  }
]

export default new Router({
  routes
})
