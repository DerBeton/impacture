<template>
  <div @click="toggleOpen()" class="tooltip-comp">
    <div v-if="isOpen" class="content">
      <h4 v-if="title" class="title">{{ title }}</h4>
      <p v-if="text" class="text">{{ text }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps({
  title: String,
  text: String,
})

const isOpen = ref<boolean>(false)

function toggleOpen() {
  isOpen.value = !isOpen.value
}
</script>

<style lang="scss">
.tooltip-comp {
  position: relative;
  z-index: 10;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 100%;
  background-color: var(--color-accent-main);
  box-shadow: 0px 0px 8px 3px rgba(255, 255, 255, 0.6);
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 12px 3px rgba(255, 255, 255, 1);
  }

  > .content {
    @include border-md;

    z-index: -1;
    position: absolute;
    width: 24rem;
    margin: 0 auto;
    padding: 1rem;
    border: 1px solid black;
    background-color: white;

    left: 50%;
    bottom: -0.5rem;
    transform: translate(-50%, 100%);

    > * {
      margin: 0;
    }
  }
}
</style>
