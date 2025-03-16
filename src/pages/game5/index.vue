<template>
  <!-- 领取界面 -->
  <lingqu />
  <!-- 加载 -->
  <jiazai v-if="login_active" />
  <putong_jiazai v-if="diao_yong_jia_zai" />
  <!-- 登录 -->
  <logins />
  <!-- 导航栏 -->
  <headerss />
  <!-- 身体 -->
  <bodys />
  <!-- 系统弹窗 -->
  <alertss />
  <!-- 支付 -->
  <zhifuss />
  <!-- 跟随的粘性盒子 -->
  <nianxingss />
  <!-- 单抽盒子 -->
  <danchouss />
  <!-- 十抽盒子 -->
  <shichouss />
  <!-- 暂存箱 -->
  <zancunxiangss />
  <!-- cf弹窗 -->
  <cf_alertss />
  <cf_alert_dansss />
</template>

<script setup lang="ts">
import headerss from "./components/header.vue";
import bodys from "./components/body.vue";
import logins from "./components/login/login.vue";
import jiazai from "./components/jiazai/jiazai.vue";
import putong_jiazai from "./components/jiazai/putong_jiazai.vue";
import lingqu from "./components/jingjiebaoxiang/baoxianglingqu.vue";
import alertss from "./components/alert/alert.vue";
import zhifuss from "./components/zhifu/zhifu.vue";
import nianxingss from "./components/nianxing/nianxing.vue";
import danchouss from "./components/danchou/danchou.vue";
import shichouss from "./components/shichou/shichou.vue";
import zancunxiangss from "./components/zancunxiang/zancunxiang.vue";
import cf_alertss from "./components/cf_alert/cf_alert.vue";
import cf_alert_dansss from "./components/cf_alert/cf_alert_dans.vue";
//判断登陆状态的功能
import { useCounterStore } from "@/store/counter"; // 确保路径正确
import { ref } from "vue";
import { watch } from "vue";
const counterStore = useCounterStore();
let login_active = ref(false);
let diao_yong_jia_zai = ref(false);
// 侦听 store 中的 login_active 状态变化
watch(
  () => counterStore.login_active,
  (newVal) => {
    login_active.value = newVal;
    if (newVal) {
      animation();
    }
  }
);
watch(
  () => counterStore.jia_zai_active,
  (newVal) => {
    diao_yong_jia_zai.value = newVal;
    if (newVal) {
      animation1();
    }
  }
);
function animation() {
  login_active.value = true;
  setTimeout(() => {
    login_active.value = false;
    setTimeout(() => {
      login_active.value = true;
      setTimeout(() => {
        login_active.value = false;
      }, 500);
    }, 200);
  }, 500);
}
function animation1() {
  diao_yong_jia_zai.value = true;
  setTimeout(() => {
    diao_yong_jia_zai.value = false;
    // setTimeout(() => {
    //     diao_yong_jia_zai.value = true;
    //     setTimeout(() => {
    //         diao_yong_jia_zai.value = false;
    //     }, 100);
    // }, 200);
  }, 500);
}
</script>
<style scoped lang="less">
</style>
