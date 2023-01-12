import request from '@/utils/service'
import type { ILoginData, ILoginRes, IUserInfo, IUserMenu } from '@/types'

export const doLogin = (data: ILoginData) => {
  return request<any, ILoginRes>({
    method: 'POST',
    url: '/login',
    data
  })
}

export const getUserInfo = (id: number) => {
  return request<any, IUserInfo>({
    method: 'GET',
    url: '/users/' + id
  })
}

export const getUserMenu = (roleId: number) => {
  return request<any, IUserMenu>({
    method: 'GET',
    url: `/role/${roleId}/menu`
  })
}
