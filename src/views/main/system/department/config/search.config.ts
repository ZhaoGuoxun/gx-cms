const searchConfig = {
  pageName: 'user',
  formItem: [
    { type: 'input', label: '部门名称', prop: 'name', placeholder: '请输入部门名称', initalValue: undefined },
    { type: 'input', label: '部门领导', prop: 'realname', placeholder: '请输入部门领导', initalValue: undefined },
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
