export interface ILoginData {
  name: string
  password: string
}
export interface ILoginRes {
  code: number
  data: {
    id: number
    name: string
    token: string
  }
}

export interface IUserInfo {
  code: number
  data: any
}

export interface IUserMenu {
  code: number
  data: any
}
