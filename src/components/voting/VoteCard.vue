<template>
  <div
    ref="voteCardElement"
    class="vote-card"
    :class="{ '-flipped': isFlipped }"
  >
    <div class="front-side" :style="cardStyleFront">
      <span @click="flipCard()" class="flip"></span>
      <div class="image"></div>
      <div class="vote">
        <h3 class="question">{{ question }}</h3>
        <div class="vote-buttons">
          <VoteButton
            :selected="answer"
            type="yes"
            @yes="emit('voted', 'yes')"
          ></VoteButton>
          <VoteButton
            :selected="answer"
            type="no"
            @no="emit('voted', 'no')"
          ></VoteButton>
        </div>
      </div>
      <div class="progress">
        <slot name="progress"></slot>
      </div>
    </div>
    <div class="back-side" :style="cardStyleBack">
      <span @click="flipCard()" class="flip"></span>
      <p class="description">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import VoteButton from './VoteButtons.vue'
import { useParallax } from '@vueuse/core'

defineProps<{
  question: string
  description: string
  answer: 'yes' | 'no' | ''
}>()

const voteCardElement = ref<HTMLElement | null>()
const { tilt, roll } = useParallax(voteCardElement)
const isFlipped = ref<boolean>(false)

const PARALLAX_INTENSITY = 5
const cardStyleFront = computed(() => ({
  transition: '.3s ease-out all',
  transform: `rotateX(${roll.value * PARALLAX_INTENSITY}deg) rotateY(${tilt.value * PARALLAX_INTENSITY + 180 * (isFlipped.value ? -1 : 0)}deg)`,
}))

const cardStyleBack = computed(() => ({
  transition: '.3s ease-out all',
  transform: `rotateX(${roll.value * PARALLAX_INTENSITY}deg) rotateY(${tilt.value * PARALLAX_INTENSITY + 180 * (isFlipped.value ? 0 : 1)}deg)`,
}))

function flipCard() {
  isFlipped.value = !isFlipped.value
}

const emit = defineEmits<{
  voted: [answer: 'yes' | 'no']
}>()
</script>

<style lang="scss" scoped>
.vote-card {
  position: relative;
  width: 60rem;
  max-width: 60rem;
  height: 28rem;
  margin: 0 auto;

  // for 3d flip effect
  perspective: 1000px;
  transform-style: preserve-3d;

  &.-flipped {
    .front-side {
      // transform: rotateY(-180deg);
    }

    .back-side {
      // transform: rotateY(0deg);
    }
  }
}

.front-side,
.back-side {
  @include border-md;

  background-color: var(--color-bg-light);
  position: absolute;
  inset: 0;
  padding: 3rem 4.5rem 4rem;
  font-size: 30px;
  transition: transform 0.6s;
  backface-visibility: hidden;

  -webkit-box-shadow: 10px 10px 3px 0px rgba(148, 148, 148, 0.64);
  -moz-box-shadow: 10px 10px 3px 0px rgba(148, 148, 148, 0.64);
  box-shadow: 10px 10px 3px 0px rgba(148, 148, 148, 0.64);
}

.front-side,
.back-side {
  > .flip {
    cursor: pointer;
    position: absolute;
    top: 1.4rem;
    right: 1.4rem;
    display: inline-flex;

    &::before {
      content: '';
      background-image: url('/icons/flip.svg');
      background-size: 30px 30px;
      background-position: center;
      height: 30px;
      width: 30px;
    }
  }

  > .image {
    @include border-md;

    aspect-ratio: 1;
    background-color: lightgray;
  }

  > .vote {
    height: fit-content;

    > .question {
      @include text-lg;

      width: 100%;
      text-align: center;
    }
  }
}

.front-side {
  display: grid;
  grid-template-columns: 1fr 2fr;
  column-gap: 1.5rem;
  align-items: center;

  > .progress {
    position: absolute;
    right: 2.25rem;
    bottom: 1.7rem;
  }
}

.back-side {
  transform: rotateY(180deg);
  display: flex;
  justify-content: center;
  align-items: center;

  > .description {
    @include text-md;
  }
}

.vote-buttons {
  width: 100%;
  justify-content: center;
  column-gap: 1.8rem;
  display: flex;
  flex-direction: row;
}
</style>
