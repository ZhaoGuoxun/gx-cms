<template>
  <el-container>
    <el-aside :width="isFold ? '60px' : '210px'">
      <side-bar :isFold="isFold" />
    </el-aside>
    <el-container>
      <el-header>
        <main-header @fold-change="handleFoldChange" />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import sideBar from './components/sideBar.vue'
import mainHeader from './components/header.vue'
import { ref } from 'vue'

const isFold = ref(false)
const handleFoldChange = (flag: boolean) => {
  isFold.value = flag
}
</script>

<style scoped lang="less">
.el-container {
  height: 100%;
}
.el-header {
  height: 48px;
}
.el-main {
  background-color: #f0f2f5;
}

.el-aside {
  background: #001529;
  transition: width 0.3s linear;
}
</style>
