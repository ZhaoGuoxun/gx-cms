import request from '@/utils/service'

export const getRoleList = (data: any) => {
  return request({
    method: 'POST',
    url: '/role/list',
    data
  })
}
