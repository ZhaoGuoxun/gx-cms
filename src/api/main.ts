import request from '@/utils/service'

export const getPageList = (pageName: string, data: any) => {
  return request({
    method: 'POST',
    url: `/${pageName}/list`,
    data
  })
}

export const newPageData = (pageName: string, data: any) => {
  return request({
    method: 'POST',
    url: `/${pageName}`,
    data
  })
}

export const delPageData = (pageName: string, id: number) => {
  return request({
    method: 'delete',
    url: `/${pageName}/${id}`
  })
}

export const editPageData = (pageName: string, id: number, data: any) => {
  return request({
    method: 'patch',
    url: `/${pageName}/${id}`,
    data
  })
}

/** 获取部门的信息 */
export function getDepartmentData() {
  return request({
    url: '/department/list',
    method: 'POST'
  })
}

/** 获取角色的信息 */
export function getRoleData() {
  return request({
    url: '/role/list',
    method: 'POST'
  })
}

/** 获取菜单的信息 */
export function getMenuData() {
  return request({
    method: 'POST',
    url: '/menu/list'
  })
}
