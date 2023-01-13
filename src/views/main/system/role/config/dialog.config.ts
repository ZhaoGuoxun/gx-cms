const dialogConfig = {
  pageName: 'role',
  nameKey: '角色',
  newTitle: '新增角色',
  editTitle: '编辑角色',
  formItem: [
    { type: 'input', label: '角色名称', prop: 'name', placeholder: '请输入角色名称', initalValue: undefined },
    { type: 'input', label: '角色描述', prop: 'intro', placeholder: '请输入角色描述', initalValue: undefined },
    { type: 'custom', slotName: 'menu' }
  ],
  labelWidth: '80px'
}

export default dialogConfig
