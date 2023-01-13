const searchConfig = {
  pageName: 'goods',
  formItem: [
    { type: 'input', label: '商品名称', prop: 'name', placeholder: '请输入商品名称', initalValue: undefined },
    { type: 'input', label: '商品地址', prop: 'realname', placeholder: '请输入商品地址', initalValue: undefined },
    {
      type: 'select',
      label: '状态',
      prop: 'enable',
      placeholder: '请选择状态',
      options: [
        { label: '可用', value: 1 },
        { label: '下架', value: 0 }
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
