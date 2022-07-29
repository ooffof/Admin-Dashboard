<template>
  <div class="select">
    <div class="select__box" @click="showPopup">
      <span class="select__placeholder">{{ placeholderText }}</span>
      <chevron-down-icon class="icon-down"></chevron-down-icon>
    </div>
    <div class="select__popup u-hidden" ref="popup">
      <ul class="select__content">
        <li @click="hiddenPopup" v-for="value in content" :key="value">{{ value }}</li>
      </ul>
      <span></span>
    </div>
  </div>
</template>

<script setup >
import {ref, defineProps, defineEmits} from "vue";

const popup = ref(null);
const props = defineProps(['placeholder', 'content']);
const emits = defineEmits(['onSelected'])

const placeholderText = ref(props.placeholder);

function hiddenPopup(e) {
  const selectedValue = e.target.textContent;
  placeholderText.value = selectedValue;
  popup.value.classList.add("u-hidden");
  emits("onSelected", selectedValue);
}

function showPopup() {
  popup.value.classList.toggle("u-hidden");
}

</script>

<style scoped>

</style>
