<template>
  <div class="team-wrapper">
    <h2>{{ teamTitle }}</h2>
    <div class="team">
      <HeroCard
        class="hero-card"
        v-for="member in team"
        v-bind:key="member.id"
        v-bind:member="member"
        v-bind:teamType="teamTitle"
      ></HeroCard>
      <EmptyCard class="empty-card" v-for="slot in availableSlot" v-bind:key="slot.index"></EmptyCard>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import HeroCard from "./HeroCard.vue";
import EmptyCard from "./EmptyCard.vue";

@Component({
  components: {
    HeroCard,
    EmptyCard
  }
})
export default class Team extends Vue {
  @Prop() teamTitle!: String;
  @Prop() team: any;

  initSlot = 5;
  availableSlot = 5;

  @Watch("team")
  onTeamChanged(value: any, oldValue: any) {
    this.availableSlot = this.initSlot - value.length;
  }

  mounted() {}
}
</script>

<style lang="scss" scoped>
.team-wrapper {
  height: 30vh;

  .team {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>

