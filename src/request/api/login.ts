import { request } from '../http'
import { RegisterData, LoginData } from 'src/interface/login'

// 注册
export const registerDetail = (username:string, password:string, avatar:string) =>
  request <HttpBase<RegisterData>>({
    url: 'user/register',
    method: 'POST',
    data: {
      username,
      password,
      avatar
    }
  })

// 登录
export const loginDetail = (username:string, password:string) =>
  request <HttpBase<LoginData>>({
    url: 'auth/login',
    method: 'POST',
    data: {
      username,
      password
    }
  })

// 头像
export const avatarDetail = (file: File) => {
  const formData = new FormData()
  formData.append('file', file)
  return request <HttpBase>({
    url: 'auth/upload',
    method: 'post',
    data: formData
  })
}

export const getAvatar = (username:string) =>
  request<HttpBase>({
    url: 'user/getAvatar',
    method: 'POST',
    data: {
      username
    }
  })
