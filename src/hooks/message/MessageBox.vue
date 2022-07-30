<template>
  <div class="message message--leave" @click="hidden" ref="m"
       :class="{'message--success': message.type === 'success',
       'message--error': message.type === 'error', 'message--warn': message.type === 'warn'}">
    {{ message.content }}
  </div>
</template>



<script setup lang="ts">
import {ref} from "vue"

const m = ref();

defineProps<{
  message: {
    type: string
    content: string
  }
}>();

// const content = ref("成功")
// const type = ref("success");
// export default defineComponent({
//   name: "MessageBox",
//   setup() {
//
// function showMessage(_content: string, _type: string) {
//   content.value = _content;
//   m.value.classList.remove("message--leave");
//   type.value = _type;
//   setTimeout(() => {
//     m.value.classList.add("message--leave");
//   }, 1500);
// }
// //
function hidden() {
  m.value.classList.add("message--leave");
}

//     return {
//       m,
//       content,
//       type,
//       showMessage,
//       hidden
//     };
//   },
// });
</script>

