const dialogConfig = {
  pageName: 'menu',
  nameKey: '菜单',
  newTitle: '新建菜单',
  editTitle: '编辑菜单',
  formItem: [
    { type: 'input', label: '菜单名称', prop: 'name', placeholder: '请输入菜单名称', initalValue: undefined },
    { type: 'input', label: '菜单url', prop: 'url', placeholder: '请输入菜单url', initalValue: undefined },
    {
      type: 'radio',
      label: '菜单级别',
      prop: 'type',
      placeholder: '请选择菜单级别',
      initalValue: 1,
      options: [
        { label: '目录', value: 1 },
        { label: '菜单', value: 2 },
        { label: '按钮', value: 3 }
      ]
    },
    { type: 'input', label: '排序', prop: 'sort', placeholder: '请设置菜单排序', initalValue: undefined },
    {
      type: 'treeselect',
      label: '上级菜单',
      prop: 'parentId',
      placeholder: '请选择上级菜单',
      initalValue: undefined,
      options: []
    }
  ]
}

export default dialogConfig
