<template>
  <div class="search-box">
    <div class="search-box__content">
      <base-input></base-input>
      <search-icon class="u-base-icon search-box__icon"></search-icon>
    </div>
  </div>
</template>

<script>
import BaseInput from "./base/BaseInput.vue";
export default {
  name: "SearchBox",
  components: {BaseInput}

};
</script>
