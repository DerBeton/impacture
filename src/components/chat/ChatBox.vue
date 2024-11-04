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
        v-for="comment in myComments"
        type="own"
        :text="comment.message"
      ></ChatMessage>
    </div>
    <div v-if="activeTabIndex === 1" class="discover">
      <ChatMessage
        v-for="comment in comments"
        :text="comment.message"
        :type="getType(comment.author_identifier)"
      ></ChatMessage>
    </div>
    <div v-if="activeTabIndex === 0" class="input">
      <ChatInput
        @send="() => sendComment(chatText)"
        v-model:chatText="chatText"
      ></ChatInput>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import ChatInput from './ChatInput.vue'
import ChatMessage from './ChatMessage.vue'
import SingleTab from './SingleTab.vue'
import { supabase } from '@/lib/supabaseClient'
import type { Database } from '@/types/database.types'
import getOrCreateUUID from '@/lib/identifier'

const props = defineProps<{
  visionString: string
}>()

const chatText = ref<string>('')
const myComments = ref<Database['public']['Tables']['comments']['Row'][]>([])
const userId = ref<string>(getOrCreateUUID())

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

/**
 * Remote comments
 */
const comments = ref<Database['public']['Tables']['comments']['Row'][]>([])

async function getComments() {
  const { data, error } = await supabase
    .from('comments')
    .select()
    .eq('is_hidden', false)
    .eq('vision_id', props.visionString)
    .order('created_at', { ascending: true })
  if (error) {
    console.warn('Error while fetching comments', error)
  } else {
    comments.value = data || []
  }
}

async function sendComment(message: string) {
  const { data, error } = await supabase
    .from('comments')
    .insert({
      message: message,
      author_identifier: userId.value,
      vision_id: props.visionString,
    })
    .eq('id', 1)
    .select()
  if (error) {
    console.warn('There was a problem while sending the comment', error)
  } else {
    myComments.value.push(data[0])
    comments.value.push(data[0])
    chatText.value = ''
  }
}

function getType(identifier: string | null) {
  return identifier == userId.value ? 'own' : 'other'
}

onMounted(() => {
  getComments()
})
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
