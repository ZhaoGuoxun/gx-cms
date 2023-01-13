const searchConfig = {
  pageName: 'user',
  formItem: [
    { type: 'input', label: '用户名', prop: 'name', placeholder: '请输入用户名', initalValue: undefined },
    { type: 'input', label: '真实姓名', prop: 'realname', placeholder: '请输入真实姓名', initalValue: undefined },
    { type: 'input', label: '手机号码', prop: 'cellphone', placeholder: '请输入手机号码', initalValue: undefined },
    {
      type: 'select',
      label: '状态',
      prop: 'enable',
      placeholder: '请选择状态',
      options: [
        { label: '启用', value: 1 },
        { label: '禁用', value: 0 }
      ],
      initalValue: undefined
    },
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
