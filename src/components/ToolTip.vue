<template>
  <div class="tooltip-comp">
    <div @click="toggleOpen()" class="dot"></div>
    <div v-if="isOpen" class="content">
      <h4 v-if="title" class="title">{{ title }}</h4>
      <p v-if="text" class="text">{{ text }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  title?: string
  text?: string
  animate?: boolean
}>()

const isOpen = ref<boolean>(false)

function toggleOpen() {
  isOpen.value = !isOpen.value
}
</script>

<style lang="scss">
.tooltip-comp {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  > .dot {
    position: absolute;
    z-index: 10;
    width: 1.3rem;
    height: 1.3rem;
    border-radius: 100%;
    background-color: var(--color-accent-main);
    box-shadow: 0px 0px 8px 3px rgba(255, 255, 255, 0.6);
    cursor: pointer;
    animation: pulse 1s ease-in-out infinite alternate;
  }

  > .content {
    @include border-md;

    position: absolute;
    width: 24rem;
    padding: 1rem;
    border: 1px solid black;
    background-color: white;
    margin-top: 2.5rem;
    transform: translateY(50%);

    > * {
      margin: 0;
    }
  }
}

@keyframes pulse {
  from {
    scale: 1;
  }
  to {
    scale: 1.2;
  }
}
</style>
