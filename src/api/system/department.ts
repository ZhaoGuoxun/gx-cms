import request from '@/utils/service'

export const getDepList = (data: any) => {
  return request({
    method: 'POST',
    url: '/department/list',
    data
  })
}
