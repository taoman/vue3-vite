import { message } from 'ant-design-vue'
import axios, { AxiosRequestConfig, AxiosRequestHeaders, Method, ResponseType } from 'axios'
import _ from 'lodash'
import { config } from 'process'
import { router } from 'src/router'
type AnyObj = Record<string, any>;
interface RequestType {
  // 请求地址
  url: string;
  // 请求方法,默认GET
  method?:Method;
  // 请求体参数
  data?: AnyObj;
  // url query 参数
  queryParameters?: AnyObj;
  // 请求头
  headers?:AxiosRequestHeaders,
  responseType?:ResponseType,
}
const baseURL = import.meta.env.VITE_BASE_URL as string
console.log('baseURL', baseURL)
const headerAccept = import.meta.env.VITE_HTTP_HEADER_ACCEPT as string

const token = sessionStorage.token
console.log('token', token)
const instance = axios.create({
  baseURL: 'https://liquanquan.top/nest/',
  timeout: 20000,
  headers: {
    Accept: headerAccept
    // Authorization: 'Bearer ' + token
  }
})
function addToken (config:AxiosRequestConfig):AxiosRequestConfig {
  config.headers = {
    ...config.headers,
    Authorization: 'Bearer ' + sessionStorage.token
  }
  return config
}
// instance.interceptors.request.use((config:AxiosRequestConfig) => {
//   config.headers.Authorization = 'Bearer ' + sessionStorage.token
//   return config
// }

instance.interceptors.response.use(response => {
  // eslint-disable-next-line no-constant-condition
  if (response.data.statusCode === 200 || 201) {
    message.success('请求成功')
    return Promise.resolve(response)
  }
}, error => {
  console.log('error', error)
  if (error.response.data.statusCode) {
    switch (error.response.data.statusCode) {
      case 400:
        message.error(error.response.data.message)
        router.replace({
          path: '/login'
        })
        break
      case 401:
        message.error(error.response.data.message)
        router.replace({
          path: '/login'
        })
        break
      case 500:
        message.error(error.response.data.message)
        break
    } return Promise.reject(error.res)
  }
})
instance.interceptors.request.use(addToken)
async function baseRequest<T = unknown> ({ url, method = 'GET', queryParameters, data, headers, responseType }:RequestType) {
  const res = { data, queryParameters }
  url += '?'
  for (const key in res.queryParameters) {
    if (Object.prototype.hasOwnProperty.call(res.queryParameters, key)) {
      const element = res.queryParameters[key]
      if (!_.isNil(element)) { url += `${key}=${element}&` }
    }
  }
  url = url.substring(0, url.length - 1)
  return await instance.request<T>({
    url,
    method,
    data: res.data,
    headers,
    responseType
  })
}
export async function request<T = unknown> (data:RequestType) {
  const res = await baseRequest<T>(data)
  console.log('apk', res)
  //   if (res.data.statusCode === 400) {
  //     return message.error(res.data.message)
  //   } else {
  //     message.success(res.data.message)
  //     return (res.data)
  //   }
  return res.data
}
