<template>
  <button class="vote-button" v-if="type === 'yes'" @click="$emit('yes')">
    Ja
  </button>
  <button class="vote-button" v-else-if="type === 'no'" @click="$emit('no')">
    Nein
  </button>
</template>

<script setup lang="ts">
defineProps<{
  type: 'yes' | 'no'
}>()

const emit = defineEmits(['yes', 'no'])
</script>

<style lang="scss" scoped>
.vote-button {
  @include button-default;

  width: 9.4rem;
}
</style>
