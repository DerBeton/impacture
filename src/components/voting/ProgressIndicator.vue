<template>
  <div class="progress-indicator">
    <div
      v-for="(dot, index) in total"
      class="dot"
      :class="{ '-active': current === index }"
      @click="emit('goto', index)"
    ></div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  current: number
  total: number
}>()

const emit = defineEmits<{
  goto: [value: number]
}>()
</script>

<style lang="scss" scoped>
.progress-indicator {
  display: flex;
  flex-direction: row;
  column-gap: 0.5rem;

  > .dot {
    width: 1.125rem;
    height: 1.125rem;
    border-radius: 100%;
    cursor: pointer;
    background-color: var(--color-grey-light);

    &.-active {
      background-color: var(--color-grey-dark);
    }
  }
}
</style>
