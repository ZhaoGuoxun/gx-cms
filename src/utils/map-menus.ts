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

// 菜单数据转为树形数据
export const mapMenusToTree = (menus: any[]) => {
  const data: any = menus.map(item => {
    return {
      label: item.name,
      value: item.id,
      children: mapMenusToTree(item.children || [])
    }
  })
  return data
}

// 递归获取菜单id
export const mapMenusToIds = (menus: any[]) => {
  const ids: number[] = []
  menus.forEach(item => {
    ids.push(item.id, ...mapMenusToIds(item.children || []))
  })
  return ids
}

// 获取所有权限
export const mapMenusToPermissions = (menus: any[]) => {
  const permissions: string[] = []
  menus.forEach(item => {
    item.permission && permissions.push(item.permission)
    permissions.push(...mapMenusToPermissions(item.children || []))
  })
  return permissions
}
