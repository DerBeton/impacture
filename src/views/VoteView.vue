<template>
  <div class="vote-view">
    <h1 class="title">
      Abstimmungen <span>---></span><br />
      was stimmst du ab?
    </h1>

    <template v-for="(vote, index) in votes">
      <VoteCard
        v-if="index == activeCard"
        :key="vote.id"
        :question="vote.title"
        :description="vote.description"
        @voted="answer => handleVote(index, answer)"
      />
    </template>

    <div v-if="votingCompleted">Your answer is: {{ votingResult }}</div>

    <button class="restart" @click="router.push('/')"><--- Restart</button>
  </div>
</template>

<script setup lang="ts">
import VoteCard from '@/components/voting/VoteCard.vue'
import { computed, ref, watch } from 'vue'
import router from '@/router'

const activeCard = ref<number>(0)

function handleVote(index: number, answer: string) {
  votes.value[index].answer = answer

  activeCard.value++
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
  answer: string
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
  width: 100%;
  height: 100%;
  padding: 4.5rem 6rem;
  background-color: var(--color-accent-main);

  > .title {
    @include text-xl;
  }

  > .restart {
    @include button-default;

    align-self: baseline;
    margin-top: auto;
  }
}
</style>
