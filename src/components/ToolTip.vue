<template>
  <div class="tooltip-comp">
    <div @click="toggleOpen()" class="dot -clickable"></div>
    <div v-if="isOpen && hasContent" class="content">
      <h4 v-if="title" class="title">{{ title }}</h4>
      <p v-if="text" class="text">{{ text }}</p>
      <button
        v-if="actionText"
        @click="triggerAction()"
        class="button -arrow-r"
      >
        {{ actionText }}
      </button>
    </div>
    <slot class="slot"></slot>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const props = defineProps<{
  title?: string
  text?: string
  animate?: boolean
  actionText?: string
}>()

const isOpen = ref<boolean>(false)

const hasContent = computed(() => {
  return props.title || props.text
})

function toggleOpen() {
  isOpen.value = !isOpen.value
}

function triggerAction() {
  emit('action')
  toggleOpen()
}

const emit = defineEmits(['action'])
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

  &:hover {
    box-shadow: 0px 0px 12px 3px rgba(255, 255, 255, 1);
  }

  > .content {
    @include text-sm;
    @include border-md;

    z-index: 10;
    position: absolute;
    width: 24rem;
    padding: 1rem;
    border: 1px solid black;
    background-color: white;
    margin-top: 2.5rem;
    transform: translateY(50%);
    user-select: none;

    > * {
      margin: 0;
    }

    > .button {
      @include button-default;
      @include text-xs;

      margin-top: 0.75rem;
      float: right;
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
