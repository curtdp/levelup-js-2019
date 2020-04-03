<template>
  <div>
    <input type="text" v-on:keydown="updateMe">
    <h1>Hello</h1>
    {{ value }}
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: ''
      }
    },
    methods: {
      updateMe(event) {
        setTimeout(() => {

          this.value = event.target.value
        },0)
      }
    }
  }
</script>

<style>
  body {
    font-size:2rem;
  }
</style>
