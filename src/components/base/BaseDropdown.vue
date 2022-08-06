<template>
  <ul class="dropdown" @mouseenter="showMenu" >
    <div class="dropdown__default" >
      <slot></slot>
    </div>
    <div class="dropdown__menu u-hidden" ref="menu" @mouseleave="hiddenMenu">
      <div class="dropdown__top">
        <h3 class="dropdown__heading-primary">{{props.title}}</h3>
        <circle-x-icon @click="hiddenMenu"></circle-x-icon>
      </div>
      <slot name="content"></slot>
    </div>
  </ul>
</template>

<script setup lang="ts">
import {ref} from "vue";
const props = defineProps<{
 title: string,
}>();
const menu = ref();
function showMenu(){
  menu.value.classList.remove("u-hidden");
}

function hiddenMenu(){
  menu.value.classList.add("u-hidden");
}
</script>


