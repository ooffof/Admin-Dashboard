<template>
  <div class="dashboard">
    <v-chart class="chart" :option="option"></v-chart>
  </div>
</template>

<script>
import {use} from "echarts/core";
import {CanvasRenderer} from "echarts/renderers"
import {PieChart} from "echarts/charts";
import VChart from 'vue-echarts';
import { ref } from 'vue';

use([
    CanvasRenderer,
    PieChart
])


export default{
  components: {
    VChart,
  },
  setup() {
    const option = ref({
      series: [
        {
          name: 'Traffic Sources',
          type: 'pie',
          radius: '55%',
          center: ['50%', '60%'],
          data: [
            { value: 335, name: 'Direct' },
            { value: 310, name: 'Email' },
            { value: 234, name: 'Ad Networks' },
            { value: 135, name: 'Video Ads' },
            { value: 1548, name: 'Search Engines' },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
      ],
    });

    return { option };
  },
}
</script>

<style scoped>
.chart {
  height: 20rem;
}
</style>
