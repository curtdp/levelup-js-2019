<template>
  <div id="app" class="max-w-lg mx-auto">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/custom-transition-classes"
        >Custom transition classes</router-link
      >
      |
      <router-link to="/list-transitions">List transitions</router-link>
    </div>
    <transition mode="out-in">
      <router-view />
    </transition>
  </div>
</template>
<style src="./assets/styles/style.css"></style>
