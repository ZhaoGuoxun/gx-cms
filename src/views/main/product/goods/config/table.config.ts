const tableConfig = {
  pageName: 'goods',
  rowKey: 'id',
  title: '商品列表',
  addText: '新增商品',
  showAdd: false,
  columns: [
    { type: 'selection', width: 40 },
    { type: 'index', width: 60, label: '序号' },
    { label: '商品名称', prop: 'name', width: 100 },
    { label: '原价格', prop: 'oldPrice' },
    { label: '新价格', prop: 'newPrice' },
    { label: '商品描述', prop: 'desc' },
    { type: 'custom', slotName: 'status', width: 100, label: '状态', prop: 'status' },
    { type: 'custom', slotName: 'image', width: 100, label: '图片', prop: 'imgUrl' },
    { label: '库存', prop: 'inventoryCount' },
    { label: '销量', prop: 'saleCount' },
    { label: '收藏', prop: 'favorCount' },
    { label: '地址', prop: 'address' },
    { type: 'utcTime', label: '创建时间', prop: 'createAt', width: 170 },
    { type: 'utcTime', label: '更新时间', prop: 'updateAt', width: 170 },
    { type: 'handler', label: '操作', width: 180 }
  ]
}

export default tableConfig
