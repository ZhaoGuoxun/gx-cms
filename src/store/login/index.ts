import { doLogin, getUserInfo, getUserMenu } from '@/api/login'
import type { ILoginData, ILoginRes } from '@/types'
import { defineStore } from 'pinia'
import { localCache } from '@/utils/Cache'
import router from '@/router'
import { mapMenusToPermissions, mapMenusToRoutes } from '@/utils/map-menus'

interface ILoginStore {
  userId: number
  token: string
  userInfo: any
  userMenus: any
  permissions: string[]
}

const useLoginStore = defineStore('login', {
  state: (): ILoginStore => ({
    userId: localCache.getItem('userId'),
    token: localCache.getItem('token'),
    userInfo: {},
    userMenus: [],
    permissions: []
  }),
  actions: {
    async accountLoginAction(account: ILoginData) {
      const res: ILoginRes = await doLogin(account)
      this.token = res.data.token
      this.userId = res.data.id

      localCache.setItem('userId', this.userId)
      localCache.setItem('token', this.token)

      await this.getUserInfoAction()
      router.push('/main')
    },
    async getUserInfoAction() {
      if (!this.userId) return this.logoutAction()
      // 获取用户详情
      this.userInfo = (await getUserInfo(this.userId)).data

      // 获取用户的菜单权限
      const userMenus = await getUserMenu(this.userInfo.role.id)
      this.userMenus = userMenus.data

      // 动态注册路由
      const routes = mapMenusToRoutes(this.userMenus)
      routes.forEach(r => {
        router.addRoute('main', r)
      })

      // 获取权限
      this.permissions = mapMenusToPermissions(this.userMenus)
    },
    logoutAction() {
      localCache.removeItem('token')
      localCache.removeItem('userId')
      router.push('/login')
    }
  }
})

export const setupStore = () => {
  return useLoginStore().getUserInfoAction()
}

export default useLoginStore
