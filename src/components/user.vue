<template>
  <div>
    <h1>User</h1>
    <div>我是user组件，动态部分是{{ dynamicSegment }}</div>
    <div>{{ dynamicSegment1 }}</div>
  </div>
</template>

<script>
  export default {
    name: "user",
    data() {
      return {
        dynamicSegment: ''
      }
    },
    watch: {
      $route(to, from) {
        console.log(to);
        console.log(from);
        this.dynamicSegment = to.params.id;
      }
    },
    computed: {
      dynamicSegment1() {
        return this.$route.params.id
      }
    }
  }
</script>

<style scoped>

</style>
