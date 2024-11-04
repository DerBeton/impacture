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
        :imageSrc="vote.imgSrc"
        :imgAlt="vote.imgAlt"
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
  imgSrc?: string
  imgAlt?: string
  answer: 'yes' | 'no' | ''
}

const votes = ref<Vote[]>([
  {
    id: 'privacy',
    title: 'Möchten Sie dem Gesetz zu mehr Privatsphäre zustimmen?',
    description:
      'Laut den Initiant*innen soll mit der Initiative der Schutz insbesondere der Privatsphäre in der Verfassung verankert werden. Die Privatsphäre ist laut den Initiant*innen ein wichtiger Bestandteil des Vertrauensverhältnisses zwischen Staat und Bürger*innen. Wegen der jüngsten politischen und gesetzgeberischen Entwicklungen müsse dieses in der Bundesverfassung enthaltene Grundrecht präzisiert und ergänzt werden.',
    imgSrc: '/images/votes/privacy.jpg',
    imgAlt: 'Image showing a phone with lock to symbolize privacy',
    answer: '',
  },
  {
    id: 'nuclear',
    title: 'Soll die Atomkraft in der Schweiz weiter eingesetzt werden?',
    description:
      'Die Initiative will den Bau neuer Kernkraftwerke in der Schweiz verbieten und die Laufzeit der bestehenden Kernkraftwerke begrenzen. Der Bund soll zudem dafür sorgen, dass weniger Energie verbraucht, die Energieeffizienz erhöht und erneuerbare Energien gefördert werden.',
    imgSrc: '/images/votes/nuclear.jpg',
    imgAlt: 'Image showing a nuclear power plant',
    answer: '',
  },
  {
    id: 'biodiversity',
    title: 'Möchten Sie dem Gesetz zu mehr Biodiversität zustimmen?',
    description:
      'Die Initiatve will die Natur, die Landschaft und das baukulturelle Erbe zusätzlich schützen. Sie verlangt für die Biodiversität mehr Geld und mehr Schutzflächen. Insbesondere die Kantone sollen stärker in die Pflicht genommen werden, damit sie Landschaften und Ortsbilder bewahren. Zudem sollen die prägenden Elemente schützenswerter Biotope, Landschaften und Ortsbilder ungeschmälert erhalten werden. Schliesslich will die Initiative Natur, Landschaft und baukulturelles Erbe auch ausserhalb der Schutzgebiete schonen.',
    imgSrc: '/images/votes/nature.jpg',
    imgAlt: 'Image showing flowers and bees',
    answer: '',
  },
  {
    id: 'agi',
    title:
      'Soll die Forschung von Artifical General Intelligence (AGI) gefördert werden?',
    description:
      'Es steckt viel Hoffnung in der Erforschung von Artificial General Intelligence. Damit könnten weltweit Probleme gelöst werden, die wir aktuell nicht in den Griff bekommen. Deshalb soll sich unsere Forschung auf diesen Bereich fokussieren. Dadurch können dann auch andere Probleme gelöst werden. Es könnten aber auch Gefahren entstehen, wenn wir die Kontrolle über die neuen Systeme verlieren.',
    imgSrc: '/images/votes/agi.jpg',
    imgAlt: 'Image of a roboter',
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
    @include text-light;

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
