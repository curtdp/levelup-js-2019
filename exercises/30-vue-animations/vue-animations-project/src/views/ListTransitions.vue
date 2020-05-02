<template>
  <div class="home">
    <button
      @click="addNum"
      class="px-4 py-2 mr-4 text-pink-200 bg-pink-900 rounded"
    >
      Add num
    </button>
    <button
      @click="removeFromBeginning"
      class="px-4 py-2 mr-4 text-pink-200 bg-pink-900 rounded"
    >
      Remove from beginning num
    </button>
    <button
      @click="randomize"
      class="px-4 py-2 text-pink-200 bg-pink-900 rounded"
    >
      Random
    </button>
    <div class="h-12">
      <transition-group name="list" tag="div" class="flex flex-wrap w-sm">
        <div class="w-1/3" v-for="item in list" :key="item">
          {{ item }}
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
import { shuffle } from 'lodash';
// @ is an alias to /src

export default {
  name: 'Home',
  data() {
    return {
      counter: 5,
      list: ['one', '12', '13', 'two', '22', '23', 'three', '32', '33'],
    };
  },
  methods: {
    addNum() {
      this.list.push(this.counter++);
    },
    removeFromBeginning() {
      this.list.shift();
    },
    randomize() {
      this.list = shuffle(this.list);
    },
  },
};
</script>

<style>
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active до версии 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
.list-move {
  transition: all 1s;
}
</style>
