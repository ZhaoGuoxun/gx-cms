<template>
  <div class="search">
    <el-form :model="userForm" size="large" label-width="100px">
      <el-row :gutter="60">
        <el-col :span="8">
          <el-form-item label="用户名">
            <el-input v-model="userForm.name" placeholder="请输入用户名" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="真实姓名">
            <el-input v-model="userForm.realname" placeholder="请输入真实姓名" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="手机号码">
            <el-input v-model="userForm.cellphone" placeholder="请输入手机号码" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="状态">
            <el-select v-model="userForm.enable" placeholder="请选择状态" style="width: 100%">
              <el-option v-for="item in statusList" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="创建时间">
            <el-date-picker
              v-model="userForm.createAt"
              type="daterange"
              start-placeholder="开始时间"
              end-placeholder="结束时间"
            />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div class="operate">
      <el-button size="large" icon="RefreshLeft" @click="handleReset">重置</el-button>
      <el-button size="large" type="primary" icon="Search" @click="handleSearch">确定</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { statusList } from '../data'

const emit = defineEmits(['queryInfo'])

const defaultForm = () => ({
  name: '',
  realname: undefined,
  cellphone: undefined,
  enable: undefined,
  createAt: undefined
})
const userForm = ref(defaultForm())

const handleReset = () => {
  userForm.value = defaultForm()
}
const handleSearch = () => {
  emit('queryInfo', userForm.value)
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
</style>
