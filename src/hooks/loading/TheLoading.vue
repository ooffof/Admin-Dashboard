<template>
  <div v-show="visible" class="loading">
    <div class="loading__mask"></div>
    <div class="loading__box">
      <div class="loading__content"></div>
      <div class="loading__text">{{content}}</div>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  name: "the-loading",
  setup() {
    const visible = ref(false);
    const duration = ref(1500);
    const content = ref("正在拼命加载中");

    function showLoadingWithArgs(args) {
      duration.value = args.duration || duration.value;
      content.value = args.content || content.value;
      visible.value = true
      setTimeout(() => visible.value = false, duration.value);
    }

    async function showAsyncLoadingWithArgs(args){
      duration.value = args.duration || duration.value;
      content.value = args.content || content.value;
      visible.value = true

      const promise = new Promise(resolve => {
          setTimeout(()=> {
            visible.value = false;
            resolve();
          }, duration.value)
      });

      return promise;
    }


    function showLoadingEternally() {
      visible.value = true;
    }

    function hideLoading() {
      visible.value = false;
    }

    return {
      content,
      visible,
      showLoadingWithArgs,
      duration,
      showLoadingEternally,
      hideLoading,
      showAsyncLoadingWithArgs,
    };
  }
};
</script>

