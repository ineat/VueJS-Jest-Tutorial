<template>
  <div id="app" class="app">
    <div class="app--header">
      <img src="./assets/img/logo.svg" class="app--logo">
    </div>
    <div class="app--content">
      <div class="app--container">
        <HeroTeamSelector></HeroTeamSelector>
      </div>
      <div class="app--footer">
        <p>&copy; Ineat Group - iLab Team.</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HeroTeamSelector from "./hero-team-selector/HeroTeamSelector.vue";

@Component({
  components: {
    HeroTeamSelector
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "./assets/styles/global.scss";
#app {
  margin: 0 auto;
}

:host {
  display: block;
  width: 100%;
}

.app {
  &--header {
    position: relative;
    text-align: center;
    padding: 35px 0;
  }
  &--logo {
    width: 75px;
  }
  &--nav {
    border-radius: 4px 4px 0 0;
    text-align: center;
    background: #ab131b;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      color: #fff;
      padding: 15px 35px;
      font-family: "cornerstone";
      &.active {
        background: #921217;
      }
    }
  }
  &--content {
    margin: 0 auto 50px;
    background: #090909;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    max-width: 1200px;
    border-radius: 4px;
  }
  &--container {
    padding: 0;
  }
  &--footer {
    border-radius: 0 0 4px 4px;
    font-family: "cornerstone";
    background: #ab131b;
    color: #121212;
    padding: 10px;
    text-align: center;
    p {
      margin: 0;
      font-weight: 600;
    }
  }
}
</style>
