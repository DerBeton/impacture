<template>
  <button
    class="vote-button"
    @click="handleClick()"
    :class="{'-disabled': disabled}"
  >
    {{ props.text }}
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  text: string
  disabled?: boolean
}>()

function handleClick() {
  if (!props.disabled) {
    emit('pressed')
  }
}

const emit = defineEmits(['pressed'])
</script>

<style lang="scss" scoped>
.vote-button {
  @include button-default;

  width: 9.4rem;

  &.-active {
    font-weight: bold;
    outline: 2px solid black;
  }

  &.-disabled {
    cursor: default;
    background-color: var(--color-anti-flash-red);
  }

}
</style>
