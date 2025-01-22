import { defineStore } from 'pinia'
import { ref } from 'vue'

const initState = { nickname: '', avatar: '' }

type IUserInfo = {
  nickname?: string
  avatar?: string
  /** 微信的 openid，非微信没有这个字段 */
  openid?: string
  token?: string
}

export const useUserStore = defineStore(
  'user',
  () => {
    const userInfo = ref<IUserInfo>({ ...initState })
    const userToken = ref(null)

    const setUserInfo = (val: IUserInfo) => {
      userInfo.value = val
    }
    // 设置用户token
    const setUserToken = (val: any) => {
      userToken.value = val
    }

    const clearUserInfo = () => {
      userInfo.value = { ...initState }
      userToken.value = null
    }
    // 一般没有reset需求，不需要的可以删除
    const reset = () => {
      userInfo.value = { ...initState }
    }
    const isLogined = computed(() => !!userToken.value)

    return {
      userInfo,
      userToken,
      setUserToken,
      setUserInfo,
      clearUserInfo,
      isLogined,
      reset,
    }
  },
  {
    persist: {
      enabled: true,
      // storage: localStorage,
    },
  },
)
