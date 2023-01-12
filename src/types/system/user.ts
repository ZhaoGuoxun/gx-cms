export interface IUserReq {
  offset: number
  size: number
  name?: string
  cellphone?: number
}

export interface IUserRes {
  code: number
  data: {
    list: IUserModel[]
    totalCount: number
  }
}

export interface IUserModel {
  id: number
  name: string
  realname: string
  cellphone: number
  departmentId: number
  enable: number
  roleId: number
  createAt?: any[]
  updateAt?: string
  password?: string
}
