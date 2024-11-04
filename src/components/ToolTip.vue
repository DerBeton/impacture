<template>
  <div ref="toolTipCompElement" class="tooltip-comp">
    <div @click="toggleOpen()" class="dot -clickable"></div>
    <div v-if="isOpen && hasContent" class="content">
      <h4 class="title">{{ title ?? '&nbsp;' }}</h4>
      <p v-if="text" class="text">{{ text }}</p>
      <img
        @click="toggleOpen()"
        src="/icons/close.svg"
        alt="Close icon"
        class="close -clickable"
      />
      <button
        v-if="actionText"
        @click="triggerAction()"
        class="button -arrow-r -clickable"
      >
        {{ actionText }}
      </button>
    </div>
    <slot class="slot"></slot>
  </div>
</template>

<script setup lang="ts">
import type EventEmitter from '@/experience/utils/EventEmitter'
import { computed, onMounted, onUnmounted, ref, watchEffect } from 'vue'

const props = defineProps<{
  title?: string
  text?: string
  animate?: boolean
  actionText?: string
  eventEmitter?: EventEmitter
}>()

const isOpen = ref<boolean>(false)
const toolTipCompElement = ref<HTMLElement | null>(null)

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

// close all tooltips except clicked one
function handleCloseAllTooltips(clickedToolTip: HTMLElement) {
  if (clickedToolTip !== toolTipCompElement.value) {
    isOpen.value = false
  }
}

onMounted(() => {
  props.eventEmitter?.on('closeAllTooltips', (clickedToolTip: HTMLElement) =>
    handleCloseAllTooltips(clickedToolTip),
  )
})

onUnmounted(() => {
  props.eventEmitter?.off('closeAllTooltips')
})

watchEffect(() => {
  if (isOpen.value) {
    toolTipCompElement.value?.parentElement?.classList.add('_level-front')
  } else {
    toolTipCompElement.value?.parentElement?.classList.remove('_level-front')
  }
})

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

    > .title {
      @include text-semibold;

      margin-bottom: 0.5rem;
    }

    position: absolute;
    width: 30rem;
    padding: 1rem;
    border: 1px solid black;
    background-color: white;
    margin-top: 2.5rem;
    transform: translateY(50%);
    user-select: none;

    &::before {
      z-index: -1;
      background-image: url('/icons/chat-tip.svg');
      background-size: 40px 10px;
      background-position: top;
      height: 10px;
      width: 40px;
      left: 50%;
      top: -9.5px;
      transform: translateX(-50%);
      content: '';
      position: absolute;
    }

    > * {
      margin: 0;
    }

    > .close {
      position: absolute;
      top: 0.5rem;
      right: 0.5rem;
      width: 2.25rem;
      height: 2.25rem;
      cursor: pointer;
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
