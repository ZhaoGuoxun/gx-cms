<template>
  <div class="page-view">
    <page-table v-bind="tableConfig" ref="pageTableRef" @new-data-click="handleAdd" @edit-data-click="handleEdit" />
    <page-dialog v-bind="dialogConfigRef" ref="pageDialogRef" @refresh="fetchPageList" />
  </div>
</template>

<script setup lang="ts">
import { getMenuData } from '@/api/main'
import { mapMenusToTree } from '@/utils/map-menus'
import pageTable from '@/components/pageTable/index.vue'
import pageDialog from '@/components/pageDialog/index.vue'

import tableConfig from './config/table.config'
import dialogConfig from './config/dialog.config'

import usePageTable from '@/hooks/usePageTable'
import usePageDialog from '@/hooks/usePageDialog'
import { computed, ref } from 'vue'

const { pageDialogRef, handleAdd, handleEdit } = usePageTable()
const { pageTableRef, fetchPageList } = usePageDialog()

const menuList = ref<any>([])
getMenuData().then(res => {
  menuList.value = mapMenusToTree(res.data.list)
})

const dialogConfigRef = computed(() => {
  dialogConfig.formItem.forEach(item => {
    if (item.prop == 'parentId') {
      item.options = menuList.value
    }
  })
  return dialogConfig
})
</script>

<style scoped lang="less">
.page-view {
  border-radius: 6px;
  overflow: hidden;
}
</style>
