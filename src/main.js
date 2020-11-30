// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// 这是vue 加载js的入口
// 加载的都是vue的全局属性

// 引入 vue
import Vue from 'vue'
// 引入咱们的主页面
import App from './App'
// 引入路由，可以使用路由跳转
import router from './router'

// vue的全局设置
// productionTip设置为 false 以阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = false

/* eslint-disable no-new */
// 这条注释的意思下面的new vue 不使用eslint的语法检查
new Vue({
  el: '#app', // 绑定DOM节点
  router, // 使用路由
  components: { App }, // 组件
  template: '<App/>'
})
