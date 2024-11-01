<template>
  <div class="home-view">
    <div class="container">
      <DateStatus :date="new Date()" class="status"></DateStatus>

      <div class="header-wrapper">
        <h3 class="slogan">Make an impact for future generations</h3>
        <h1 class="title">Impacture</h1>
      </div>

      <div class="house-container">
        <ToolTip @action="isIntroStarted = true" class="tip" text="Hey, Glückwunsch! Du bist erwachsen, zahlst Miete und wohnst jetzt in diesem Haus! Doch hast du dich jemals gefragt, wie deine brillianten Entscheidungen zukünftige Generationen beeinflussen können?" action-text="Eigentlich nicht"></ToolTip>
        <img src="/images/iso-house-demo.png" class="image"></img>
      </div>

      <div class="content-wrapper" :class="{ '-started': isIntroStarted }">
        <p class="intro">
          Du wurdest auserwählt. Triff Entscheidungen anhand vier Abstimmungen. Aber Achtung! Überlege gut was du wählst. Schliesslich setzt du damit den Grundstein für die nächsten Generationen.
          <br><br>
          Starte die Simulation, um deinen Impact auf die Zukunft zu sehen.
        </p>
        <button @click="router.push('/vote')" class="button -arrow-r">
        Jetzt Starten
      </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import DateStatus from '@/components/home/DateStatus.vue';
import ToolTip from '@/components/ToolTip.vue';
import router from '@/router'
import { ref } from 'vue';

const isIntroStarted = ref<boolean>(false)

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
    @include default-ui;

    display: flex;
    flex-direction: column;
    align-items: center;

    > .status {
      position: absolute;
      top: 0;
      right: 0;
    }

    > .house-container {
      position: absolute;
      height: 65vh;
      bottom: 50px;

      > .tip {
        position: absolute;
        left: 62%;
        top: 125px;
      }

      > .image {
        height: 100%;
      }

    }
  }
}

.header-wrapper {
  width: max-content;
  text-align: center;
  margin-top: 3rem;

  > .slogan {
    @include text-medium;

    font-size: 2.5rem;
    margin: 0;
  }

  > .title {
    @include text-xxl;
    @include text-medium;

    text-transform: uppercase;
    margin-top: 0rem;
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

  > * {
    transition: opacity 0.6s ease-in-out;
  }

  > .intro {
    @include text-sm;

    opacity: 0;
    max-width: 28%;
    align-self: center;
  }

  > .button {
    @include button-default;

    opacity: 0;
    align-self: baseline;
    margin-top: auto;
    transition-delay: 0.8s;
  }

  &.-started {
    > .intro {
      opacity: 1;
    }

    > .button {
      opacity: 1;
    }
  }

}
</style>
