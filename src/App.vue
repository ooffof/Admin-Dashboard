<template>
  <div :class="themeTopic">
    <router-view class="root"></router-view>
  </div>
</template>

<script setup>
import {computed} from "vue";
import {useStore} from "vuex";

const state = useStore().state;
const themeTopic = computed(() => {
  const topic = state.themeTopic.value || state.themeTopic;
  return `theme-${topic}`;
});

</script>

<style lang="scss">
.root {
  @include themify() {
    color: themed("base-text-color");
  }
}
</style>
