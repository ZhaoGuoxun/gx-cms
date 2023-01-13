<template>
  <div class="base-chart">
    <div class="echart" ref="echartDivRef" :style="{ width: width, height: height }"></div>
  </div>
</template>

<script setup lang="ts">
import type { EChartsOption } from 'echarts'
import * as echarts from 'echarts'
import chinaJson from '../data/china.json'
import { onMounted, ref, watchEffect } from 'vue'

interface IProps {
  options: EChartsOption
  width?: string
  height?: string
}
const props = withDefaults(defineProps<IProps>(), {
  options: () => ({}),
  width: '100%',
  height: '350px'
})

const echartDivRef = ref<HTMLElement>()
echarts.registerMap('china', chinaJson as any)

onMounted(() => {
  // 初始化echarts
  const echartsInstance = echarts.init(echartDivRef.value!, 'light', { renderer: 'svg' })

  watchEffect(() => {
    echartsInstance.setOption(props.options)
  })

  // 监听window尺寸的变化
  window.addEventListener('resize', () => {
    echartsInstance.resize()
  })
})
</script>

<style scoped></style>
