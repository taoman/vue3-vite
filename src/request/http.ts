import axios, { AxiosRequestHeaders, Method, ResponseType } from 'axios'
import _ from 'lodash'
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
  responseType?:ResponseType
}
const baseURL = import.meta.env.VITE_BASE_URL
console.log('baseURL', baseURL)
const headerAccept = import.meta.env.VITE_HTTP_HEADER_ACCEPT as string
const instance = axios.create({
  baseURL: '/',
  timeout: 20000,
  headers: {
    Accept: headerAccept
  }
})
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
  return res.data
}
