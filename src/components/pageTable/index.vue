<template>
  <div class="page-table">
    <h3 class="title">
      {{ props.title }}
      <el-button v-if="showAdd && hasCreate" class="add-btn" type="primary" size="large" @click="handleAdd">{{
        props.addText
      }}</el-button>
    </h3>
    <el-table :data="tableData" border style="width: 100%" :row-key="props.rowKey">
      <template v-for="item in props.columns" :key="item.prop">
        <template v-if="item.type == 'selection'">
          <el-table-column align="center" type="selection" :width="item.width" />
        </template>
        <template v-else-if="item.type == 'index'">
          <el-table-column align="center" type="index" :label="item.label" :width="item.width" />
        </template>
        <template v-else-if="item.type == 'utcTime'">
          <el-table-column align="center" prop="createAt" :label="item.label" :width="item.width">
            <template #default="scope">
              <span>{{ formatDate(scope.row.createAt) }}</span>
            </template>
          </el-table-column>
        </template>
        <template v-else-if="item.type == 'custom'">
          <el-table-column align="center" :label="item.label" :width="item.width">
            <template #default="scope">
              <slot :name="item.slotName" v-bind="scope"></slot>
            </template>
          </el-table-column>
        </template>
        <template v-else-if="item.type == 'handler'">
          <el-table-column align="center" :label="item.label" :width="item.width">
            <template #default="scope">
              <el-button v-if="hasEdit" link type="primary" icon="Edit" @click="handleEdit(scope.row)">编辑</el-button>
              <el-button v-if="hasDelete" link type="danger" icon="Delete" @click="handleDelete(scope.row)"
                >删除</el-button
              ></template
            >
          </el-table-column>
        </template>
        <template v-else>
          <el-table-column
            show-overflow-tooltip
            align="center"
            :prop="item.prop"
            :label="item.label"
            :width="item.width"
          />
        </template>
      </template>
    </el-table>

    <el-pagination
      v-if="props.showPage"
      v-model:current-page="pageInfo.pageNum"
      v-model:page-size="pageInfo.pageSize"
      :page-sizes="[10, 20, 50, 100]"
      layout="total, sizes, prev, pager, next, jumper"
      :total="pageInfo.total"
      @current-change="fetchPageList"
      @size-change="fetchPageList"
    />
  </div>
</template>

<script setup lang="ts">
import { delPageData, getPageList } from '@/api/main'
import { ref } from 'vue'
import { formatUtcTime } from '@/utils/time'
import { ElMessage } from 'element-plus'
import usePermission from '@/hooks/usePermission'

interface IProps {
  pageName: string
  rowKey: string
  title: string
  addText: string
  columns: any[]
  showPage?: boolean
  showAdd?: boolean
}
const props = withDefaults(defineProps<IProps>(), {
  showPage: true,
  showAdd: true
})

const emits = defineEmits(['newDataClick', 'editDataClick'])

const hasCreate = usePermission(props.pageName, 'create')
const hasEdit = usePermission(props.pageName, 'update')
const hasDelete = usePermission(props.pageName, 'delete')
const hasQuery = usePermission(props.pageName, 'query')

const tableData = ref<any[]>([])
const pageInfo = ref({
  pageNum: 1,
  pageSize: 10,
  total: 0
})
function fetchPageList(formData: any = {}) {
  if (!hasQuery) return
  const size = pageInfo.value.pageSize
  getPageList(props.pageName, {
    offset: (pageInfo.value.pageNum - 1) * size,
    size,
    ...formData
  }).then(res => {
    tableData.value = res.data.list
    pageInfo.value.total = res.data.totalCount
  })
}
fetchPageList()

const handleAdd = () => {
  emits('newDataClick')
}
const handleEdit = (row: any) => {
  emits('editDataClick', row)
}

const handleDelete = (row: any) => {
  delPageData(props.pageName, row.id).then(res => {
    ElMessage.success('删除成功')
    pageInfo.value.pageNum = 1
    fetchPageList()
  })
}

function formatDate(date: string) {
  return formatUtcTime(date)
}
defineExpose({ fetchPageList })
</script>

<style scoped lang="less">
.page-table {
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
