import type { IUserReq, IUserRes, IUserModel } from '@/types'
import request from '@/utils/service'

export const getUserList = (data: IUserReq) => {
  return request<any, IUserRes>({
    method: 'POST',
    url: '/users/list',
    data
  })
}

export const addUser = (data: Partial<IUserModel>) => {
  return request({
    method: 'POST',
    url: '/users',
    data
  })
}

export const delUser = (userId: number) => {
  return request({
    method: 'delete',
    url: '/users/' + userId
  })
}

export const editUser = (userId: number, data: Partial<IUserModel>) => {
  return request({
    method: 'patch',
    url: '/users/' + userId,
    data
  })
}
