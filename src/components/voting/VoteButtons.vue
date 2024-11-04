<template>
  <button
    class="vote-button"
    v-if="type === 'yes'"
    @click="setAnswer('yes')"
    :class="{ '-active': selected === 'yes' }"
  >
    Ja
  </button>
  <button
    class="vote-button"
    v-else-if="type === 'no'"
    @click="setAnswer('no')"
    :class="{ '-active': selected === 'no' }"
  >
    Nein
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  type: 'yes' | 'no'
  selected: 'yes' | 'no' | ''
  disabled?: boolean
}>()

function setAnswer(answer: 'yes' | 'no') {
  if (!props.disabled) {
    emit(answer)
  }
}

const emit = defineEmits(['yes', 'no'])
</script>

<style lang="scss" scoped>
.vote-button {
  @include button-default;

  width: 9.4rem;

  &.-active {
    font-weight: bold;
    outline: 2px solid black;
  }
}
</style>
