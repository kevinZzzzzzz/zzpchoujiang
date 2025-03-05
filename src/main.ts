import { createApp } from 'vue'
import './style.less'
import { createPinia } from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'
import router from './router/index'
import api from '@/api'
import App from './App.vue'
// 2. 引入组件样式
import 'vant/lib/index.css';

import 'amfe-flexible' // 动态设置 REM 基准值

declare module 'vue' {
  export interface ComponentCustomProperties {
    $api: any
  }
}
declare global {
  interface Window {
    $api: any
    // px2rem: any
  }
}
// function px2rem(px){
//   if(/%/ig.test(px)){ // 有百分号%，特殊处理，表述pc是一个有百分号的数，比如：90%
//     return px
//   }else{
//     return (parseFloat(px) / 37.5) + 'rem'
//   }
// }

const store = createPinia().use(piniaPluginPersist)
const app = createApp(App)
window.$api = { ...api }

// 全局错误拦截
app.config.errorHandler = (err, vm, info) => {
  console.error()
}
app.use(store).use(router).mount('#app')

