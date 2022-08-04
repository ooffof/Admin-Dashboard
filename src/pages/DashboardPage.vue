<template>
  <div class="dashboard">
    <h3 class="dashboard__heading-primary u-margin-bottom-1-2">{{ t("message.title") }}</h3>
    <div class="dashboard__cards">
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
      <div class=""></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import {useI18n} from "vue-i18n";
import * as echarts from "echarts";
import {ECBasicOption} from "echarts/types/dist/shared";

const {t} = useI18n();

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
          color: function(params: {dataIndex: number}) {

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
          color: function(params: {dataIndex: number}) {

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

onMounted(() => {
  init(chart1.value, option1)
  init(chart2.value, option2)
  init(chart3.value, option3)
  init(chart4.value, option4)
})


function init(el: HTMLElement, options: ECBasicOption) {
  const v = echarts.init(el)
  v.setOption(options);
  return v;
}


</script>
