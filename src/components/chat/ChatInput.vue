<template>
  <div class="chat-input">
    <textarea
      v-model="chatText"
      class="input"
      rows="1"
      placeholder="Teile deine Stimme mit der Community..."
    ></textarea>
    <img class="send" src="/icons/send.svg" alt="Send icon" />
  </div>
</template>

<script setup lang="ts">
const chatText = defineModel('chatText', { type: String })
</script>

<style lang="scss">
.chat-input {
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;

  > .input {
    @include text-xs;
    @include border-md;

    position: relative;
    border: 2px solid var(--color-text-main);
    width: 100%;
    margin: 0;
    padding: 0.88rem 2rem 0.88rem 0.88rem; // because of send icon
    box-shadow: none;
    resize: none;
    overflow: hidden;

    &:focus {
      outline: none;
      border-color: var(--color-blue-main);
    }
  }

  > .send {
    position: absolute;
    right: 0.88rem;
    height: 1.5rem;
    width: 1.5rem;
    cursor: pointer;
  }
}
</style>
