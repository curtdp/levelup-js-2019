<template>
  <div class="mt-8">
    <button
      @click="show = !show"
      class="px-4 py-2 text-blue-100 bg-blue-600 rounded"
    >
      Click me
    </button>
    <transition
      enter-active-class="transition-all duration-1000 ease-in-expo"
      leave-active-class="transition-all duration-1000 ease-out-expo"
      enter-class="origin-top-left transform -translate-x-8 -translate-y-2 opacity-0"
      enter-to-class="translate-x-0 opacity-100"
      leave-class="translate-x-0 opacity-100"
      leave-to-class="origin-bottom-right transform translate-x-8 opacity-0"
      appear
      mode="out-in"
    >
      <div v-if="show" key="one">
        <h1 class="text-4xl font-bold">Animated element</h1>
        <!-- <p class="animatig-enter">Другой элемент</p> -->
      </div>
      <div v-else key="two">
        <h1 class="text-4xl font-bold">Else element</h1>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Custom Transition Classes',
  data() {
    return {
      show: true,
    };
  },
};
</script>

<style>
.animatig-enter {
  animation: 3s ease-in 1s 1 reverse both running slidein;
}

@keyframes slidein {
  0% {
    color: #f00;
    transform: scaleX(0);
  }
  50% {
    color: #00f;
    transform: scaleX(0);
  }
  100% {
    color: #0f0;
    transform: scaleX(1);
  }
}
</style>
