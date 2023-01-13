const tableConfig = {
  showPage: false,
  pageName: 'menu',
  rowKey: 'id',
  title: '菜单列表',
  addText: '新增菜单',
  columns: [
    { label: '菜单名称', prop: 'name', width: 150 },
    { label: '级别', prop: 'type', width: 150 },
    { label: '菜单url', prop: 'url', width: 200 },
    { label: '菜单icon', prop: 'icon' },
    { label: '排序', prop: 'sort' },
    { type: 'utcTime', label: '创建时间', prop: 'createAt' },
    { type: 'utcTime', label: '更新时间', prop: 'updateAt' },
    { type: 'handler', label: '操作', width: 180 }
  ]
}

export default tableConfig
