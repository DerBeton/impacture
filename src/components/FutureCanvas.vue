<template>
  <div class="future-canvas">
    <canvas ref="canvasElement" class="canvas"></canvas>
  </div>
</template>

<script setup lang="ts">
import Experience from '@/experience/Experience'
import { onMounted, ref } from 'vue'

const canvasElement = ref<HTMLCanvasElement | null>()

onMounted(() => {
  if (canvasElement.value) {
    const experience = new Experience(canvasElement.value)
  }
})
</script>

<style lang="scss">
.future-canvas {
  width: 100%;
  height: 100%;

  > .canvas {
    width: 100%;
    height: 100%;
  }
}
</style>
