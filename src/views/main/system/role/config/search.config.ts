const searchConfig = {
  pageName: 'role',
  formItem: [
    { type: 'input', label: '角色名称', prop: 'name', placeholder: '请输入角色名称', initalValue: undefined },
    { type: 'input', label: '权限介绍', prop: 'intro', placeholder: '请输入权限介绍', initalValue: undefined },
    {
      type: 'datepicker',
      label: '创建时间',
      prop: 'createAt',
      attach: {
        type: 'daterange',
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间'
      },
      initalValue: undefined
    }
  ],
  labelWidth: '100px'
}

export default searchConfig
