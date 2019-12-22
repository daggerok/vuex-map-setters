<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <VuexTodoList msg="Improve your Vuex store!"/>
  </div>
</template>

<script>
import VuexTodoList from './components/VuexTodoList.vue'

export default {
  name: 'app',
  components: {
    VuexTodoList,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 1;
}
</style>
