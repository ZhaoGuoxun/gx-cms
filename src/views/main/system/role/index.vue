<template>
  <div class="page-view">
    <page-search v-bind="searchConfig" @query-info="handleQuery" />
    <page-table v-bind="tableConfig" ref="pageTableRef" @new-data-click="handleAdd" @edit-data-click="handleEdit" />
    <page-dialog v-bind="dialogConfig" ref="pageDialogRef" @refresh="fetchPageList">
      <template #menu="scope">
        <el-tree
          ref="treeRef"
          :data="menuList"
          show-checkbox
          node-key="value"
          @check="(data: any, { checkedKeys, halfCheckedKeys }: any) => handleCheckChange(scope, checkedKeys, halfCheckedKeys)"
        />
      </template>
    </page-dialog>
  </div>
</template>

<script setup lang="ts">
import pageSearch from '@/components/pageSearch/index.vue'
import pageTable from '@/components/pageTable/index.vue'
import pageDialog from '@/components/pageDialog/index.vue'

import searchConfig from './config/search.config'
import tableConfig from './config/table.config'
import dialogConfig from './config/dialog.config'

import usePageTable from '@/hooks/usePageTable'
import usePageDialog from '@/hooks/usePageDialog'

import { nextTick, ref } from 'vue'
import { getMenuData } from '@/api/main'
import { mapMenusToTree, mapMenusToIds } from '@/utils/map-menus'
import type { ElTree } from 'element-plus'

const handleCheckChange = (scope: any, checkedKeys: any, halfCheckedKeys: any) => {
  scope.formData.menuList = [...checkedKeys, ...halfCheckedKeys]
}
const menuList = ref<any>([])
getMenuData().then(res => {
  menuList.value = mapMenusToTree(res.data.list)
})

const treeRef = ref<InstanceType<typeof ElTree>>()
const newCallback = () => {
  treeRef.value?.setCheckedKeys([])
}
const editCallback = (data: any) => {
  let ids = mapMenusToIds(data.menuList)
  nextTick(() => {
    treeRef.value?.setCheckedKeys(ids)
  })
}

const { pageDialogRef, handleAdd, handleEdit } = usePageTable(newCallback, editCallback)
const { pageTableRef, handleQuery, fetchPageList } = usePageDialog()
</script>

<style scoped lang="less">
.page-view {
  border-radius: 6px;
  overflow: hidden;
}
</style>
