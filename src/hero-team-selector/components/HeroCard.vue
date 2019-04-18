<template>
  <div class="card">
    <span class="remove-btn" v-on:click="remove()">X</span>
    <div class="img-wrapper">
      <img v-bind:src="member.thumb" v-bind:alt="member.name">
    </div>
    <div class="member-name">{{ member.name }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({})
export default class HeroCard extends Vue {
  @Prop() member!: any;
  @Prop() teamType!: String;

  remove() {
    this.$store.dispatch("removeMember", {
      type: this.teamType,
      member: this.member
    });
  }
}
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  width: 8rem;
  height: 10rem;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 8px;

  .remove-btn {
    position: absolute;
    top: -6px;
    right: -6px;
    display: block;
    width: 20px;
    height: 20px;
    background: lightgrey;
    border-radius: 10px;
    text-align: center;
    line-height: 20px;
    font-size: 0.75rem;
    cursor: pointer;
    transition: all 150ms linear;

    &:hover {
      background: #ab131b;
      color: white;
    }
  }

  .img-wrapper {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    overflow: hidden;

    img {
      height: 100%;
    }
  }

  .member-name {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 0.325rem;
    background: rgba(0, 0, 0, 0.8);
    color: rgba(255, 255, 255, 0.7);
    border-radius: 0 0 8px 8px;
    font-family: "cornerstone";
  }
}
</style>

