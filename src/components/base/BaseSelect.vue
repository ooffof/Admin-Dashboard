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

<script setup lang="ts">
import {ref} from "vue";

document.body.addEventListener("click", (e: Event) => {
  const selects = document.querySelectorAll(".select");

  selects.forEach(value => {
    const box = value.querySelector(".select__box")!;
    const el = e.target as HTMLElement;
    if(!box.contains(el)){
      value.querySelector(".select__popup")!.classList.add("u-hidden");
    }
  })

})

const popup = ref();
const props = defineProps<{
  placeholder: string,
  content: string[]
}>();
const emits = defineEmits<{
  (eventName: "onSelected", value: string) : void
}>()

const placeholderText = ref(props.placeholder!);

function hiddenPopup(e: Event) {
  const selectedValue = (e.target as HTMLLIElement).textContent!;
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
