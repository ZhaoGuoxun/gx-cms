<template>
  <div class="user-table">
    <h3 class="title">
      用户列表
      <el-button class="add-btn" type="primary" size="large" @click="handleAdd">新增用户</el-button>
    </h3>
    <el-table :data="tableData" border style="width: 100%" row-key="id">
      <el-table-column align="center" type="selection" width="60" />
      <el-table-column align="center" type="index" label="序号" width="60" />
      <el-table-column align="center" prop="name" label="用户名" width="150" />
      <el-table-column align="center" prop="realname" label="真实名" width="150" />
      <el-table-column align="center" prop="cellphone" label="手机号码" width="200" />
      <el-table-column align="center" prop="enable" label="状态" width="100">
        <template #default="scope">
          <el-button size="small" v-if="scope.row.enable == 1" type="success" plain>启用</el-button>
          <el-button size="small" v-else type="danger" plain>禁用</el-button>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="createAt" label="创建时间">
        <template #default="scope">
          <span>{{ formatDate(scope.row.createAt) }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="updateAt" label="更新时间">
        <template #default="scope">
          <span>{{ formatDate(scope.row.updateAt) }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作">
        <template #default="scope">
          <el-button link type="primary" icon="Edit" @click="handleEdit(scope.row)">编辑</el-button>
          <el-button link type="danger" icon="Delete" @click="handleDelete(scope.row)">删除</el-button></template
        >
      </el-table-column>
    </el-table>

    <el-pagination
      v-model:current-page="pageInfo.pageNum"
      v-model:page-size="pageInfo.pageSize"
      :page-sizes="[10, 20, 50, 100]"
      layout="total, sizes, prev, pager, next, jumper"
      :total="pageInfo.total"
      @current-change="fetchUserList"
      @size-change="fetchUserList"
    />
  </div>

  <user-dialog ref="dialogRef" @refresh="fetchUserList" />
</template>

<script setup lang="ts">
import { delUser, getUserList } from '@/api/system/user'
import type { IUserModel } from '@/types'
import { ref } from 'vue'
import { formatUtcTime } from '@/utils/time'
import userDialog from './user-dialog.vue'
import { ElMessage } from 'element-plus'

const tableData = ref<IUserModel[]>([])
const pageInfo = ref({
  pageNum: 1,
  pageSize: 10,
  total: 0
})
function fetchUserList(formData: any = {}) {
  const size = pageInfo.value.pageSize
  getUserList({
    offset: (pageInfo.value.pageNum - 1) * size,
    size,
    ...formData
  }).then(res => {
    tableData.value = res.data.list
    pageInfo.value.total = res.data.totalCount
  })
}
fetchUserList()

// 新增/编辑用户
const dialogRef = ref<InstanceType<typeof userDialog>>()

const handleAdd = () => {
  dialogRef.value?.open()
}
const handleEdit = (row: any) => {
  dialogRef.value?.open(row)
}
const handleDelete = (row: any) => {
  delUser(row.id).then(res => {
    ElMessage.success('删除成功')
    pageInfo.value.pageNum = 1
    fetchUserList()
  })
}

function formatDate(date: string) {
  return formatUtcTime(date)
}
defineExpose({ fetchUserList })
</script>

<style scoped lang="less">
.user-table {
  background-color: #fff;
  padding: 20px;
}
.title {
  margin: 5px 0 20px;
  font-weight: bold;
  font-size: 1.2em;
}
.el-pagination {
  margin-top: 20px;
  justify-content: end;
}

.add-btn {
  float: right;
  position: relative;
  bottom: 10px;
}
</style>
