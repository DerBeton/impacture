<template>
  <div class="future-view">
    <DateStatus
      :date="new Date(2222, 10, 5)"
      :is-animated="true"
      class="status"
    ></DateStatus>
    <FutureCanvas :votes="$route.params.id" class="canvas"></FutureCanvas>
    <ChatBubble @toggle="toggleChat()" class="bubble"></ChatBubble>
    <ChatBox @toggle="toggleChat()" v-if="isChatOpen" class="box"></ChatBox>
  </div>
</template>

<script setup lang="ts">
import FutureCanvas from '@/components/vision/FutureCanvas.vue'
import DateStatus from '@/components/home/DateStatus.vue'
import ChatBubble from '@/components/chat/ChatBubble.vue'
import ChatBox from '@/components/chat/ChatBox.vue'
import { ref } from 'vue'

const isChatOpen = ref<boolean>(false)

function toggleChat() {
  isChatOpen.value = !isChatOpen.value
}
</script>

<style lang="scss" scoped>
.future-view {
  position: relative;
  padding: 1.75rem;

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
