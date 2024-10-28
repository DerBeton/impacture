<template>
  <div class="weather-status">
    <div class="container">
      <span class="temperature">12°</span>
      <span class="year"></span>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss">
.weather-status {
  @include font-default;

  font-size: 1.8rem;
  position: relative;

  &::before,
  &::after {
    border-top-right-radius: var(--border-radius-md);

    content: '';
    position: absolute;

    background-color: transparent;
    height: var(--border-radius-md);
    width: var(--border-radius-md);

    box-shadow: calc(var(--border-radius-md) / 2)
      calc(var(--border-radius-md) / 2 * -1) 0 calc(var(--border-radius-md) / 2)
      white; // the shadow creates inversed border: https://www.youtube.com/watch?v=SkML640BcoA
  }

  &::before {
    bottom: 0;
    right: 0;
    transform: translateY(100%);
  }

  &::after {
    top: 0;
    left: 0;
    transform: translateX(-100%);
  }

  > .container {
    border-bottom-left-radius: var(--border-radius-md);
    display: flex;
    column-gap: 1rem;
    padding: 2rem;
    justify-content: space-between;
    color: var(--color-text-main);
    background-color: var(--color-main-bg);

    > .year {
      width: 40px;
      position: relative;
      display: flex;
      align-items: center;

      &::before {
        content: '';
        position: absolute;
        background-image: url('/icons/sun-medium.svg');
        background-size: 40px 40px;
        background-position: center;
        height: 40px;
        width: 40px;
      }
    }
  }
}
</style>
