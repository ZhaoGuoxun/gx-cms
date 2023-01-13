import { ref } from 'vue'
import type pageDialog from '@/components/pageDialog/index.vue'

type callback = (data?: any) => void

const usePageTable = (newCallback?: callback, editCallback?: callback) => {
  const pageDialogRef = ref<InstanceType<typeof pageDialog>>()

  const handleAdd = () => {
    pageDialogRef.value?.open()
    newCallback && newCallback()
  }
  const handleEdit = (data: any, cb?: callback) => {
    pageDialogRef.value?.open(data)
    editCallback && editCallback(data)
  }

  return { pageDialogRef, handleAdd, handleEdit }
}

export default usePageTable
