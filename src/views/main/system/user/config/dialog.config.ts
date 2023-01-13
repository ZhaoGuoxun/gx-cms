const dialogConfig = {
  pageName: 'users',
  nameKey: '用户',
  newTitle: '新增用户',
  editTitle: '编辑用户',
  formItem: [
    { type: 'input', label: '用户名', prop: 'name', placeholder: '请输入用户名', initalValue: undefined },
    { type: 'input', label: '真实姓名', prop: 'realname', placeholder: '请输入真实姓名', initalValue: undefined },
    {
      type: 'password',
      label: '密码',
      prop: 'password',
      placeholder: '请输入密码',
      initalValue: undefined,
      isHide: false
    },
    { type: 'input', label: '手机号码', prop: 'cellphone', placeholder: '请输入手机号码', initalValue: undefined },
    {
      type: 'select',
      label: '选择角色',
      prop: 'roleId',
      placeholder: '请选择角色',
      initalValue: undefined,
      options: []
    },
    {
      type: 'select',
      label: '选择部门',
      prop: 'departmentId',
      placeholder: '请选择部门',
      initalValue: undefined,
      options: []
    }
  ]
}

export default dialogConfig
