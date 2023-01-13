<template>
  <div class="page-view">
    <page-search v-bind="searchConfig" @query-info="handleQuery" />
    <page-table v-bind="tableConfig" ref="pageTableRef" @new-data-click="handleAdd" @edit-data-click="handleEdit">
      <template #status="scope">
        <el-button size="small" v-if="scope.row.enable == 1" type="success" plain>启用</el-button>
        <el-button size="small" v-else type="danger" plain>禁用</el-button>
      </template>
    </page-table>
    <page-dialog v-bind="dialogConfigRef" ref="pageDialogRef" @refresh="fetchPageList" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import pageSearch from '@/components/pageSearch/index.vue'
import pageTable from '@/components/pageTable/index.vue'
import pageDialog from '@/components/pageDialog/index.vue'

import searchConfig from './config/search.config'
import tableConfig from './config/table.config'
import dialogConfig from './config/dialog.config'

import usePageTable from '@/hooks/usePageTable'
import usePageDialog from '@/hooks/usePageDialog'

import useSystemStore from '@/store/system/system'

const newCallback = () => {
  let item = dialogConfigRef.value.formItem.find(o => o.prop == 'password')!
  item.isHide = false
}
const editCallback = () => {
  let item = dialogConfigRef.value.formItem.find(o => o.prop == 'password')!
  item.isHide = true
}

const systemStore = useSystemStore()
systemStore.getRoleListAction()
systemStore.getDepListAction()

const dialogConfigRef = computed(() => {
  dialogConfig.formItem.forEach(item => {
    if (item.prop == 'roleId') {
      item.options = systemStore.roleList.map(o => ({ label: o.name, value: o.id })) as any
    } else if (item.prop == 'departmentId') {
      item.options = systemStore.depList.map(o => ({ label: o.name, value: o.id })) as any
    }
  })
  return dialogConfig
})

const { pageDialogRef, handleAdd, handleEdit } = usePageTable(newCallback, editCallback)
const { pageTableRef, handleQuery, fetchPageList } = usePageDialog()
</script>

<style scoped lang="less">
.page-view {
  border-radius: 6px;
  overflow: hidden;
}
</style>
