<template>
  <el-card class="chart-info">
    <template #header>{{ props.title }}</template>
    <div class="content">
      <slot></slot>
    </div>
  </el-card>
</template>

<script setup lang="ts">
interface IProps {
  title: string
}
const props = defineProps<IProps>()
</script>

<style scoped>
.chart-info {
  margin-bottom: 20px;
}
:deep(.el-card__header) {
  padding-top: 10px;
  padding-bottom: 10px;
  line-height: 30px;
}
</style>
