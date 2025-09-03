<template>
  <div class="future-canvas">
    <canvas ref="canvasElement" class="canvas"></canvas>
  </div>
</template>

<script setup lang="ts">
import Experience from '@/experience/Experience'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter();

const props = defineProps<{
  visionString: string
}>()

const canvasElement = ref<HTMLCanvasElement | null>()

onMounted(() => {
  if (canvasElement.value) {
    const experience = new Experience(canvasElement.value)

    if(!experience.setFuture(props.visionString)) {
      router.replace('/vote');
    }
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
