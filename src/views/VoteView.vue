<template>
  <div class="vote-view">
    <h1 class="title">
      Abstimmungen
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="355"
        height="60"
        viewBox="0 0 355 60"
        class="arrow"
        fill="none"
      >
        <path
          d="M353.828 32.8284C355.391 31.2663 355.391 28.7337 353.828 27.1716L328.373 1.71573C326.81 0.153631 324.278 0.153631 322.716 1.71573C321.154 3.27783 321.154 5.81049 322.716 7.37258L345.343 30L322.716 52.6274C321.154 54.1895 321.154 56.7222 322.716 58.2843C324.278 59.8464 326.81 59.8464 328.373 58.2843L353.828 32.8284ZM0 34H351V26H0V34Z"
          fill="black"
        />
      </svg>
      <br />
      was stimmst du ab?
    </h1>

    <template v-for="(vote, index) in votes">
      <VoteCard
        v-if="index == activeCard"
        :key="vote.id"
        :question="vote.title"
        :description="vote.description"
        :answer="vote.answer"
        class="card"
        @voted="answer => handleVote(index, answer)"
      >
        <template #progress>
          <ProgressIndicator
            :key="1"
            :current="activeCard"
            :total="votes.length"
            @goto="index => gotoCard(index)"
          ></ProgressIndicator>
        </template>
      </VoteCard>
    </template>

    <div v-if="votingCompleted">Your answer is: {{ votingResult }}</div>

    <button class="restart -arrow-l" @click="router.push('/')">Neustart</button>
  </div>
</template>

<script setup lang="ts">
import VoteCard from '@/components/voting/VoteCard.vue'
import { computed, ref, watch } from 'vue'
import router from '@/router'
import ProgressIndicator from '@/components/voting/ProgressIndicator.vue'

const activeCard = ref<number>(0)

function handleVote(index: number, answer: 'yes' | 'no') {
  votes.value[index].answer = answer

  activeCard.value++
}

function gotoCard(index: number) {
  activeCard.value = index
}

const votingCompleted = computed(() => {
  return activeCard.value >= votes.value.length
})

// return 1 for answer yes and 0 for no and create string from it
const votingResult = computed(() => {
  let result = ''
  votes.value.forEach(vote => {
    result += vote.answer === 'yes' ? 1 : 0
  })
  return result
})

export interface Vote {
  id: string
  title: string
  description: string
  answer: 'yes' | 'no' | ''
}

const votes = ref<Vote[]>([
  {
    id: 'privacy',
    title: 'Möchten Sie dem Gesetz zu mehr Privatsphäre zustimmen?',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa officiis vel quae reprehenderit nesciunt commodi ea unde eos, aut natus amet tenetur voluptas ad. Exercitationem neque inventore at unde ipsum!',
    answer: '',
  },
  {
    id: 'nuclear',
    title: 'Sollen Atomkraftwerke weiterentwickelt werden?',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa officiis vel quae reprehenderit nesciunt commodi ea unde eos, aut natus amet tenetur voluptas ad. Exercitationem neque inventore at unde ipsum!',
    answer: '',
  },
  {
    id: 'biodiversity',
    title: 'Möchten Sie dem Gesetz zu mehr Biodiversität zustimmen?',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa officiis vel quae reprehenderit nesciunt commodi ea unde eos, aut natus amet tenetur voluptas ad. Exercitationem neque inventore at unde ipsum!',
    answer: '',
  },
  {
    id: 'agi',
    title: 'Möchten Sie dem Gesetz zu Künstlicher Intelligenz zustimmen?',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa officiis vel quae reprehenderit nesciunt commodi ea unde eos, aut natus amet tenetur voluptas ad. Exercitationem neque inventore at unde ipsum!',
    answer: '',
  },
])

// go to visualization with the result of the voting
watch(votingCompleted, () => {
  router.push(`/vision/${votingResult.value}`)
})
</script>

<style lang="scss" scoped>
.vote-view {
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  width: 100%;
  height: 100%;
  padding: 4.5rem 6rem;
  // background-color: var(--color-accent-main);
  background: radial-gradient(
    138.89% 60.45% at 50% 50%,
    #fff 15%,
    #d3e99f 100%
  );

  > .title {
    @include text-xl;

    margin-block: 0;
  }

  > .card {
    margin: auto auto;
  }

  > .restart {
    @include button-default;

    align-self: baseline;
  }
}
</style>
