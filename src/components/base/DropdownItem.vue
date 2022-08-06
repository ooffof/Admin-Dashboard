<template>
  <li class="dropdown__item">
    <div class="dropdown__item--control-max-height">
      <mail-icon v-show="props.mail"></mail-icon>
      <checkbox-icon v-show="props.check"></checkbox-icon>
      <user-plus-icon v-show="props.userplus"></user-plus-icon>
      <img alt="user" :src="props.src" v-show="props.img" class="dropdown__img">
      <slot></slot>
      <trash-icon v-show="props.trash" class="trash" @click="deleteItem"></trash-icon>
    </div>
  </li>
</template>

<script setup lang="ts">


const props = defineProps({
  mail: {
    type: Boolean,
    required: false,
    default: false
  },
  check: {
    type: Boolean,
    required: false,
    default: false
  },
  userplus: {
    type: Boolean,
    required: false,
    default: false
  },
  trash: {
    type: Boolean,
    required: false,
    default: true
  },
  img : {
    type: Boolean,
    required: false,
    default: false
  },
  src: {
    type: String,
    required: false,
    default: ""
  }

})
function deleteItem(e: Event){
 const el = e.target as HTMLElement;
 const item = el.closest(".dropdown__item")!;
 item.classList.add("u-height-0");
}
</script>
