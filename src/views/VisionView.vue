<template>
  <div class="future-view">
    <DateStatus
      :date="new Date(2222, 10, 5)"
      :is-animated="true"
      class="status"
    ></DateStatus>
    <FutureCanvas :vision-string="visionRoute" class="canvas"></FutureCanvas>
    <ChatBubble @toggle="toggleChat()" class="bubble"></ChatBubble>
    <ChatMessage
      v-if="comment[0]?.message"
      class="comment"
      :class="{ '-visible': isCommentVisible }"
      type="own"
      :text="cutTextLenght(comment[0].message, 40)"
    ></ChatMessage>
    <ChatBox
      @toggle="toggleChat()"
      v-if="isChatOpen"
      :vision-string="visionRoute"
      class="box"
    ></ChatBox>
  </div>
</template>

<script setup lang="ts">
import FutureCanvas from '@/components/vision/FutureCanvas.vue'
import DateStatus from '@/components/home/DateStatus.vue'
import ChatBubble from '@/components/chat/ChatBubble.vue'
import ChatBox from '@/components/chat/ChatBox.vue'
import { onMounted, ref } from 'vue'
import ChatMessage from '@/components/chat/ChatMessage.vue'
import { supabase } from '@/lib/supabaseClient'
import type { Database } from '@/types/database.types'

const props = defineProps<{
  id: string
}>()

const isChatOpen = ref<boolean>(false)
const visionRoute = ref<string>(props.id)

const isCommentVisible = ref<boolean>(false)

function toggleChat() {
  if (isCommentVisible.value) {
    isCommentVisible.value = false
  }
  isChatOpen.value = !isChatOpen.value
}

function cutTextLenght(text: string, length: number) {
  return text.length <= length ? text : text.substring(0, length) + '...'
}

const comment = ref<Database['public']['Tables']['comments']['Row'][]>([])
async function getLastComment() {
  const { data, error } = await supabase
    .from('comments')
    .select()
    .eq('is_hidden', false)
    .eq('vision_id', visionRoute.value)
    .order('created_at', { ascending: false })
    .limit(1)
  if (error) {
    console.warn('Error while fetching comments', error)
  } else {
    comment.value = data || []
  }
}

// make comment visible after amount of miliseconds
function enableCommentAfter(timeMs: number) {
  setTimeout(() => {
    isCommentVisible.value = true
  }, timeMs)
}

onMounted(() => {
  getLastComment()
  enableCommentAfter(10000)
})
</script>

<style lang="scss" scoped>
.future-view {
  position: relative;
  padding: 1.75rem;
  height: 100%;
  width: 100%;

  > .status {
    margin: 1.75rem;
    position: absolute;
    top: 0;
    right: 0;
  }

  > .canvas {
    width: 100%;
    height: 100%;
  }

  > .comment {
    position: absolute;
    right: 7.5rem;
    bottom: calc(1.75rem + 1.5rem);
    z-index: 100;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.6s ease-in-out;

    &.-visible {
      opacity: 1;
    }
  }

  > .bubble {
    position: absolute;
    right: 1.75rem;
    bottom: 1.75rem;
    z-index: 100;
    cursor: pointer;
  }

  > .box {
    position: absolute;
    right: 1.75rem;
    bottom: 1.75rem;
    z-index: 110;
  }
}
</style>
