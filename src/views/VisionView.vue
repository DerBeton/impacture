<template>
  <FutureCanvas :votes="$route.params.id" class="canvas-element"></FutureCanvas>
</template>

<script setup lang="ts">
import FutureCanvas from '@/components/FutureCanvas.vue'
import router from '@/router'
</script>

<style lang="scss" scoped>
.canvas-element {
  width: 100%;
  height: 100%;
}
</style>
