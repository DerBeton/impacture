<template>
  <div class="home-view">
    <button @click="router.push('/vote')" class="button">
      Jetzt Abstimmen!
    </button>
  </div>
</template>

<script setup lang="ts">
import router from '@/router'
</script>

<style lang="scss" scoped>
.home-view {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  > .button {
    @include button-default;
  }
}
</style>
