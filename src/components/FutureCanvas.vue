<template>
  <div class="future-canvas">
    <canvas ref="canvasElement" class="canvas"></canvas>
  </div>
</template>

<script setup lang="ts">
import Experience from '@/experience/Experience'
import { computed, onMounted, ref } from 'vue'

const props = defineProps<{
  votes: string | string[]
}>()

const voteString = computed(() => {
  return Array.isArray(props.votes) ? props.votes[0] : props.votes
})

const canvasElement = ref<HTMLCanvasElement | null>()

onMounted(() => {
  if (canvasElement.value) {
    const experience = new Experience(canvasElement.value)
    experience.setFuture(voteString.value)
  }
})
</script>

<style lang="scss">
.future-canvas {
  width: 100%;
  height: 100%;

  > .canvas {
    @include border-md;

    width: 100%;
    height: 100%;
  }
}
</style>
