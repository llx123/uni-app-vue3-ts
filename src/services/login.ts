import { http } from '@/utils/http'

type LoginParam = {
  code: string
  encryptedData: string
  iv: string
}
export const postLoginWx = <T>(data: LoginParam) => {
  return http<T>({
    method: 'POST',
    url: '/login/wxMin',
    data,
  })
}
