<template>
  <div :class="themeTopic">
    <router-view class="root"></router-view>
  </div>
</template>

<script>
import {computed} from "vue";
import {useStore} from "vuex";

export default {
  setup() {
    const state = useStore().state;
    const themeTopic = computed(() => {
      const topic = state.themeTopic.value || state.themeTopic;
      return `theme-${topic}`;
    });

    return {
      themeTopic
    };
  }
};
</script>

<style lang="scss">
.root{
  @include themify(){
    color: themed("base-text-color");
  }
}
</style>
