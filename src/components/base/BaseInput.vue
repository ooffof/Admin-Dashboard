<template>
  <input type="text" class="input" :placeholder="t('message.searchBoxPlaceholder')" >
</template>


<script setup>
import {useI18n} from "vue-i18n";
const {t} = useI18n();
</script>

