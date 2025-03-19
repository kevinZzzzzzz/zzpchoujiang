import http from '@/http'
import { type AxiosResponse } from 'axios'
// 设置代理
const setProxy = (url: string): string => {
  return '/api' + url
}
console.log(import.meta.env, '环境变量')

export default {
  /*
    for example：
  */
  async loginApi (data: any = {}): Promise<AxiosResponse<any, any>> {
    return await http.post(setProxy('/user/login'), { data }, false, false)
  },
  async registerApi (data: any = {}): Promise<AxiosResponse<any, any>> {
    return await http.post(setProxy('/user/register'), { data }, false, false)
  },
  async sendLoginCaptchaApi (data: any = {}): Promise<AxiosResponse<any, any>> {
    return await http.post(setProxy('/user/sendLoginCaptcha'), { data }, false, false)
  },
  /**
   * 活动列表
   * @param data 
   * @returns 
   */
  async getEventList (data: any = {}): Promise<AxiosResponse<any, any>> {
    return await http.post(setProxy('/event/list'), null, false, false)
  },
  /**
   * 充值 支付
   */
  async recharge (data: any = {}): Promise<AxiosResponse<any, any>> {
    return await http.post(setProxy('/pay/getPayUrl'), null, false, false)
  }
}
