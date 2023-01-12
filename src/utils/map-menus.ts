import type { RouteRecordRaw } from 'vue-router'

export let firstMenu: any = undefined

export const mapMenusToRoutes = (userMenus: any[]) => {
  const modules: Record<string, any> = import.meta.glob(`@/views/main/**/index.vue`, { eager: true })
  const keys = Object.keys(modules)

  const routes: RouteRecordRaw[] = []
  userMenus.forEach((menu: any) => {
    return menu.children.map((item: any) => {
      const r = keys.find((k: any) => k.includes(item.url + '/index.vue'))
      if (r) {
        const route = { path: item.url, component: modules[r].default }
        if (!firstMenu) firstMenu = route
        routes.push(route)
      }
    })
  })

  return routes
}

// 获取面包屑数据
export const getBreadCrumps = (path: string, userMenus: any[]) => {
  const paths: any[] = []
  const menu = userMenus.find((menu: any) => {
    return menu.children?.find((subMenu: any) => {
      if (subMenu.url == path) {
        return paths.push(subMenu)
      }
    })
  })
  menu && paths.unshift(menu)
  return paths
}
