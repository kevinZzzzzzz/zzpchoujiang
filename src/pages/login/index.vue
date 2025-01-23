<template>
  <div class="LoginPage">
    <div class="LoginPage_popup">
      <div class="LoginPage_main">
        <div class="LoginPage_main_nav">
          <div
            v-for="item in loginWayList"
            :key="item.value"
            class="LoginPage_main_nav_item"
            @click="handleChangeLoginWay(item.value)"
          >
            <div
              class="LoginPage_main_nav_item_label"
              :class="{
                'LoginPage_main_nav_item_label-active': loginWay === item.value,
              }"
            >
              {{ item.label }}
            </div>
          </div>
        </div>
        <!-- <div class="LoginPage_main_line">
          <van-field
            v-model="loginInfo.info.phone"
            left-icon="friends-o"
            type="number"
            border
            size="large"
            clearable
            placeholder="请输入手机号码"
          />
        </div>
        <div v-if="loginWay === 'password'" class="LoginPage_main_line">
          <van-field
            v-model="loginInfo.info.password"
            left-icon="shield-o"
            type="password"
            clearable
            size="large"
            border
            placeholder="请输入密码"
          />
        </div>
        <div v-else class="LoginPage_main_line">
          <van-field
            v-model="loginInfo.info.authCode"
            center
            clearable
            size="large"
            placeholder="请输入短信验证码"
          >
            <template #button>
              <van-button
                v-if="waitAuthCode"
                :disabled="waitAuthTime"
                size="small"
                type="primary"
                color="linear-gradient(90deg, #4dacf0 0%, #7bc2f5 100%)"
              >
                {{ `重新发送（${waitAuthTime}s）` }}
              </van-button>
              <van-button
                v-else
                size="small"
                type="primary"
                color="linear-gradient(90deg, #4dacf0 0%, #7bc2f5 100%)"
                @click="getAuthCode()"
              >
                获取验证码
              </van-button>
            </template>
          </van-field>
        </div>
        <div class="LoginPage_main_line">
          <van-button
            type="primary"
            block
            color="linear-gradient(90deg, #4dacf0 0%, #7bc2f5 100%)"
            @click="handleLogin"
          >
            登录
          </van-button>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Login",
};
</script>
<script setup lang="ts">
import { useUserStore } from "@/store/user";
import { reactive, ref } from "vue";
type ILoginWay = "password" | "phone";

const sendMinute = 60;
let waitTimer: any = null;
const userStore = useUserStore();
const loginWayList = ref([
  { label: "密码登录", value: "password" },
  { label: "验证码登录", value: "phone" },
]);
const waitAuthCode = ref(false); // 等待验证码
const waitAuthTime = ref(sendMinute); // 等待倒计时
const loginWay = ref<ILoginWay>("password");

const loginInfo = reactive({
  info: {
    phone: "",
    password: "",
    authCode: "",
  },
});

// 切换登录方式
const handleChangeLoginWay = (way) => {
  loginWay.value = way;
};
const handleLogin = () => {
  if (!loginInfo.info.phone) {
    // uni.showToast({
    //   icon: 'none',
    //   title: '请输入手机号码',
    // })
    return false;
  }
  if (loginWay.value === "phone") {
    if (!loginInfo.info.authCode) {
      // uni.showToast({
      //   icon: 'none',
      //   title: '请输入验证码',
      // })
      return false;
    }
  } else if (loginWay.value === "password") {
    if (!loginInfo.info.password) {
      // uni.showToast({
      //   icon: 'none',
      //   title: '请输入密码',
      // })
      return false;
    }
  }
  handleLoginAfter(123);
  /**
   * $apiLogin({
      phone: loginInfo.info.phone,
      password: loginInfo.info.password,
      authCode: loginInfo.info.authCode,
    )}.then((res) => {
      handleLoginAfter(res)
      })
   */
};
// 登录成功后处理流程
const handleLoginAfter = (authInfo) => {
  // 登录成功后，将用户信息存储到本地
  // const userInfo = authInfo.userInfo
  // userStore.setUserInfo(userInfo)
  userStore.setUserToken(authInfo);
  // uni.showToast({
  //   icon: 'success',
  //   title: '登录成功！',
  // })
  setTimeout(() => {
    // uni.reLaunch({
    //   url: '/pages/index/index',
    // })
  }, 1000);
};
// 获取验证码
const getAuthCode = () => {
  if (waitAuthCode.value) return false;
  waitAuthCode.value = true;
  waitTimer = setInterval(() => {
    waitAuthTime.value -= 1;
    if (waitAuthTime.value <= 0) {
      clearInterval(waitTimer);
      waitAuthTime.value = 60;
      waitAuthCode.value = false;
    }
  }, 1000);
};
</script>

<style scoped lang="less">
.LoginPage {
  width: 100%;
  min-height: 100vh;
  background: url("@/assets/images/bgImg.png") no-repeat;
  background-size: cover;
  // background-color: #e1f2fe;
  padding: 48px 24px 0;
  &_header {
    width: 100%;
    &_title {
      // margin-top: 48px;
      font-size: 36px;
      font-family: Roboto;
      color: #111827;
    }
    &_desc {
      margin-top: 8px;
      font-family: Roboto;
      font-size: 14px;
      font-weight: normal;
      line-height: 21px;
      letter-spacing: 0px;
      color: #6b7280;
    }
  }
  &_popup {
    width: 100%;
    margin-top: 48px;
    padding: 12px 5px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 12px;
    opacity: 1;
    box-sizing: border-box;
  }
  &_main {
    width: 100%;
    // margin-top: 32px;
    &_nav {
      // height: 36px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      border-radius: 12px;
      opacity: 1;
      box-sizing: border-box;
      border: 1px solid rgba(255, 255, 255, 0.3);
      backdrop-filter: blur(10px);
      box-shadow: 0px 4px 6px -4px rgba(0, 0, 0, 0.1),
        0px 10px 15px -3px rgba(0, 0, 0, 0.1);
      // padding: 8px 0;
      background: #e9eef3;
      &_item {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        &_label {
          padding: 10px 10vw;
          border-radius: 12px;
          height: 100%;
          text-align: center;
          font-family: Roboto;
          font-size: 14px;
          line-height: 21px;
          letter-spacing: 0px;
          color: #111827;
          &-active {
            background: #fff;
          }
        }
      }
    }

    &_line {
      width: 100%;
      height: 48px;
      margin-top: 20px;
      padding: 0 10px;
    }
  }
}

/deep/ .van-field {
  border-radius: 10px;
}
</style>
