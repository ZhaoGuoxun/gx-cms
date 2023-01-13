<template>
  <div class="search mb20">
    <el-form :model="searchForm" size="large" :label-width="props.labelWidth">
      <el-row :gutter="60">
        <el-col :span="8" v-for="item in props.formItem" :key="item.prop">
          <template v-if="item.type == 'input'">
            <el-form-item :label="item.label" :prop="item.prop">
              <el-input v-model="searchForm[item.prop]" :placeholder="item.placeholder" />
            </el-form-item>
          </template>
          <template v-else-if="item.type == 'select'">
            <el-form-item :label="item.label" :prop="item.prop">
              <el-select v-model="searchForm[item.prop]" :placeholder="item.placeholder" style="width: 100%">
                <el-option v-for="opt in item.options" :key="opt.value" :label="opt.label" :value="opt.value" />
              </el-select>
            </el-form-item>
          </template>
          <template v-else-if="item.type == 'datepicker'">
            <el-form-item :label="item.label">
              <el-date-picker
                v-model="searchForm[item.prop]"
                :type="item.attach.type"
                :start-placeholder="item.attach.startPlaceholder"
                :end-placeholder="item.attach.endPlaceholder"
              />
            </el-form-item>
          </template>
        </el-col>
      </el-row>
    </el-form>
    <div class="operate">
      <el-button size="large" icon="RefreshLeft" @click="handleReset">重置</el-button>
      <el-button size="large" type="primary" icon="Search" @click="handleSearch">查询</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface IProps {
  pageName: string
  formItem: any[]
  labelWidth: string
}
const props = defineProps<IProps>()

const emit = defineEmits(['queryInfo'])

const defaultForm = () => {
  const formData: any = {}
  for (let item of props.formItem) {
    formData[item.prop] = item.initalValue || undefined
  }
  return formData
}
const searchForm = ref<any>(defaultForm())

const handleReset = () => {
  searchForm.value = defaultForm()
  emit('queryInfo', searchForm.value)
}
const handleSearch = () => {
  emit('queryInfo', searchForm.value)
}
</script>

<style scoped lang="less">
.search {
  background-color: #fff;
  padding: 20px;
}
.operate {
  text-align: right;
}
.mb20 {
  margin-bottom: 20px;
}
</style>
