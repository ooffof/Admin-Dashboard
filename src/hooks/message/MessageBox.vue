<template>
  <div class="message message--leave" ref="m" @click="hidden"
       :class="{'message--success': type === 'success', 'message--error': type === 'error'}">
    {{ content }}
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  name: "MessageBox",
  setup() {
    const content = ref("");
    const m = ref(null);
    const type = ref('success');

    function showMessage(_content, _type) {
      content.value = _content;
      m.value.classList.remove("message--leave");
      type.value = _type;
      setTimeout(() => {
        m.value.classList.add("message--leave");
      }, 1500);
    }

    function hidden() {
      m.value.classList.add("message--leave");
    }

    return {
      m,
      content,
      type,
      showMessage,
      hidden
    };
  }
};
</script>

