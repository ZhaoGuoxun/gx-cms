<template>
  <div class="page-view">
    <page-search v-bind="searchConfig" @query-info="handleQuery" />
    <page-table v-bind="tableConfig" ref="pageTableRef" @new-data-click="handleAdd" @edit-data-click="handleEdit" />
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

const systemStore = useSystemStore()
systemStore.getDepListAction()

const dialogConfigRef = computed(() => {
  dialogConfig.formItem.forEach(item => {
    if (item.prop == 'parentId') {
      item.options = systemStore.depList.map(o => ({ label: o.name, value: o.id })) as any
    }
  })
  return dialogConfig
})

const { pageDialogRef, handleAdd, handleEdit } = usePageTable()
const { pageTableRef, handleQuery, fetchPageList } = usePageDialog()
</script>

<style scoped lang="less">
.page-view {
  border-radius: 6px;
  overflow: hidden;
}
</style>
