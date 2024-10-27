<template>
  <div class="tooltip-comp">
    <div @click="console.log('h')" class="dot"></div>
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
</script>

<style lang="scss">
.tooltip-comp {
  > .dot {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 100%;
    background-color: var(--color-accent-main);
    box-shadow: 0px 0px 8px 3px rgba(255, 255, 255, 0.6);
    cursor: pointer;
  }

  > p {
    color: white;

    &:hover {
      color: blue;
    }
  }
}
</style>
