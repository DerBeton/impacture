<template>
  <div class="date-status">
    <div class="container">
      <span class="date">{{ displayDate }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'

const props = withDefaults(
  defineProps<{
    date: Date
    fromDate?: Date
    isAnimated?: boolean
    animationDurationInMs?: number
  }>(),
  {
    isAnimated: false,
    animationDurationInMs: 5000,
  },
)

const startDate = ref(props.fromDate || new Date())
const currentDate = ref(startDate.value)
const duration = props.animationDurationInMs
let animationFrame: number | null = null

const displayDate = computed(() => {
  return currentDate.value.toLocaleDateString('de-CH', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
})

// https://easings.net/#easeInOutExpo
function easeInOutExpo(x: number): number {
  return x === 0
    ? 0
    : x === 1
      ? 1
      : x < 0.5
        ? Math.pow(2, 20 * x - 10) / 2
        : (2 - Math.pow(2, -20 * x + 10)) / 2
}

function animateDate() {
  const startTime = performance.now()
  const totalYears = props.date.getFullYear() - startDate.value.getFullYear()

  function update(currentTime: number) {
    const elapsedTime = currentTime - startTime
    const progress = Math.min(elapsedTime / duration, 1) // Progress from 0 to 1

    // Apply the easing function for smooth transition
    const easedProgress = easeInOutExpo(progress)

    // Calculate the new year based on eased progress
    const newYear =
      startDate.value.getFullYear() + Math.round(totalYears * easedProgress)

    // Update currentDate with the new year, preserving month and day
    currentDate.value = new Date(
      newYear,
      startDate.value.getMonth(),
      startDate.value.getDate(),
    )

    // Continue the animation if it's not finished
    if (progress < 1) {
      animationFrame = requestAnimationFrame(update)
    }
  }

  animationFrame = requestAnimationFrame(update)
}

onMounted(() => {
  if (props.isAnimated) animateDate()
})

onUnmounted(() => {
  if (animationFrame) cancelAnimationFrame(animationFrame)
})
</script>

<style lang="scss">
.date-status {
  @include font-default;

  font-size: 1.8rem;
  position: relative;
  width: 260px; // otherwise date animation jumps

  &::before,
  &::after {
    border-top-right-radius: var(--border-radius-md);

    content: '';
    position: absolute;

    background-color: transparent;
    height: var(--border-radius-md);
    width: var(--border-radius-md);

    box-shadow: calc(var(--border-radius-md) / 2)
      calc(var(--border-radius-md) / 2 * -1) 0 calc(var(--border-radius-md) / 2)
      white; // the shadow creates inversed border: https://www.youtube.com/watch?v=SkML640BcoA
  }

  &::before {
    bottom: 0;
    right: 0;
    transform: translateY(100%);
  }

  &::after {
    top: 0;
    left: 0;
    transform: translateX(-100%);
  }

  > .container {
    border-bottom-left-radius: var(--border-radius-md);
    display: flex;
    column-gap: 1rem;
    padding: 2rem;
    justify-content: space-between;
    color: var(--color-text-main);
    background-color: var(--color-main-bg);
  }
}
</style>
