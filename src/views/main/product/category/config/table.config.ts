const tableConfig = {
  pageName: 'category',
  rowKey: 'id',
  title: '类别列表',
  addText: '新增类别',
  columns: [
    { type: 'selection', width: 60 },
    { type: 'index', width: 80, label: '序号' },
    { label: '类别名称', prop: 'name' },
    { type: 'utcTime', label: '创建时间', prop: 'createAt' },
    { type: 'utcTime', label: '更新时间', prop: 'updateAt' },
    { type: 'handler', label: '操作', width: 180 }
  ]
}

export default tableConfig
