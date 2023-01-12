<template>
  <div class="user-dialog">
    <el-dialog v-model="show" :title="(isAdd ? '新增' : '编辑') + '用户'" width="30%" center>
      <el-form :model="userForm" size="large" label-width="100px">
        <el-form-item label="用户名">
          <el-input v-model="userForm.name" placeholder="请输入用户名" />
        </el-form-item>
        <el-form-item label="真实姓名">
          <el-input v-model="userForm.realname" placeholder="请输入真实姓名" />
        </el-form-item>
        <el-form-item label="密码" v-if="isAdd">
          <el-input v-model="userForm.password" placeholder="请输入密码" type="password" show-password />
        </el-form-item>
        <el-form-item label="手机号码">
          <el-input v-model="userForm.cellphone" placeholder="请输入手机号码" />
        </el-form-item>
        <el-form-item label="选择角色">
          <el-select v-model="userForm.roleId" placeholder="请选择角色" size="large" style="width: 100%">
            <el-option v-for="item in systemStore.roleList" :key="item.id" :label="item.name" :value="item.id" />
          </el-select>
        </el-form-item>
        <el-form-item label="选择部门">
          <el-select v-model="userForm.departmentId" placeholder="请选择部门" size="large" style="width: 100%">
            <el-option v-for="item in systemStore.depList" :key="item.id" :label="item.name" :value="item.id" />
          </el-select>
        </el-form-item>
      </el-form>

      <template #footer>
        <span class="dialog-footer">
          <el-button @click="show = false">取消</el-button>
          <el-button type="primary" @click="handleConfirm">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import type { IUserModel } from '@/types'
import { ref } from 'vue'
import { statusList } from '../data'
import { addUser, editUser } from '@/api/system/user'
import useSystemStore from '@/store/system/system'
import { ElMessage } from 'element-plus'

const emit = defineEmits(['refresh'])

const systemStore = useSystemStore()
systemStore.getRoleListAction({
  offset: 0,
  size: 999
})
systemStore.getDepListAction({
  offset: 0,
  size: 999
})

const show = ref(false)

const defaultForm = (): Partial<IUserModel> => ({
  name: '',
  realname: undefined,
  cellphone: undefined,
  password: undefined,
  roleId: undefined,
  departmentId: undefined
})
const userForm = ref(defaultForm())

const isAdd = ref(true)
const open = (data?: any) => {
  if (data) {
    userForm.value = JSON.parse(JSON.stringify(data))
    isAdd.value = false
  } else {
    isAdd.value = true
    userForm.value = defaultForm()
  }
  show.value = true
}

const handleConfirm = () => {
  if (isAdd.value) {
    addUser(userForm.value).then((res: any) => {
      if (res.code == 0) {
        show.value = false
        emit('refresh')
        ElMessage.success('创建用户成功')
      } else {
        ElMessage.error(res.data)
      }
    })
  } else {
    delete userForm.value.createAt
    delete userForm.value.updateAt
    editUser(userForm.value.id!, userForm.value).then((res: any) => {
      if (res.code == 0) {
        show.value = false
        emit('refresh')
        ElMessage.success('修改用户成功')
      } else {
        ElMessage.error(res.data)
      }
    })
  }
}

defineExpose({
  open
})
</script>

<style scoped></style>
