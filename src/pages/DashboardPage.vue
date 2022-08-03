<template>
  <div class="dashboard">
    <h3 class="dashboard__heading-primary">{{ t("message.title") }}</h3>
    <div class="chart" ref="chart1"></div>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import {useI18n} from "vue-i18n";
import * as echarts from "echarts";
import {ECBasicOption} from "echarts/types/dist/shared";

const {t} = useI18n();


const chart1 = ref();
const options1 = {
  series: [
    {
      type: 'gauge',
      progress: {
        show: true,
        width: 18
      },
      axisLine: {
        lineStyle: {
          width: 18
        }
      },
      axisTick: {
        show: false
      },
      splitLine: {
        length: 15,
        lineStyle: {
          width: 2,
          color: '#999'
        }
      },
      axisLabel: {
        distance: 25,
        color: '#999',
        fontSize: 20
      },
      anchor: {
        show: true,
        showAbove: true,
        size: 25,
        itemStyle: {
          borderWidth: 10
        }
      },
      title: {
        show: false
      },
      detail: {
        valueAnimation: true,
        fontSize: 80,
        offsetCenter: [0, '70%']
      },
      data: [
        {
          value: 70
        }
      ]
    }
  ]
}


onMounted(() => {
  init(chart1.value, options1);
})

function init(el:HTMLElement, options: ECBasicOption){
  const v = echarts.init(el, "dark")
  v.setOption(options);
}


</script>

<style scoped>
.chart {
  height: 40rem;
}
</style>
