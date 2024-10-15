<template>
  <div class="tooltip-comp">
    <p>{{ text }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: String,
  text: String,
})
</script>

<style lang="scss">
.tooltip-comp {
  > p {
    color: white;

    &:hover {
      color: blue;
    }
  }
}
</style>
