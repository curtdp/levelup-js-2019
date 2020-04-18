<template>
  <div id="app">
    <header class="mx-8 mt-4">
      <div>
        <h1 class="text-2xl bold">MovieDB 2020</h1>
      </div>
      <div id="nav">
        <router-link to="/">Home</router-link>|
        <router-link :to="{ name: 'About' }">About</router-link>
      </div>
    </header>
    <router-view />
  </div>
</template>

<style src="./assets/css/style.css"/>
