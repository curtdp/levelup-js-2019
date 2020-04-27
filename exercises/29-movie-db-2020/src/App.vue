<template>
  <div id="app">
    <header class="flex items-center justify-between mx-8 mt-4 mb-4">
      <div>
        <div>
          <h1 class="text-2xl bold">MovieDB 2020</h1>
        </div>
        <div id="nav">
          <router-link to="/">Home</router-link>|
          <router-link :to="{ name: 'About' }">About</router-link>
        </div>
      </div>
      <div>
        <SearchBar />
      </div>
    </header>
    <router-view />
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue';
export default {
  name: 'App',
  components: {
    SearchBar,
  },
};
</script>
<style src="./assets/css/style.css" />
