<template>
  <div class="page-dialog">
    <el-dialog v-model="show" :title="isAdd ? props.newTitle : props.editTitle" width="30%" center>
      <el-form :model="formData" size="large" :label-width="props.labelWidth">
        <template v-for="item in props.formItem" :key="item.prop">
          <template v-if="item.type == 'input'">
            <el-form-item :label="item.label" :prop="item.prop">
              <el-input v-model="formData[item.prop]" :placeholder="item.placeholder" />
            </el-form-item>
          </template>
          <template v-else-if="item.type == 'radio'">
            <el-form-item :label="item.label" :prop="item.prop">
              <el-radio-group v-model="formData[item.prop]">
                <template v-for="opt in item.options" :key="opt.value">
                  <el-radio :label="opt.value">{{ opt.label }}</el-radio>
                </template>
              </el-radio-group>
            </el-form-item>
          </template>
          <template v-else-if="item.type == 'password'">
            <el-form-item :label="item.label" :prop="item.prop" v-if="!item.isHide">
              <el-input v-model="formData[item.prop]" :placeholder="item.placeholder" type="password" show-password />
            </el-form-item>
          </template>
          <template v-else-if="item.type == 'select'">
            <el-form-item :label="item.label" :prop="item.prop">
              <el-select v-model="formData[item.prop]" :placeholder="item.placeholder" style="width: 100%">
                <el-option v-for="opt in item.options" :key="opt.value" :label="opt.label" :value="opt.value" />
              </el-select>
            </el-form-item>
          </template>
          <template v-else-if="item.type == 'treeselect'">
            <el-form-item :label="item.label">
              <el-tree-select
                style="width: 100%"
                v-model="formData[item.prop]"
                :data="item.options"
                check-strictly
                :render-after-expand="false"
                clearable
              />
            </el-form-item>
          </template>
          <template v-else-if="item.type == 'datepicker'">
            <el-form-item :label="item.label">
              <el-date-picker
                v-model="formData[item.prop]"
                :type="item.attach.type"
                :start-placeholder="item.attach.startPlaceholder"
                :end-placeholder="item.attach.endPlaceholder"
              />
            </el-form-item>
          </template>
          <template v-else-if="item.type == 'custom'">
            <slot :name="item.slotName" v-bind="{ formData }"></slot>
          </template>
        </template>
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
import { ref } from 'vue'
import { newPageData, editPageData } from '@/api/main'
import { ElMessage } from 'element-plus'

interface IProps {
  pageName: string
  nameKey: string
  newTitle: string
  editTitle: string
  formItem: any[]
  labelWidth?: string
}
const props = withDefaults(defineProps<IProps>(), {
  labelWidth: '100px'
})
const emit = defineEmits(['refresh'])

const show = ref(false)

const defaultForm = () => {
  const form: any = {}
  for (const item of props.formItem) {
    if (item.prop) form[item.prop] = item.initalValue || ''
  }
  return form
}
const formData = ref(defaultForm())

const isAdd = ref(true)
const open = (data?: any) => {
  if (data) {
    formData.value = JSON.parse(JSON.stringify(data))
    isAdd.value = false
  } else {
    isAdd.value = true
    formData.value = defaultForm()
  }
  show.value = true
}

const handleConfirm = () => {
  if (isAdd.value) {
    newPageData(props.pageName, formData.value).then((res: any) => {
      if (res.code == 0) {
        show.value = false
        emit('refresh')
        ElMessage.success(`创建${props.nameKey}成功`)
      } else {
        ElMessage.error(res.data)
      }
    })
  } else {
    delete formData.value.createAt
    delete formData.value.updateAt
    editPageData(props.pageName, formData.value.id!, formData.value).then((res: any) => {
      if (res.code == 0) {
        show.value = false
        emit('refresh')
        ElMessage.success(`修改${props.nameKey}成功`)
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
