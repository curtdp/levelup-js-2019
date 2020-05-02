<template>
  <div class="home">
    <button
      @click="show = !show"
      class="px-4 py-2 text-pink-200 bg-pink-900 rounded"
    >
      Show
    </button>
    <div class="h-12">
      <transition>
        <h1 v-show="show" class="text-4xl font-bold">Vue animations</h1>
      </transition>
    </div>

    <button
      @click="show2 = !show2"
      class="px-4 py-2 text-pink-200 bg-pink-900 rounded"
    >
      Show2
    </button>
    <div class="h-12">
      <transition name="bounce">
        <h1 v-show="show2" class="text-4xl font-bold">Vue animations</h1>
      </transition>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data() {
    return {
      show: true,
      show2: true,
    };
  },
};
</script>

<style>
.v-enter {
  opacity: 0;
  transform: translateX(-100px);
}
.v-enter-active {
  transition: all 200ms ease-in;
}
.v-enter-to {
  opacity: 1;
}

.v-leave {
  opacity: 1;
}
.v-leave-active {
  transition: all 200ms ease-in;
}
.v-leave-to {
  opacity: 0;
  transform: translateX(100px);
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 1.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: rotateZ(90deg) scale(0);
  }

  25% {
    transform: rotateZ(90deg) scale(0.25);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
