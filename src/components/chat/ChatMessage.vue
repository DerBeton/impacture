<template>
  <div class="chat-message" :class="{ '-own': type === 'own' }">
    <p class="text">{{ text }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  text: string
  type: 'other' | 'own'
}>()
</script>

<style lang="scss">
.chat-message {
  @include text-xs;
  @include border-md;

  padding: 0.88rem;
  width: fit-content;
  max-width: 95%;
  background-color: var(--color-accent-main);

  &.-own {
    background-color: var(--color-anti-flash-white);
    margin-left: auto;
  }

  > .text {
    margin: 0;
  }
}
</style>
