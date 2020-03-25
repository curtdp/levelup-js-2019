<template>
  <div id="app">
    <input type="number" v-model="squareWidth" />
    <br />
    <input type="range" id="hue" name="hue" min="0" max="255" v-model="hue" />
    <label for="hue">Hue</label>
    <br />
    <div class="square" :class="{}" style="height: 500px" :style="[squareStyles, oneMoreStyle]">
      <p :class="[hue > 50 ? activeClass : boldClass]">Это какой-то текст</p>
    </div>

    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  data() {
    return {
      activeClass: 'is-active',
      boldClass: 'is-bold',
      isActive: true,
      squareWidth: 50,
      hue: 58,
      oneMoreStyle: {
        border: '10px',
        borderRadius: '20px',
        height: '300px',
      },
    };
  },
  computed: {
    sizeTen() {
      return this.squareWidth * 10;
    },
    squareStyles() {
      return {
        width: `${this.sizeTen}px`,
        height: `${this.sizeTen}px`,
        backgroundColor: `hsl(${this.hue}, 100%, 50%)`,
      };
    },
  },
  components: {
    // HelloWorld,
  },
};
</script>

<style>
.is-bold {
  font-weight: bold;
}
.is-active {
  font-size: 2rem;
}
.square {
  width: 100px;
  height: 100px;
  padding: 1rem;
  background-color: hsl(80, 100, 50);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
