<template>
  <div class="page-view">
    <page-search v-bind="searchConfig" @query-info="handleQuery" />
    <page-table v-bind="tableConfig" ref="pageTableRef" @new-data-click="handleAdd" @edit-data-click="handleEdit">
      <template #status="scope">
        <el-switch :model-value="!!scope.row.status" />
      </template>
      <template #image="scope">
        <div class="image">
          <img :src="scope.row.imgUrl" />
        </div>
      </template>
    </page-table>
  </div>
</template>

<script setup lang="ts">
import pageSearch from '@/components/pageSearch/index.vue'
import pageTable from '@/components/pageTable/index.vue'

import searchConfig from './config/search.config'
import tableConfig from './config/table.config'

import usePageTable from '@/hooks/usePageTable'
import usePageDialog from '@/hooks/usePageDialog'

const { handleAdd, handleEdit } = usePageTable()
const { pageTableRef, handleQuery } = usePageDialog()
</script>

<style scoped lang="less">
.page-view {
  border-radius: 6px;
  overflow: hidden;
}

.image {
  width: 60px;
  height: 60px;

  img {
    width: 100%;
    height: 100%;
  }
}
</style>
