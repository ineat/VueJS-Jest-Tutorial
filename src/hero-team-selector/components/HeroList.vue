<template>
  <div class="list">
    <h2>{{ title }}</h2>
    <HeroListItem
      class="heroListItem"
      v-for="item in list"
      v-bind:key="item.id"
      v-bind:item="item"
      v-bind:title="listTitle"
    ></HeroListItem>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import HeroListItem from "./HeroListItem.vue";

@Component({
  components: {
    HeroListItem
  }
})
export default class HeroList extends Vue {
  @Prop() list: any;
  @Prop() title!: String;

  listTitle!: String;

  mounted() {
    this.listTitle = this.title;
  }
}
</script>

<style lang="scss" scoped>
.list {
  min-width: 220px;
  height: 100%;
  background: #121212;
  overflow-y: auto;

  h2 {
    color: white;
    padding-left: 1rem;
  }
}
</style>

