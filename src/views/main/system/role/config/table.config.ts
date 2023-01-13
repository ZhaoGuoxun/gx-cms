const tableConfig = {
  showPage: true,
  pageName: 'role',
  rowKey: 'id',
  title: '角色列表',
  addText: '新增角色',
  columns: [
    { type: 'selection', width: 60 },
    { type: 'index', width: 60, label: '序号' },
    { label: '角色名称', prop: 'name' },
    { label: '角色权限', prop: 'intro' },
    { type: 'utcTime', label: '创建时间', prop: 'createAt' },
    { type: 'utcTime', label: '更新时间', prop: 'updateAt' },
    { type: 'handler', label: '操作', width: 180 }
  ]
}

export default tableConfig
