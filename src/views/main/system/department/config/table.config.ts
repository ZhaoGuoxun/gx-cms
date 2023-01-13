const tableConfig = {
  pageName: 'department',
  rowKey: 'id',
  title: '部门列表',
  addText: '新增部门',
  columns: [
    { type: 'selection', width: 60 },
    { type: 'index', width: 60, label: '序号' },
    { width: 150, label: '部门名称', prop: 'name' },
    { width: 150, label: '部门领导', prop: 'leader' },
    { width: 200, label: '上级部门', prop: 'parentId' },
    { type: 'utcTime', label: '创建时间', prop: 'createAt' },
    { type: 'utcTime', label: '更新时间', prop: 'updateAt' },
    { type: 'handler', label: '操作', width: 180 }
  ]
}

export default tableConfig
