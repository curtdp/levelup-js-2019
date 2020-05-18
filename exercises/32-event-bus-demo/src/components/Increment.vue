<template>
  <div>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
  import {EventBus} from '../event-bus'
  export default {
    methods: {
      increment() {
        console.log('increment')
        EventBus.$emit('increment')
      }
    }
  }
</script>
