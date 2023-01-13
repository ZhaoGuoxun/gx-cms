import { getRoleData, getDepartmentData } from '@/api/main'
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
    getRoleListAction() {
      getRoleData().then(res => {
        this.roleList = res.data.list
      })
    },
    getDepListAction() {
      getDepartmentData().then(res => {
        this.depList = res.data.list
      })
    }
  }
})

export default useSystemStore
