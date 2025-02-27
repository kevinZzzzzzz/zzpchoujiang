import http from '@/http'
import { type AxiosResponse } from 'axios'
// 设置代理
const setProxy = (url: string): string => {
  return !import.meta.env.PROD ? '/api' + url : url
}
console.log(import.meta.env, '环境变量')

export default {
  /*
    for example：
  */
  async xxx (data: any = {}): Promise<AxiosResponse<any, any>> {
    return await http.post(setProxy('/xxx'), { data }, true, true)
  },
  /**
   * 活动列表
   * @param data 
   * @returns 
   */
  async getEventList (data: any = {}): Promise<AxiosResponse<any, any>> {
    return await http.get(setProxy('/event/list'), true, true)
  }
}
