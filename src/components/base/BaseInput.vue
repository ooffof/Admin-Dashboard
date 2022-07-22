<template>
  <input type="text" class="input" :placeholder="t('message.searchBoxPlaceholder')">
</template>

<script>
import {useI18n} from "vue-i18n"
export default {
  name: "BaseInput",
  setup(){
    const {t} = useI18n();

    return {t}
  }
};
</script>

