<template>
  <div @click="emit('toggle')" class="chat-bubble">
    <img class="icon" src="/icons/message-bubble.svg" alt="Comment" />
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['toggle'])
</script>

<style lang="scss">
.chat-bubble {
  margin: 1.5rem;
  width: 3.75rem;
  height: 3.75rem;
  background-color: var(--color-main-bg);
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  > .icon {
    width: 2.125rem;
    height: 2.125rem;
  }
}
</style>
