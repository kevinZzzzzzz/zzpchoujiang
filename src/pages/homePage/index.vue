<template>
  <div class="main">
    <div class="main_top" v-show="isLogin">
      <p class="main_top_title" @click="handleRecharge">充值</p>
      <div class="main_top_img"></div>
    </div>
    <h3>抽奖模拟器</h3>
    <ul class="main_topBtnList">
      <li v-for="(item, idx) in topBtnList" :key="idx">
        {{ item.name }}
      </li>
    </ul>
    <ul class="main_eventList">
      <li v-for="(item, idx) in eventList" :key="idx" class="main_eventList_item">
        <img class="main_eventList_item_img" :src="item.img" alt="" />
        <div class="main_eventList_item_main">
          <p>{{ item.gameName }} {{ item.title }}</p>
          <ul>
            <li style="background-color: #1d6e04;" @click="goUrl(item.freeUrl, null)">免费</li>
            <li style="background-color: #c34cb2;" @click="goUrl(item.url, item.id)">付费</li>
            <li style="background-color: #06f;">活动重置</li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
  <div v-show="!isLogin" class="loginDialog">
    <div class="loginDialog_main">
      <div class="loginDialog_main_title">登录</div>
      <div class="loginDialog_main_input">
        <p>账号：</p><input type="text" v-model="loginInfo.mobileNumber"/>
      </div>
      <div class="loginDialog_main_input">
        <p>密码：</p><input type="password" v-model="loginInfo.password"/>
      </div>
      <div class="loginDialog_main_btn" @click="handleLogin">登录</div>
    </div>
  </div>
  <div v-show="rechargeFlag" class="rechargeDialog">
    <div class="rechargeDialog_main">
      <div class="rechargeDialog_main_title" @click="rechargeFlag = false">X</div>
      <div class="rechargeDialog_main_frame" >
        <iframe :src="rechargeUrl" width="100%" height="100%"></iframe>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "HomePage",
};
</script>
<script setup lang="ts">
import { ref, computed } from "vue";

const rechargeFlag = ref(false); // 充值弹窗
const rechargeUrl = ref(""); // 充值链接
const isLogin = computed(() => {
  return JSON.parse(window.sessionStorage.getItem('login') as string) || false;
});
const topBtnList = ref([
  { name: "余额明细", url: "" },
  // { name: "广告招商", url: "" },
  // { name: "活动重制", url: "" },
]);
const loginInfo = ref({
  mobileNumber: "",
  password: "",
})
const eventList = ref<any>([]);
const eventMap = {
  "银翼出击": {
    img: '/images/game3/advpic.png',
    url: '/game3.html',
    freeUrl: '',
  },
  "星辰所向": {
    img: '/images/game1/advpic.png',
    url: '/game1.html',
    freeUrl: '/game1-free.html',
  },
  "荣耀世冠白鲨": {
    img: '/images/game4/advpic.png',
    url: '/game4.html',
    freeUrl:  '/game4-free.html',
  }
};
onMounted(() => {
  document.title = "抽奖模拟器";
  window.$api.getEventList().then((res) => {
    const {code, data} = res;
    if (code === 200) {
      eventList.value = data.map((d, idx) => {
        const item = eventMap[d.title] || {}
        return {
          ...d,
          ...item,
        }
      });
    }
  });
});

const goUrl = (url, eventId) => {
  if (!url) return;
  window.location.href = eventId ? `${url}?eventId=${eventId}`  :url;
}
const handleLogin = () => {
  if (!loginInfo.value.mobileNumber || !loginInfo.value.password) return;
  window.$api.loginApi({
    ...loginInfo.value,
    loginType: 1
  }).then((res) => {
    const {code, data} = res
      sessionStorage.setItem("login", JSON.stringify(data));
      sessionStorage.setItem("isLogin", '1')
      window.location.reload();
  })
}

const handleRecharge = () => {
  rechargeFlag.value = true;
  window.$api.recharge().then((res) => {
    const {code, data} = res;
    if (code === 200) {
      rechargeUrl.value = data
    }
  })
}
</script>

<style scoped lang="less">
.main {
  padding: 20vh 0 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  &_top {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 20px;
    right: 20px;
    &_title {
      font-size: 16px;
      font-weight: 400;
      margin-right: 10px;
      color: #f81ee6;
      cursor: pointer;
    }
    &_img {
      width: 40px;
      height: 40px;
      background-image: url("@/assets/images/defaultIcon.png");
      background-size: 100% 100%;
      border-radius: 50%;
      cursor: pointer;
    }
  }
  h3 {
    font-weight: 600;
    font-size: 30px;
  }
  &_topBtnList {
    display: grid;
    padding: 10px 20px;
    // grid-template-columns: repeat(1, 1fr);
    gap: 10px;
    li {
      font-size: 12px;
      padding: 5px 20px;
      background-color: #f81ee6;
      color: #fff;
      border-radius: 5px;
      text-align: center
    }
  }
  &_eventList {
    padding: 10px 10px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    &_item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      border: 1px solid #ccc;
      padding: 2px;
      img {
        width: 100%;
        height: 100px;
        object-fit: fill;
      }
      &_main {
        padding: 5px;
        p {
          font-size: 14px;
          text-align: center;
        }
        ul {
          margin-top: 5px;
          display: flex;
          justify-content: space-between;
          font-size: 12px;
          li {
            padding: 2px 5px;
            border-radius: 5px;
            color: #fff;
          }
        }
      }
    }
  }
}
.rechargeDialog {
  width: 100%;
  position: fixed;
  top: 10%;
  z-index: 1;
  background-color: #fff;
  &_main {
    width: 80%;
    margin: 0 auto;
    height: 80vh;
    border: 1px solid #ccc;
    position: relative;
    &_title {
      width: 100%;
      font-size: 20px;
      padding: 10px;
      text-align: right;
      cursor: pointer;
    }
    &_frame {
      width: 100%;
      height: 100%;
    }
  }
}
.loginDialog {
  position: fixed;
  top: 25%;
  right: 50%;
  transform: translateX(50%);
  &_main {
    width: 300px;
    height: 30vh;
    border: 1px solid #ccc;
    border-radius: 10px;
    background-color: #fff;
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &_title {
      font-size: 20px;
      font-weight: 400;
    }
    &_input {
      margin-top: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      p {
        font-size: 16px;
        font-weight: 400;
      }
      input {
        width: 200px;
        height: 40px;
        border-radius: 10px;
      }
    }
    &_btn {
      margin-top: 10px;
      width: 150px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      font-size: 20px;
      color: #fff;
      background-color: #f81ee6;
      border-radius: 10px;
      cursor: pointer;
    }
  }
}
</style>
