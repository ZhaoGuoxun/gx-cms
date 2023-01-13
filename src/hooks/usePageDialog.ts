import { ref } from 'vue'
import type pageTable from '@/components/pageTable/index.vue'

const usePageDialog = () => {
  const pageTableRef = ref<InstanceType<typeof pageTable>>()

  const handleQuery = (formData: any) => {
    pageTableRef.value?.fetchPageList(formData)
  }

  const fetchPageList = () => {
    pageTableRef.value?.fetchPageList()
  }
  return { pageTableRef, handleQuery, fetchPageList }
}

export default usePageDialog
