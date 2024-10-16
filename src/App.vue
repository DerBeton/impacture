<template>
  <div class="app">
    <RouterView></RouterView>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HomeView from './views/HomeView.vue'
</script>

<style lang="scss">
.app {
  width: 100%;
  height: 100vh;
}

body {
  background-color: var(--color-main-bg);
}
</style>
