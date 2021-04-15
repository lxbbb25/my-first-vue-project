<template>
  <div>
    <h1>about</h1>
    <p>{{ aboutMsg }}</p>
    <h3>{{ $store.state.count }}</h3>
    <h4>{{ $store.getters.getterCount }}</h4>

    <div>
      <button v-on:click.prevent="handleAddClick(10)">增加</button>
      <button @click="handleReduceClick(10)">减少</button>
      <button @click="handleActionsAdd(10)">异步增加</button>
      <button @click="handleActionsReduce(10)">异步减少</button>
    </div>

  </div>
</template>

<script>
  import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'

  export default {
    name: "about",
    data() {
      return {
        aboutMsg: "我是about组件"
      }
    },
    methods: {
      ...mapMutations({
        handleAddClick: 'mutationsAddCount',
        handleReduceClick: 'mutationsReduceCount'
      }),
      ...mapActions({
        handleActionsAdd: 'actionsAddCount',
        handleActionsReduce: 'actionsReduceCount'
      })
    },
    computed: {
      count() {
        return this.$store.getters.getterCount
      }
    }
  }
</script>

<style scoped>

</style>
