<template>
  <base-chart :options="options" />
</template>

<script setup lang="ts">
import type { EChartsOption } from 'echarts'
import { computed } from 'vue'
import baseChart from '../base-chart.vue'
import * as echarts from 'echarts'

interface IProps {
  xData: any[]
  yData: any[]
}

const props = defineProps<IProps>()

const options: any = computed(() => {
  return {
    grid: {
      bottom: '5%'
    },
    title: { text: '支持鼠标滚动缩放' },
    xAxis: {
      data: props.xData,
      axisLabel: { inside: true, color: '#fff' },
      axisTick: { show: false },
      axisLine: { show: false },
      z: 10
    },
    yAxis: {
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { color: '#999' }
    },
    dataZoom: [{ type: 'inside' }],
    series: [
      {
        type: 'bar',
        showBackground: true,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#83bff6' },
            { offset: 0.5, color: '#188df0' },
            { offset: 1, color: '#188df0' }
          ])
        },
        emphasis: {
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#2378f7' },
              { offset: 0.7, color: '#2378f7' },
              { offset: 1, color: '#83bff6' }
            ])
          }
        },
        data: props.yData
      }
    ]
  }
})
</script>

<style scoped></style>
