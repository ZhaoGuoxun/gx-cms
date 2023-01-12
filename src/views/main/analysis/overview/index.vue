<template>
  <div>
    <el-card class="box-card mb20">
      <template #header>
        <div class="card-header">
          <h3 style="font-weight: 700">关于</h3>
        </div>
      </template>
      <div>Vue3Admin 是基于 Vue3、Pinia、VueRouter、Vite、 ElementPlus 、TypeScript、Echart5 等后台系统解决方案。</div>
    </el-card>

    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <h3 style="font-weight: 700">项目结构</h3>
        </div>
      </template>
      <pre class="bg"> <code class="languagebash" v-html="treeData" /> </pre>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { treeData } from './data/tree-data'
</script>

<style scoped lang="less">
.bg {
  padding: 10px;
  text-align: left;
  background: #f0f0f0;
}
.languagebash {
  font-family: monospace, monospace;
  font-size: 1em;
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
}

.mb20 {
  margin-bottom: 20px;
}
</style>
