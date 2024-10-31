<template>
  <div class="future-view">
    <DateStatus
      :date="new Date(2222, 10, 5)"
      :is-animated="true"
      class="status"
    ></DateStatus>
    <FutureCanvas :votes="$route.params.id" class="canvas"></FutureCanvas>
  </div>
</template>

<script setup lang="ts">
import FutureCanvas from '@/components/FutureCanvas.vue'
import DateStatus from '@/components/home/DateStatus.vue'
</script>

<style lang="scss" scoped>
.future-view {
  position: relative;
  padding: 1.75rem;

  > .status {
    margin: 1.75rem;
    position: absolute;
    top: 0;
    right: 0;
  }

  > .canvas {
    width: 100%;
    height: 100%;
  }
}
</style>
