import { useMemberStore } from "@/stores"

const baseURL = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'

// 添加请求拦截器
const httpInterceptor = {
  invoke(options: UniApp.RequestOptions) {
    // 非 http 开头需要拼接
    if (!options.url.startsWith('http')) {
      options.url = baseURL + options.url
    }
    // 请求超时
    options.timeout = 10000
    // 小程序标识头
    options.header = {
      ...options.header,
      'source-client': 'miniapp',
    }
    // token 标识头
    const meberStore = useMemberStore()
    const token = meberStore?.profile?.token
    if (token) {
      options.header.Authorization = token
    }
  },
}
uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)

/**
 * 请求函数
 * @param UniApp.RequestOptions
 * @returns Promise
 */
interface Data<T> {
  code: string
  msg: string
  result: T
}
export const http = <T>(options: UniApp.RequestOptions) => {
  return new Promise<Data<T>>((resolve, reject) => {
    uni.request({
      ...options,
      success(res) {
        resolve(res.data as Data<T>)
      },
    })
  })
}
