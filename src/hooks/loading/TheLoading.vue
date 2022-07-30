<template>
  <div v-show="loading.show" class="loading">
    <div class="loading__mask"></div>
    <div class="loading__box">
      <div class="loading__content"></div>
      <div class="loading__text">{{ loading.content }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">

defineProps<{
  loading: {
    show: boolean,
    content: string
  }
}>()


// export default defineComponent({
//   name: "the-loading",
//   setup() {
//     const visible = ref(false);
//     const duration = ref(1500);
//     const content = ref("正在拼命加载中");
//
//     function showLoadingWithArgs(args: { duration: number, content: string }) {
//       duration.value = args.duration || duration.value;
//       content.value = args.content || content.value;
//       visible.value = true
//       setTimeout(() => visible.value = false, duration.value);
//     }
//
//     async function showAsyncLoadingWithArgs(args: { duration: number, content: string }) {
//       duration.value = args.duration || duration.value;
//       content.value = args.content || content.value;
//       visible.value = true
//
//       const promise = new Promise<void>(resolve => {
//         setTimeout(() => {
//           visible.value = false;
//           resolve();
//         }, duration.value)
//       });
//
//       return promise;
//     }
//
//
//     function showLoadingEternally() {
//       visible.value = true;
//     }
//
//     function hideLoading() {
//       visible.value = false;
//     }
//
//     return {
//       content,
//       visible,
//       showLoadingWithArgs,
//       duration,
//       showLoadingEternally,
//       hideLoading,
//       showAsyncLoadingWithArgs,
//     };
//   }
// });
</script>

