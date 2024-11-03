<template>
  <div class="chat-box">
    <div class="header">
      <h3 class="title">Zukunfts-Stimmen</h3>
      <img
        @click="emit('toggle')"
        class="close"
        src="/icons/close.svg"
        alt="Close icon"
      />
    </div>
    <div class="tab-bar">
      <SingleTab
        v-for="(tab, index) in tabs"
        class="tab"
        :icon-src="tab.iconSrc"
        :label="tab.label"
        :index="index"
        :active="activeTabIndex === index"
        v-model:activeTabIndex="activeTabIndex"
      ></SingleTab>
    </div>
    <div v-if="activeTabIndex === 0" class="messages">
      <ChatMessage
        type="other"
        text="Was hälst du von dieser Zukunft?"
      ></ChatMessage>
      <ChatMessage
        type="other"
        text="Würdest du hier leben wollen?"
      ></ChatMessage>
      <ChatMessage
        type="own"
        text="Ich könnte mir schon vorstellen hier zu leben. Die Umgebung sieht sehr ruhig aus und es gibt genügend Umschwung ums Haus."
      ></ChatMessage>
      <ChatMessage type="own" text="Ja."></ChatMessage>
      <ChatMessage
        v-if="chatText.length > 0"
        type="own"
        :text="chatText"
      ></ChatMessage>
    </div>
    <div v-if="activeTabIndex === 1" class="discover">
      <ChatMessage
        type="other"
        text="Mir gefällt in dieser Zukunft die Idee der Patchwork-Elemente, welche die wiederverwendung von Ressourcen aufzeigt."
      ></ChatMessage>
      <ChatMessage
        type="other"
        text="Mir gefällt in dieser Zukunft die Idee der Patchwork-Elemente, welche die wiederverwendung von Ressourcen aufzeigt."
      ></ChatMessage>
      <ChatMessage
        type="other"
        text="Mir gefällt in dieser Zukunft die Idee der Patchwork-Elemente, welche die wiederverwendung von Ressourcen aufzeigt."
      ></ChatMessage>
      <ChatMessage
        type="other"
        text="Mir gefällt in dieser Zukunft die Idee der Patchwork-Elemente, welche die wiederverwendung von Ressourcen aufzeigt."
      ></ChatMessage>
      <ChatMessage
        type="other"
        text="Mir gefällt in dieser Zukunft die Idee der Patchwork-Elemente, welche die wiederverwendung von Ressourcen aufzeigt."
      ></ChatMessage>
      <ChatMessage
        type="other"
        text="Mir gefällt in dieser Zukunft die Idee der Patchwork-Elemente, welche die wiederverwendung von Ressourcen aufzeigt."
      ></ChatMessage>
      <ChatMessage
        type="other"
        text="Mir gefällt in dieser Zukunft die Idee der Patchwork-Elemente, welche die wiederverwendung von Ressourcen aufzeigt."
      ></ChatMessage>
    </div>
    <div v-if="activeTabIndex === 0" class="input">
      <ChatInput v-model:chatText="chatText"></ChatInput>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ChatInput from './ChatInput.vue'
import ChatMessage from './ChatMessage.vue'
import SingleTab from './SingleTab.vue'

const chatText = ref<string>('')

/**
 * Tabbar with Tabs
 */
const activeTabIndex = ref<number>(0)
const tabs = [
  {
    iconSrc: '/icons/pencil.svg',
    label: 'Stimme abgeben',
  },
  {
    iconSrc: '/icons/eye.svg',
    label: 'Stimmen entdecken',
  },
]

const emit = defineEmits(['toggle'])
</script>

<style lang="scss">
.chat-box {
  @include border-md;

  // padding: 1.25rem;
  display: flex;
  flex-direction: column;
  width: 26rem;
  height: 43rem;
  margin: 1.5rem;
  background-color: var(--color-bg-light);

  > .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.25rem;
    margin-bottom: 0.4rem;

    > .title {
      @include text-md;
      @include text-semibold;

      margin: 0;
    }

    > .close {
      width: 2.25rem;
      height: 2.25rem;
      cursor: pointer;
    }
  }

  > .messages,
  .discover {
    display: flex;
    flex-direction: column;
    row-gap: 0.6rem;
    padding: 1.25rem;
    margin-bottom: 1.25rem;
    overflow-y: scroll;

    // hide scrollbar
    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }

  > .input {
    padding: 1.25rem;
    margin-top: auto;
  }
}

.tab-bar {
  display: flex;
  column-gap: 1.5rem;
  border-bottom: 1px solid rgba($color: #000000, $alpha: 0.5);

  > .tab:first-of-type {
    margin-left: 1.25rem;
  }

  > .tab:last-of-type {
    margin-right: 1.25rem;
  }
}
</style>
