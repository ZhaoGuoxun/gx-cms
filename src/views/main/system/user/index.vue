<template>
  <div class="user-view">
    <user-search class="mb20" @query-info="handleQuery" />
    <user-table ref="userTableRef" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import userSearch from './components/user-search.vue'
import userTable from './components/user-table.vue'

const userTableRef = ref<InstanceType<typeof userTable>>()

const handleQuery = (formData: any) => {
  userTableRef.value?.fetchUserList(formData)
}
</script>

<style scoped lang="less">
.user-view {
  border-radius: 6px;
  overflow: hidden;
}
.mb20 {
  margin-bottom: 20px;
}
</style>
