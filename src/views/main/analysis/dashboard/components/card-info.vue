<template>
  <el-card class="box-card">
    <div class="header">
      <div class="title">{{ props.title }}</div>
      <el-tooltip effect="light" :content="props.tips" placement="top">
        <el-icon class="icon"><Warning /></el-icon>
      </el-tooltip>
    </div>
    <div class="content">
      <span class="number" ref="number1Ref">{{ props.number1 }}</span>
    </div>
    <div class="footer">
      <span class="sub-title">{{ props.subtitle }}</span>
      <span class="sub-number" ref="number2Ref">{{ props.number2 }}</span>
    </div>
  </el-card>
</template>

<script setup lang="ts">
import { CountUp } from 'countup.js'
import { onMounted, ref } from 'vue'

interface IProps {
  amount: string
  title: string
  subtitle: string
  tips: string
  number1: number
  number2: number
}
const props = defineProps<IProps>()

const number1Ref = ref<HTMLElement>()
const number2Ref = ref<HTMLElement>()

onMounted(() => {
  new CountUp(number1Ref.value!, props.number1, {
    prefix: (props.amount == 'saleroom' && '¥ ') || ''
  }).start()
  new CountUp(number2Ref.value!, props.number2, {
    prefix: (props.amount == 'saleroom' && '¥') || ''
  }).start()
})
</script>

<style scoped lang="less">
.box-card {
  margin-bottom: 20px;
}
.header {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.45);
}
.content {
  color: rgba(0, 0, 0, 0.85);
  font-size: 26px;
  border-bottom: 1px solid #f0f0f0;
  line-height: 60px;
}
.footer {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.85);
  line-height: 34px;

  .sub-title {
    margin-right: 6px;
  }
}

:deep(.el-card__body) {
  padding-bottom: 4px;
}
</style>
