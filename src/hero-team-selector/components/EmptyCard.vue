<template>
  <div class="card">
    <img src="@/assets/img/default-member.jpg" alt="Empty Slot">
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class EmptyCard extends Vue {}
</script>

<style lang="scss" scoped>
.card {
  width: 8rem;
  height: 10rem;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    opacity: 0.4;
  }
}
</style>

