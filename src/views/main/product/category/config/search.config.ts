const searchConfig = {
  pageName: 'category',
  formItem: [
    { type: 'input', label: '类别名称', prop: 'name', placeholder: '请输入类别名称', initalValue: undefined },
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
