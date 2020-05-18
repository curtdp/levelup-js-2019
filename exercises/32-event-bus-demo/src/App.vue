<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>{{ counter }}</h1>
    <Increment></Increment>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Increment from './components/Increment.vue'
import { EventBus } from './event-bus'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Increment
  },
  created() {
    EventBus.$on('increment', () => {
      this.counter++;
    })
  },
  data() {
    return {
      counter: 0,
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
