<template>
  <div class="dashboard">
    <h3 class="dashboard__heading-primary u-margin-bottom-1-2">{{ t("message.title") }}</h3>
    <div class="dashboard__cards u-margin-bottom-3-6">
      <div class="card">
        <div class="card__left">
          <h3 class="card__left-heading">{{ t("message.totalUser") }}</h3>
          <p class="card__left-info">22,894</p>
          <div class="card__left-description">
            <div class="card__icon-container card__icon-container--1">
              <arrow-down-circle-icon></arrow-down-circle-icon>
              29%
            </div>
            <div>Last 2 weeks</div>
          </div>
        </div>
        <div class="chart" ref="chart1"></div>
      </div>
      <div class="card">
        <div class="card__left">
          <h3 class="card__left-heading">{{ t("message.totalUser") }}</h3>
          <p class="card__left-info">1,234</p>
          <div class="card__left-description">
            <div class="card__icon-container card__icon-container--2">
              <arrow-up-circle-icon></arrow-up-circle-icon>
              74%
            </div>
            <div>Last 3 days</div>
          </div>
        </div>
        <div class="chart" ref="chart2"></div>
      </div>
      <div class="card">
        <div class="card__left">
          <h3 class="card__left-heading">{{ t("message.totalUser") }}</h3>
          <p class="card__left-info">2,318</p>
          <div class="card__left-description">
            <div class="card__icon-container card__icon-container--3">
              <arrow-down-circle-icon></arrow-down-circle-icon>
              12%
            </div>
            <div>Last 2 month</div>
          </div>
        </div>
        <div class="chart" ref="chart3"></div>
      </div>
      <div class="card">
        <div class="card__left">
          <h3 class="card__left-heading">{{ t("message.totalUser") }}</h3>
          <p class="card__left-info">574</p>
          <div class="card__left-description">
            <div class="card__icon-container card__icon-container--4">
              <arrow-up-circle-icon></arrow-up-circle-icon>
              22%
            </div>
            <div>Last 4 weeks</div>
          </div>
        </div>
        <div class="chart" ref="chart4"></div>
      </div>
    </div>
    <div class="dashboard__charts">
      <div class="dashboard__charts--chart">
        <h3 class="heading">{{ t("message.userFrom") }}</h3>
        <div class="chart" ref="chart5"></div>
      </div>
      <div class="dashboard__charts--chart">
        <h3 class="heading">{{t("message.userPercentage")}}</h3>
        <div class="chart" ref="chart6"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, onMounted, ref, watch} from "vue";
import {useI18n} from "vue-i18n";
import * as echarts from "echarts";
import {ECBasicOption} from "echarts/types/dist/shared";
import {useStore} from "vuex"
import {EChartsType} from "echarts";

const {t} = useI18n();
const state = useStore().state;


function randomArray(size: number, min: number, max: number) {
  const arr = []
  for (let i = 0; i < size; i++) {
    arr.push(Math.random() * (max - min + 1) + min);
  }
  return arr;
}


const chart1 = ref();
const option1 = {
  grid: { // 让图表占满容器
    top: "20px",
    left: "0px",
    right: "0px",
    bottom: "20px"
  },
  xAxis: {
    show: false,
    type: 'category',
    data: Array(15).fill("_")
  },
  yAxis: {
    type: 'value',
    show: false
  },
  series: [
    {
      symbol: "none",
      data: randomArray(15, 0, 1000),
      type: 'line',
      smooth: true,
      itemStyle: {
        normal: {
          lineStyle: {
            color: "#845ef7"
          }
        }
      }
    }
  ]
}
const chart2 = ref();
const option2 = {
  grid: { // 让图表占满容器
    top: "20px",
    left: "0px",
    right: "0px",
    bottom: "20px"
  },
  xAxis: {
    data: Array(7).fill("_"),
    show: false
  },
  yAxis: {
    show: false
  },
  series: [
    {
      type: 'bar',
      data: randomArray(7, 100, 300),
      barWidth: "5px",
      itemStyle: {
        normal: {
          color: function (params: { dataIndex: number }) {

            // build a color map as your need.

            const colorList = ["#c5f6fa", "#c5f6fa", "#c5f6fa", "#22b8cf", "#22b8cf", "#c5f6fa", "#22b8cf"];

            return colorList[params.dataIndex]

          },
          borderColor: "#66d9e8",
          barBorderRadius: [3, 3, 0, 0]
        }
      },

    }
  ]
};
const chart3 = ref();
const option3 = {
  grid: { // 让图表占满容器
    top: "20px",
    left: "0px",
    right: "0px",
    bottom: "20px"
  },
  xAxis: {
    show: false,
    type: 'category',
    data: Array(15).fill("_")
  },
  yAxis: {
    type: 'value',
    show: false
  },
  series: [
    {
      symbol: "none",
      data: randomArray(15, 0, 1000),
      type: 'line',
      smooth: true,
      itemStyle: {
        normal: {
          lineStyle: {
            color: "#ff922b"
          }
        }
      }
    }
  ]
}
const chart4 = ref();
const option4 = {
  grid: { // 让图表占满容器
    top: "20px",
    left: "0px",
    right: "0px",
    bottom: "20px"
  },
  xAxis: {
    data: Array(7).fill("_"),
    show: false
  },
  yAxis: {
    show: false
  },
  series: [
    {
      type: 'bar',
      data: randomArray(7, 100, 300),
      barWidth: "5px",
      itemStyle: {
        normal: {
          color: function (params: { dataIndex: number }) {

            // build a color map as your need.

            const colorList = ["#94d82d", "#d8f5a2", "#d8f5a2", "#94d82d", "#94d82d", "#d8f5a2", "#94d82d"];

            return colorList[params.dataIndex]

          },
          borderColor: "#c0eb75",
          barBorderRadius: [3, 3, 0, 0]
        }
      },

    }
  ]
};


const chart5 = ref();
const option5 = {
  backgroundColor: "transparent",
  legend: {
    data: ['Email', 'Search Engine']
  },
  tooltip: {
    trigger: 'axis'
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      symbol: "none",
      smooth: true,
      name: "Email",
      data: randomArray(7, 100, 600),
      type: 'line',
      lineStyle: {
        width: "3",
        color: "#845ef7"
      },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0, color: 'rgba(132, 94, 247, .8)' // 0% 处的颜色
            }, {
              offset: 1, color: 'rgba(208, 191, 255, .8)' // 100% 处的颜色
            }
          ]
        }
      }
    },
    {
      type: 'line',
      name: "Search Engine",
      data: randomArray(7, 100, 1000),
      symbol: "none",
      smooth: true,
      lineStyle: {
        width: "3",
        color: "#22b8cf"
      },
      areaStyle: {
        color: {
          colorStops: []
        }
      }
    }
  ]
};
const chart6 = ref();
const option6 = {
  backgroundColor: "transparent",
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: '10px',
    top: "10px",
  },
  series: [
    {
      left: 40,
      top: 20,
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
}


const theme = computed(() => state.themeTopic);
let c5: EChartsType, c6: EChartsType;
onMounted(() => {
  init(chart1.value, option1)
  init(chart2.value, option2)
  init(chart3.value, option3)
  init(chart4.value, option4)
  c5 = init(chart5.value, option5)
  c6 = init(chart6.value, option6)
})


watch(theme, function (newTheme) {
  if (newTheme.value === 'dark') {
    c5.dispose();
    c6.dispose();
    c5 = init(chart5.value, option5, "dark")
    c6 = init(chart6.value, option6, "dark");
  } else {
    c5.dispose();
    c6.dispose();
    c5 = init(chart5.value, option5)
    c6 = init(chart6.value, option6)
  }
})


function init(el: HTMLElement, options: ECBasicOption, theme: string = "default") {
  const v = echarts.init(el, theme)
  v.setOption(options);
  return v;
}


</script>
