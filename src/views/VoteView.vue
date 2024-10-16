<template>
  <div class="vote-view">
    <h1 class="title">
      Abstimmungen <span>---></span><br />
      was stimmst du ab?
    </h1>
    <VoteCard
      question="Sollen Atomkraftwerke weiterentwickelt werden?"
    ></VoteCard>
    <button class="restart"><--- Restart</button>
  </div>
</template>

<script setup lang="ts">
import VoteCard from '@/components/voting/VoteCard.vue'
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
