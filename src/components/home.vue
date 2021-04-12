<template>
  <div>
    <h1>home</h1>
    <p>{{ msg }}</p>
    <h3>{{ $store.state.count }}</h3>
    <div>
      <button v-on:click.prevent="handleAddClick(10)">增加</button>
      <button @click="handleReduceClick(10)">减少</button>
      <button @click="handleActionsAdd(10)">异步增加</button>
      <button @click="handleActionsReduce(10)">异步减少</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "home",
    data() {
      return {
        msg: "我是home组件"
      }
    },
    methods: {
      handleAddClick(n) {
        this.$store.commit('mutationsAddCount', n);
      },
      handleReduceClick(n) {
        this.$store.commit('mutationsReduceCount', n);
      },
      handleActionsAdd(n){
        this.$store.dispatch('actionsAddCount',n)
      },
      handleActionsReduce(n){
        this.$store.dispatch('actionsReduceCount',n)
      }
    }
  }
</script>

<style scoped>

</style>
