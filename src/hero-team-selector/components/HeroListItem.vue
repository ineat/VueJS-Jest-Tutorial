<template>
  <div class="item">
    <img v-bind:src="item.thumb" v-bind:alt="item.name">
    <div class="item-infos">
      <span class="name">{{ item.name }}</span>
      <div class="actions">
        <button class="btn primary" v-on:click="select()">Select</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({})
export default class HeroListItem extends Vue {
  @Prop() item: any;
  @Prop() title!: String;

  select() {
    this.$store.dispatch("addMember", { type: this.title, member: this.item });
  }
}
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  flex-direction: row;
  padding: 0.5rem;
  background: #212121;
  margin-bottom: 1px;
  img {
    width: 50px;
    height: 50px;
  }

  .item-infos {
    font-family: "cornerstone";
    color: rgba(255, 255, 255, 0.8);
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-left: 10px;

    .actions {
      display: flex;
      justify-content: flex-end;

      .btn {
        display: inline-block;
        font-weight: 400;
        color: rgba(255, 255, 255, 0.8);
        text-align: center;
        vertical-align: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        background-color: #ab131b;
        border: 1px solid transparent;
        padding: 0.375rem;
        font-size: 1rem;
        line-height: 1;
        border-radius: 0.25rem;
        transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
          border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

        &:hover {
          background-color: #7d0d12;
        }
      }
    }
  }
}
</style>

