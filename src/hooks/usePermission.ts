import useLoginStore from '@/store/login'

const usePermission = (pageName: string, operation: string) => {
  const { permissions } = useLoginStore()
  const p = `system:${pageName}:${operation}`
  return permissions.includes(p)
}

export default usePermission
