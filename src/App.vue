<template>
  <div id="app">
    <img src="./assets/logo.png" alt="vue log" />
    <header>
      <router-link to="/home">Home</router-link>
      <router-link to="/about">About</router-link>
      <!--  增加两个到user组件的导航，可以看到这里使用了不同的to属性 -->
      <router-link to="/user/123">User123</router-link>
      <router-link to="/user/456">User456</router-link>
    </header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
