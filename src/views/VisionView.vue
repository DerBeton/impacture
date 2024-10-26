<template>
  <FutureCanvas :votes="$route.params.id" class="canvas-element"></FutureCanvas>
</template>

<script setup lang="ts">
import FutureCanvas from '@/components/FutureCanvas.vue'
</script>

<style lang="scss" scoped>
.canvas-element {
  width: 100%;
  height: 100%;
}
</style>
