const tableConfig = {
  pageName: 'users',
  rowKey: 'id',
  title: '用户列表',
  addText: '新增用户',
  columns: [
    { type: 'selection', width: 60 },
    { type: 'index', width: 60, label: '序号' },
    { width: 150, label: '用户名', prop: 'name' },
    { width: 150, label: '真实名', prop: 'realname' },
    { width: 200, label: '手机号码', prop: 'cellphone' },
    { type: 'custom', slotName: 'status', width: 100, label: '状态', prop: 'enable' },
    { type: 'utcTime', label: '创建时间', prop: 'createAt' },
    { type: 'utcTime', label: '更新时间', prop: 'updateAt' },
    { type: 'handler', label: '操作', width: 180 }
  ]
}

export default tableConfig
