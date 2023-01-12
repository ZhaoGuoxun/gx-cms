import { getDepList } from '@/api/system/department'
import { getRoleList } from '@/api/system/role'
import { defineStore } from 'pinia'

interface ISystemStore {
  roleList: any[]
  depList: any[]
}

const useSystemStore = defineStore('system', {
  state: (): ISystemStore => ({
    roleList: [],
    depList: []
  }),
  actions: {
    getRoleListAction(data: any) {
      getRoleList(data).then(res => {
        this.roleList = res.data.list
      })
    },
    getDepListAction(data: any) {
      getDepList(data).then(res => {
        this.depList = res.data.list
      })
    }
  }
})

export default useSystemStore
