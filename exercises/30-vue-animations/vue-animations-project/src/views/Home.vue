<template>
  <div class="home">
    <button
      @click="show = !show"
      class="px-4 py-2 rounded bg-pink-900 text-pink-200"
    >
      Show
    </button>
    <transition>
      <h1 v-if="show" class="text-4xl font-bold">Vue animations</h1>
    </transition>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data() {
    return {
      show: true,
    };
  },
};
</script>

<style>
.v-enter-active {
  transition: all 400ms ease-in;
}

.v-enter {
  opacity: 0;
  transform: scale(0.5);
}

v-enter-to {
  transform: scale(1.2);
}

.v-leave-active {
  transition: all 800ms ease-out;
}
.v-leave {
  transform: scale(1.2);
}

.v-leave-to {
  opacity: 0;
  transform: scale(0.5) translateX(300px);
}
</style>
