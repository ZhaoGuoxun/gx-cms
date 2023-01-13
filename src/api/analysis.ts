import request from '@/utils/service'

export const getGoodsAmountList = () => {
  return request({
    url: '/goods/amount/list',
    method: 'GET'
  })
}

// 获取商品分类数量
export const getCategoryCount = () => {
  return request({
    url: '/goods/category/count',
    method: 'GET'
  })
}

// 获取商品分类销量
export const getCategorySale = () => {
  return request({
    url: '/goods/category/sale',
    method: 'GET'
  })
}

// 获取不同城市销量
export const getCitySale = () => {
  return request({
    url: '/goods/address/sale',
    method: 'GET'
  })
}
