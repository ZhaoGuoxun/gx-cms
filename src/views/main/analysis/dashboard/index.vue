<template>
  <div class="dashboard">
    <el-row :gutter="12">
      <el-col :span="6" :lg="6" :sm="12" :xs="24" v-for="item in amountList" :key="item.amount">
        <card-info v-bind="item"></card-info>
      </el-col>
    </el-row>

    <!-- echarts -->
    <el-row :gutter="10">
      <el-col :span="7">
        <chart-info title="分类商品数量(饼图)">
          <pie-chart :data="pieData" />
        </chart-info>
      </el-col>
      <el-col :span="10">
        <chart-info title="不同城市商品销量">
          <map-chart :data="mapData" />
        </chart-info>
      </el-col>
      <el-col :span="7">
        <chart-info title="分类商品数量(玫瑰图)">
          <rose-chart :data="pieData" />
        </chart-info>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="12">
        <chart-info title="分类商品的销量">
          <line-chart v-bind="lineData" />
        </chart-info>
      </el-col>
      <el-col :span="12">
        <chart-info title="分类商品的收藏">
          <bar-chart v-bind="lineData" />
        </chart-info>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import cardInfo from './components/card-info.vue'
import chartInfo from './components/chart-info.vue'
import pieChart from '@/components/echarts/src/instance/pie-chart.vue'
import roseChart from '@/components/echarts/src/instance/rose-chart.vue'
import lineChart from '@/components/echarts/src/instance/line-chart.vue'
import barChart from '@/components/echarts/src/instance/bar-chart.vue'
import mapChart from '@/components/echarts/src/instance/map-chart.vue'

import { getCategoryCount, getGoodsAmountList, getCategorySale, getCitySale } from '@/api/analysis'

const amountList = ref<any>([])
getGoodsAmountList().then(res => {
  amountList.value = res.data
})

const pieData = ref<any>([])
getCategoryCount().then(res => {
  pieData.value = res.data.map((o: any) => ({ value: o.goodsCount, name: o.name }))
})

const lineData = ref({ xData: [], yData: [] })
getCategorySale().then(res => {
  lineData.value.xData = res.data.map((o: any) => o.name)
  lineData.value.yData = res.data.map((o: any) => o.goodsCount)
})

const mapData = ref<any>([])
getCitySale().then(res => {
  mapData.value = res.data.map((o: any) => ({ name: o.address, value: o.count }))
})
</script>

<style scoped></style>
