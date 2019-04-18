<template>
  <div class="selector-wrapper">
    <HeroList v-bind:list="heroList" v-bind:title="heroesTitle"></HeroList>
    <div class="teams-wrapper">
      <Team v-bind:team="heroTeam" v-bind:teamTitle="heroTeamTitle"></Team>
      <Team v-bind:team="wickedTeam" v-bind:teamTitle="wickedTeamTitle"></Team>
    </div>
    <HeroList v-bind:list="wickedList" v-bind:title="wickedTitle"></HeroList>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HeroList from "./components/HeroList.vue";
import Team from "./components/Team.vue";

import { fetchHeroes, fetchWicked } from "./services/CharacterService";

@Component({
  components: {
    HeroList,
    Team
  }
})
export default class HeroTeamSelector extends Vue {
  heroesTitle = "Heroes";
  heroTeamTitle = "Team of heroes";
  wickedTitle = "Wicked";
  wickedTeamTitle = "Team of wicked";
  memberPerTeam: number = 5;
  heroList: any[] = [];
  wickedList: any[] = [];

  get heroTeam() {
    return this.$store.getters.getHeroTeam;
  }

  get wickedTeam() {
    return this.$store.getters.getWickedTeam;
  }

  mounted() {
    this.getHeroes();
    this.getWicked();
  }

  getHeroes() {
    fetchHeroes()
      .then(response => response.json())
      .then((data: any) => {
        this.heroList = data;
      })
      .catch((error: any) => console.log(error));
  }

  getWicked() {
    fetchWicked()
      .then(response => response.json())
      .then((data: any) => {
        this.wickedList = data;
      })
      .catch((error: any) => console.log(error));
  }
}
</script>

<style lang="scss" scoped>
.selector-wrapper {
  display: flex;
  flex-direction: row;
  height: 65vh;
  min-width: 1200px;

  .teams-wrapper {
    display: flex;
    width: 100%;
    background: #efefef;
    flex-direction: column;
    padding: 2rem;
    justify-content: space-between;
  }
}
</style>

