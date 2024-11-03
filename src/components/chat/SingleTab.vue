<template>
  <div
    @click="changeActiveTab"
    class="single-tab"
    :class="{ '-active': active }"
  >
    <div class="icon" :style="{ '--icon-url': `url(${iconSrc})` }"></div>
    <span class="label">{{ label }}</span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  iconSrc: string
  label: string
  index: number
  active: boolean
}>()

const activeTabIndex = defineModel('activeTabIndex')

function changeActiveTab() {
  activeTabIndex.value = props.index
}
</script>

<style lang="scss">
.single-tab {
  display: flex;
  align-items: center;
  padding-bottom: 0.8rem;
  padding-inline: 0.3rem;
  margin-bottom: -1.5px;
  cursor: pointer;

  &:not(.-active) {
    opacity: 0.7;
  }

  &.-active {
    border-bottom: 2px solid var(--color-blue-main);

    > .icon {
      background-color: var(--color-blue-main);
    }
  }

  > .icon {
    width: 1.125rem;
    height: 1.125rem;
    margin-right: 0.4rem;
    mask-image: var(--icon-url);
    mask-size: contain;
    mask-repeat: no-repeat;
    background-color: var(--color-text-main);
  }

  > .label {
    @include text-xs;
  }
}
</style>
