<template>
  <div id="app" class="max-w-lg mx-auto font-sans">
    <div class="mt-8">
      <button
        @click="show = !show"
        class="bg-blue-600 text-blue-100 px-4 py-2 rounded"
      >
        Click me
      </button>
      <transition
        enter-active-class="transition-all ease-in duration-200"
        leave-active-class="transition-all ease-out duration-100"
        enter-class="opacity-0 -translate-x-8 origin-top-left transform"
        enter-to-class="opacity-100 translate-x-0"
        leave-class="opacity-100 translate-x-0"
        leave-to-class="opacity-0 origin-bottom-right transform translate-x-8"
      >
        <div v-show="show">
          <h1 class="text-4xl font-bold">Animated element</h1>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      show: true,
    };
  },
  components: {},
};
</script>

<style src="./assets/styles/style.css"></style>
