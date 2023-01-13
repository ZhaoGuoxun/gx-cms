const dialogConfig = {
  pageName: 'department',
  nameKey: '部门',
  newTitle: '新建部门',
  editTitle: '编辑部门',
  formItem: [
    { type: 'input', label: '部门名称', prop: 'name', placeholder: '请输入部门名称', initalValue: undefined },
    {
      type: 'select',
      label: '上级部门',
      prop: 'parentId',
      placeholder: '请选择上级部门',
      initalValue: undefined,
      options: []
    },
    { type: 'input', label: '领导名称', prop: 'leader', placeholder: '请输入领导名称', initalValue: undefined }
  ]
}

export default dialogConfig
