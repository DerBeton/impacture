<template>
  <div class="home-view">
    <div class="container">
      <WeatherStatus class="status"></WeatherStatus>

      <div class="header-wrapper">
        <h3 class="slogan">Make an impact on the future</h3>
        <h1 class="title">Impacture</h1>
      </div>

      <img src="/images/iso-house-demo.png" class="house"></img>

      <div class="content-wrapper">
        <p class="intro">
          Hey Du. Die neusten Abstimmungen sind gerade eingetroffen. Nimm dir doch kurz Zeit, dich über die Themen zu informieren und gib deine Stimme ab. Jede Stimme zählt!
          <br><br>
          Klicke auf <b>Jetzt Abstimmen</b> um deinen Impact zu starten!
        </p>
        <button @click="router.push('/vote')" class="button -arrow-r">
        Jetzt Abstimmen
      </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import WeatherStatus from '@/components/home/WeatherStatus.vue'
import router from '@/router'
</script>

<style lang="scss" scoped>
.home-view {
  padding: 1.75rem;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  > .container {
    @include border-md;

    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    width: 100%;
    height: 100%;
    // background-color: var(--color-accent-main);
    background: linear-gradient(129deg, #F8FFE8 25.5%, #DCF2A9 63.66%), linear-gradient(112deg, #E2F3FF 23.65%, #9CD4FF 86.89%);

    /* background: linear-gradient(129deg, #dcf2a9 25.5%, #f8ffe8 63.66%),
      linear-gradient(112deg, #e2f3ff 23.65%, #9cd4ff 86.89%); */

    > .status {
      position: absolute;
      top: 0;
      right: 0;
    }

    > .house {
      position: absolute;
      height: 65vh;
      bottom: 50px;
    }
  }
}

.header-wrapper {
  width: max-content;
  text-align: center;
  margin-top: 3rem;

  > .slogan {
    font-size: 2.5rem;
    font-weight: 700;
    margin: 0;
  }

  > .title {
    @include text-xxl;

    text-transform: uppercase;
    margin-top: 0.8rem;
    margin-bottom: 0;
  }
}

.content-wrapper {
  display: flex;
  justify-content: space-between;
  margin-inline: 4.5rem;
  // margin-top: 3rem;
  margin-bottom: 6rem;
  height: 100%;

  > .intro {
    max-width: 28%;
    align-self: center
  }

  > .button {
    @include button-default;

    align-self: baseline;
    margin-top: auto;
  }

}
</style>
