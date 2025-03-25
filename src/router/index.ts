/*
 * @Author: kevinZzzzzz
 * @Date: 2023-05-19 16:14:40
 * @version:
 * @LastEditors: kevinZzzzzz
 * @LastEditTime: 2023-06-02 11:40:14
 * @Description: 路由配置
 * @FilePath: \vue-ts-vite\src\router\index.ts
 */
import { createRouter, createWebHashHistory, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/homePage',
    meta: {
      title: ''
    },
    children: [
      {
        path: '/homePage',
        name: 'HomePage',
        meta: {
          title: '',
          requireAuth: false // 是否需要登录校验
        },
        component: async () => await import(/* webpackChunkName: "homePage" */ '@/pages/homePage/index.vue')
      },
      {
        path: '/register',
        name: 'Register',
        meta: {
          title: '注册账号',
          requireAuth: false
        },
        component: async () => await import(/* webpackChunkName: "register" */ '@/pages/register/index.vue')
      },
      {
        path: '/forgotPassword',
        name: 'ForgotPassword',
        meta: {
          title: '忘记密码',
          requireAuth: false
        },
        component: async () => await import(/* webpackChunkName: "forgotPassword" */ '@/pages/forgotPassword/index.vue')
      },
      // {
      //   path: '/home',
      //   name: 'Home',
      //   meta: {
      //     title: '',
      //     requireAuth: false // 是否需要登录校验
      //   },
      //   component: async () => await import(/* webpackChunkName: "home" */ '@/pages/home/index.vue')
      // },
      // {
      //   path: '/home2',
      //   name: 'Home2',
      //   meta: {
      //     title: '',
      //     requireAuth: false // 是否需要登录校验
      //   },
      //   component: async () => await import(/* webpackChunkName: "home2" */ '@/pages/home2/index.vue')
      // }
    ]
  },
  // {
  //   path: '/login',
  //   name: 'Login',
  //   meta: {
  //     title: '',
  //     requireAuth: false // 是否需要登录校验
  //   },
  //   component: async () => await import(/* webpackChunkName: "login" */ '@/pages/login/index.vue')
  // },
  {
    path: '/:notFoundPath',
    redirect: '/404'
  },
  {
    path: '/404',
    meta: {
      title: '404',
      requireAuth: false
    },
    component: async () => await import(/* webpackChunkName: "404" */ '@/pages/404/index.vue')
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to: any, from: any, next: any) => {
  next()
})
export default router
