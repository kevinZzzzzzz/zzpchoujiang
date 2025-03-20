<template>
  <div class="main">
    <!-- 广告招商位 -->
    <div class="adSidebar">
      <div class="adSidebar_header">
        <span class="adSidebar_title">招商广告展示位</span>
        <img
          class="adSidebar_icon"
          src="@/assets/images/adslink.png"
          />
      </div>
      <div class="adSidebar_tip">点击以下内容可复制联系方式或跳转网页</div>
      <div class="adSidebar_items">
        <a
          class="adSidebar_item"
          href="javascript:void(0)"
          @click="copyToClipboard('包皮肤 + QQ群: XXXXXXX')"
        >
          包邮柜和皮肤卡 + QQ群: XXXXXXXXXXXXXXXXXXX
        </a>
        <a
          class="adSidebar_item"
          href="javascript:void(0)"
          @click="copyToClipboard('土豆网游, 脱坑入坑+V: CF082810')"
        >
          CF网游, 脱坑入坑+V: XXXXXXXXXXX
        </a>
        <a
          class="adSidebar_item"
          href="javascript:void(0)"
          @click="copyToClipboard('cf种号: 召集币, 积分 (CF业务代做)')"
        >
          cf种号: 召集币, 积分 (CF业务代做)
        </a>
        <a
          class="adSidebar_item"
          href="javascript:void(0)"
          @click="openLink('https://www.baidu.com')"
        >
          阿龙网游商城: cfalong.cn (全网最低价)
        </a>
        <a
          class="adSidebar_item"
          href="javascript:void(0)"
          @click="copyToClipboard('投放广告可联系QQ: xxxxxxxxxxxxx')"
        >
          投放广告可联系QQ: XXXXXXXXXXXXXXXX 咨询
        </a>
      </div>
    </div>

    <div class="main_header">
      <h1 class="main_title">抽奖模拟器</h1>
      <div class="main_user">
        <template v-if="isLogin">
          <div class="main_user_avatar" @click="showUserCenter = true"></div>
        </template>
        <template v-else>
          <button class="main_user_login" @click="showLoginDialog = true">
            登录
          </button>
        </template>
      </div>
    </div>

    <div class="main_content">
      <ul class="main_eventList">
        <li
          v-for="(item, idx) in eventList"
          :key="idx"
          class="main_eventList_item"
        >
          <img class="main_eventList_item_img" :src="item.img" alt="" />
          <div class="main_eventList_item_main">
            <p>{{ item.gameName }} {{ item.title }}</p>
            <ul>
              <li @click="goUrl(item.freeUrl, null, true)">免费</li>
              <li @click="goUrl(item.url, item.id, true)">付费</li>
              <li>活动重置</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>

  <!-- 个人中心弹窗 -->
  <div v-show="showUserCenter && isLogin" class="userCenterDialog">
    <div class="userCenterDialog_main">
      <div class="userCenterDialog_main_close" @click="showUserCenter = false">
        ×
      </div>

      <div class="userCenterDialog_main_header">
        <div class="userCenterDialog_main_avatar">
          <img src="@/assets/images/defaultIcon.png" alt="用户头像" />
        </div>
        <div class="userCenterDialog_main_info">
          <h3>{{ userInfo.nickname || "用户" + userInfo.userId }}</h3>
          <div class="userCenterDialog_main_vip">
            <span
              class="vip-tag"
              :class="
                userInfo.isVip
                  ? userInfo.vipLevel === 'high'
                    ? 'vip-level-high'
                    : 'vip-level-normal'
                  : 'vip-level-0'
              "
            >
              {{
                userInfo.isVip
                  ? userInfo.vipLevel === "high"
                    ? "高级会员"
                    : "普通会员"
                  : "非会员"
              }}
            </span>
            <span class="vip-expiry">{{
              userInfo.isVip
                ? "到期时间：" + userInfo.vipExpiry
                : "您还不是会员"
            }}</span>
          </div>
        </div>
      </div>

      <div class="userCenterDialog_main_stats">
        <div class="stat-item">
          <div class="stat-value">{{ userInfo.balance }}</div>
          <div class="stat-label">账户余额</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">{{ userInfo.withdrawable || 0 }}</div>
          <div class="stat-label">可提现金额</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">SDE4FG</div>
          <div class="stat-label">邀请码</div>
        </div>
      </div>

      <div class="userCenterDialog_main_actions">
        <button class="action-btn vip-btn" @click="handleVipAction">
          {{ userInfo.isVip ? "续费会员" : "开通会员" }}
        </button>
        <button class="action-btn recharge-btn" @click="handleRecharge">
          充值
        </button>
      </div>

      <div class="userCenterDialog_main_menu">
        <div class="menu-item">
          <i class="menu-icon order-icon"></i>
          <span>我的订单</span>
        </div>
        <div class="menu-item">
          <i class="menu-icon history-icon"></i>
          <span>邀请记录</span>
        </div>
        <div class="menu-item">
          <i class="menu-icon settings-icon"></i>
          <span>账号设置</span>
        </div>
        <div class="menu-item" @click="handleLogout">
          <i class="menu-icon logout-icon"></i>
          <span>退出登录</span>
        </div>
      </div>
    </div>
  </div>

  <!-- 会员套餐选择弹窗 -->
  <div v-show="showVipPackages" class="vipPackageDialog">
    <div class="vipPackageDialog_main">
      <div class="vipPackageDialog_main_close" @click="showVipPackages = false">
        ×
      </div>

      <div class="vipPackageDialog_main_header">
        <h2>{{ userInfo.isVip ? "续费会员" : "开通会员" }}</h2>
        <p class="username">
          {{ userInfo.nickname || "用户" + userInfo.userId }}
        </p>
      </div>

      <div class="vipPackageDialog_main_tabs">
        <div
          class="tab"
          :class="{ active: activeVipTab === 'global' }"
          @click="activeVipTab = 'global'"
        >
          普通会员
          <div class="tab-desc">全活动通用，体验破解人生的快感吧</div>
        </div>
        <div
          class="tab"
          :class="{ active: activeVipTab === 'high' }"
          @click="showHighVipTip"
        >
          高级会员
          <div class="tab-desc">高级会员，超惊喜福利，暂未开放哦</div>
        </div>
      </div>

      <div class="vipPackageDialog_main_packages">
        <div
          v-for="(pkg, idx) in vipPackages"
          :key="idx"
          class="package"
          :class="{ active: selectedPackage === idx }"
          @click="selectPackage(idx)"
        >
          <div class="package-duration">{{ pkg.name }}</div>
          <div class="package-price">
            <span class="current-price">{{ pkg.price }}元</span>
            <span class="original-price">原价{{ pkg.originalPrice }}元</span>
          </div>
        </div>
      </div>

      <div class="vipPackageDialog_main_payment">
        <div class="payment-header">
          <div class="price">
            {{ displayPrice }}<span class="unit">元</span>
          </div>
          <div class="payment-options">
            <div
              class="payment-option"
              :class="{ active: activePayment === 'wechat' }"
              @click="selectPaymentMethod('wechat')"
            >
              <img
                src="@/assets/images/alipayScan.png"
                alt="支付宝扫码支付"
              />
              <span>支付宝扫码支付</span>
            </div>
            <div
              class="payment-option"
              :class="{ active: activePayment === 'alipay' }"
              @click="showAlipayTip"
            >
              <img
                src="@/assets/images/alipayIcon.png"
                alt="支付宝"
              />
              <span>支付宝</span>
            </div>
          </div>
        </div>

        <div class="payment-qrcode">
          <template v-if="rechargeUrl">
            <div class="iframe-container">
              <iframe :src="rechargeUrl" frameborder="0"></iframe>
            </div>
          </template>
          <div class="payment-loading" v-else>
            <div class="spinner"></div>
            <p>加载支付页面中...</p>
          </div>
        </div>
      </div>

      <div class="vipPackageDialog_main_footer">
        <p>开通即同意《服务协议》及《自动续费协议》</p>
      </div>
    </div>
  </div>

  <!-- 充值额度选择弹窗 -->
  <div v-show="showRechargePackages" class="vipPackageDialog">
    <div class="vipPackageDialog_main">
      <div
        class="vipPackageDialog_main_close"
        @click="showRechargePackages = false"
      >
        ×
      </div>

      <div class="vipPackageDialog_main_header">
        <h2>充值抽奖额度</h2>
        <p class="username">
          {{ userInfo.nickname || "用户" + userInfo.userId }}
        </p>
      </div>

      <div class="vipPackageDialog_main_packages">
        <div
          v-for="(pkg, idx) in rechargePackages"
          :key="idx"
          class="package"
          :class="{ active: selectedRechargePackage === idx }"
          @click="selectRechargePackage(idx)"
        >
          <div class="package-duration">{{ pkg.amount }}抽奖额度</div>
          <div class="package-price">
            <span class="current-price">{{ pkg.price }}元</span>
            <span v-if="pkg.originalPrice" class="original-price"
              >原价{{ pkg.originalPrice }}元</span
            >
          </div>
        </div>
      </div>

      <div class="vipPackageDialog_main_payment">
        <div class="payment-header">
          <div class="price">
            {{ rechargePackages[selectedRechargePackage].price
            }}<span class="unit">元</span>
          </div>
          <div class="payment-options">
            <div
              class="payment-option"
              :class="{ active: activeRechargePayment === 'wechat' }"
              @click="selectRechargePaymentMethod('wechat')"
            >
              <img
                src="@/assets/images/alipayScan.png"
                alt="支付宝扫码支付"
              />
              <span>支付宝扫码支付</span>
            </div>
            <div
              class="payment-option"
              :class="{ active: activeRechargePayment === 'alipay' }"
              @click="showRechargeAlipayTip"
            >
              <img
                src="@/assets/images/alipayIcon.png"
                alt="支付宝"
              />
              <span>支付宝</span>
            </div>
          </div>
        </div>

        <div class="payment-qrcode">
          <template v-if="rechargeQrcodeUrl">
            <div class="iframe-container">
              <iframe :src="rechargeQrcodeUrl" frameborder="0"></iframe>
            </div>
          </template>
          <div class="payment-loading" v-else>
            <div class="spinner"></div>
            <p>加载支付页面中...</p>
          </div>
        </div>
      </div>

      <div class="vipPackageDialog_main_footer">
        <p>充值即代表您同意《服务协议》</p>
      </div>
    </div>
  </div>

  <!-- 自定义提示弹窗 -->
  <div v-if="customTip.show" class="customTipDialog">
    <div class="customTipDialog_main">
      <div class="customTipDialog_content">
        {{ customTip.message }}
      </div>
      <div class="customTipDialog_button" @click="customTip.show = false">
        确定
      </div>
    </div>
  </div>

  <!-- 登录弹窗 -->
  <div v-show="showLoginDialog" class="loginDialog">
    <div class="loginDialog_main">
      <div class="loginDialog_main_close" @click="showLoginDialog = false">
        ×
      </div>
      <div class="loginDialog_main_title">欢迎登录</div>
      <div class="loginDialog_main_subtitle">抽奖模拟器</div>
      <div class="loginDialog_main_input">
        <div class="input_icon"><i class="user-icon"></i></div>
        <input
          type="text"
          v-model="loginInfo.mobileNumber"
          placeholder="请输入账号"
        />
      </div>
      <div class="loginDialog_main_input">
        <div class="input_icon"><i class="password-icon"></i></div>
        <input
          type="password"
          v-model="loginInfo.password"
          placeholder="请输入密码"
        />
      </div>
      <div class="loginDialog_main_btn" @click="handleLogin">登录</div>
      <div class="loginDialog_main_options">
        <span @click="handleForgetPassword">忘记密码?</span>
        <span @click="handleRegister">注册账号</span>
      </div>
    </div>
  </div>

  <!-- 充值弹窗 -->
  <div v-show="rechargeFlag" class="rechargeDialog">
    <div class="rechargeDialog_main">
      <div class="rechargeDialog_main_title" @click="rechargeFlag = false">
        X
      </div>
      <div class="rechargeDialog_main_frame">
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
import router from "@/router";
import { ref, computed, onMounted, watch, nextTick, reactive } from "vue";

const rechargeFlag = ref(false); // 充值弹窗
const rechargeUrl = ref(""); // 充值链接
const showLoginDialog = ref(false); // 控制登录弹窗显示
const showUserCenter = ref(false); // 控制个人中心弹窗显示
const showVipPackages = ref(false); // 控制会员套餐弹窗显示
const showRechargePackages = ref(false); // 控制充值额度弹窗显示
const activeVipTab = ref("global"); // 活跃的会员类型标签: 'high' 或 'global'
const selectedPackage = ref(1); // 选中的会员套餐索引
const activePayment = ref("wechat"); // 活跃的支付方式: 'wechat' 或 'alipay'
const displayPrice = ref(3.9); // 显示的价格，初始为9.9元

// 充值相关变量
const selectedRechargePackage = ref(1); // 选中的充值套餐索引
const activeRechargePayment = ref("wechat"); // 活跃的充值支付方式: 'wechat' 或 'alipay'
const rechargeQrcodeUrl = ref(""); // 充值二维码链接

// 会员套餐选项 - 使用reactive保证响应式
const vipPackages = reactive([
  {
    name: "3天",
    price: 3.9,
    originalPrice: 6.9,
    qrcode: "",
  },
  {
    name: "7天",
    price: 9.9,
    originalPrice: 14.9,
    qrcode: "",
  },
  {
    name: "1个月",
    price: 15.9,
    originalPrice: 21.9,
    qrcode: "",
  },
]);

// 充值额度选项
const rechargePackages = reactive([
  {
    amount: "1000",
    price: 0.9,
    originalPrice: 1.9,
    qrcode: "",
  },
  {
    amount: "10000",
    price: 5.9,
    originalPrice: 9.9,
    qrcode: "",
  },
  {
    amount: "100000",
    price: 49.9,
    originalPrice: 99.9,
    qrcode: "",
  },
]);

// 更新显示价格的函数 - 兼容所有浏览器
const updateDisplayPrice = () => {
  const index = selectedPackage.value;
  displayPrice.value = vipPackages[index].price;
  // console.log("价格已更新为:", displayPrice.value);
};

// 初始化 - 确保初始价格正确
onMounted(() => {
  updateDisplayPrice();
});

// 监听会员套餐弹窗显示状态，显示时更新价格并加载充值链接
watch(showVipPackages, (newVal) => {
  if (newVal) {
    updateDisplayPrice();
    loadRechargeUrl();
  }
});

// 监听支付方式变化
watch(activePayment, () => {
  loadRechargeUrl();
});

// 监听选中的套餐变化
watch(selectedPackage, (newVal) => {
  console.log("套餐选择改变:", newVal, vipPackages[newVal].price);
  updateDisplayPrice();
  loadRechargeUrl();
});

// 选择套餐函数
const selectPackage = (index) => {
  console.log("点击选择套餐:", index, "价格:", vipPackages[index].price);
  selectedPackage.value = index;
  updateDisplayPrice(); // 立即更新价格，不依赖watch

  // 确保在下一个DOM更新周期也更新价格（双保险）
  nextTick(() => {
    updateDisplayPrice();
  });
};

// 加载充值链接
const loadRechargeUrl = () => {
  rechargeUrl.value = ""; // 先清空链接，显示加载状态

  // 构建查询参数
  const packageInfo = vipPackages[selectedPackage.value];
  const params = new URLSearchParams();
  params.append("packageType", activeVipTab.value);
  params.append("duration", packageInfo.name);
  params.append("price", packageInfo.price.toString());
  params.append("paymentMethod", activePayment.value);

  // 调用API加载充值链接
  window.$api
    .recharge(params.toString())
    .then((res) => {
      const { code, data } = res;
      if (code === 200) {
        rechargeUrl.value = data;
      }
    })
    .catch((err) => {
      showCustomTip("获取支付链接失败", err);
    });
};

const isLogin = computed(() => {
  return JSON.parse(window.sessionStorage.getItem("login") as string) || false;
});
const loginInfo = ref({
  mobileNumber: "",
  password: "",
});

// 用户信息
const userInfo = ref({
  userId: "10086",
  nickname: "抽奖达人",
  vipLevel: "normal", // 'normal'(普通会员), 'high'(高级会员) 或 非会员
  isVip: true,
  vipExpiry: "2024-12-31",
  balance: 1000,
  withdrawable: 288,
});

const eventList = ref<any>([]);
const eventMap = {
  银翼出击: {
    img: "/images/game3/advpic.png",
    url: "/game3.html",
    freeUrl: "",
  },
  星辰所向: {
    img: "/images/game1/advpic.png",
    url: "/game1.html",
    freeUrl: "/game1-free.html",
  },
  荣耀世冠白鲨: {
    img: "/images/game4/advpic.png",
    url: "/game4.html",
    freeUrl: "/game4-free.html",
  },
};

// 添加默认活动数据，确保未登录状态下也有内容显示
const defaultEvents = [
  {
    id: 1,
    title: "银翼出击",
    gameName: "王者荣耀",
    img: "/images/game3/advpic.png",
    url: "/game3.html",
    freeUrl: "",
  },
  {
    id: 2,
    title: "星辰所向",
    gameName: "王者荣耀",
    img: "/images/game1/advpic.png",
    url: "/game1.html",
    freeUrl: "/game1-free.html",
  },
  {
    id: 3,
    title: "荣耀世冠白鲨",
    gameName: "王者荣耀",
    img: "/images/game4/advpic.png",
    url: "/game4.html",
    freeUrl: "/game4-free.html",
  },
];

onMounted(() => {
  document.title = "抽奖模拟器";

  // 先设置默认数据，确保页面有内容显示
  eventList.value = defaultEvents;

  // 然后尝试从API获取数据
  window.$api
    .getEventList()
    .then((res) => {
      const { code, data } = res;
      if (code === 200 && data && data.length > 0) {
        eventList.value = data.map((d, idx) => {
          const item = eventMap[d.title] || {};
          return {
            ...d,
            ...item,
          };
        });
      }
    })
    .catch((err) => {
      console.log("获取活动列表失败，使用默认数据", err);
      // 出错时保持默认数据
    });
});

const goUrl = (url, eventId, newWindow = false) => {
  if (!url) return;

  // 如果用户未登录且点击的是付费选项，则显示登录弹窗
  if (!isLogin.value && eventId) {
    showLoginDialog.value = true;
    return;
  }

  const finalUrl = eventId ? `${url}?eventId=${eventId}` : url;

  // 在新窗口打开链接
  if (newWindow) {
    window.open(finalUrl, "_blank");
  } else {
    window.location.href = finalUrl;
  }
};
const handleRegister = () => {
  router.push("/register");
}
const handleForgetPassword = () => {
  router.push("/forgotPassword");
}

const handleLogin = () => {
  if (!loginInfo.value.mobileNumber || !loginInfo.value.password) {
    showCustomTip("请填写完整的账号和密码！");
    return
  }
  window.$api
    .loginApi({
      ...loginInfo.value,
      loginType: 1,
    })
    .then((res) => {
      const { code, data } = res;
      sessionStorage.setItem("login", JSON.stringify(data));
      sessionStorage.setItem("isLogin", "1");
      showLoginDialog.value = false;
      window.location.reload();
    }).catch((err) => {
      showCustomTip(err.data.msg);
    })
};

const handleRecharge = () => {
  showUserCenter.value = false; // 关闭个人中心
  showRechargePackages.value = true; // 显示充值额度选择弹窗

  // 加载充值二维码
  loadRechargeQrcode();
};

const handleVipAction = () => {
  // 处理会员开通/续费逻辑
  showUserCenter.value = false; // 关闭个人中心弹窗
  showVipPackages.value = true; // 显示会员套餐弹窗

  // 加载充值链接
  loadRechargeUrl();
};

const handleLogout = () => {
  sessionStorage.removeItem("login");
  sessionStorage.removeItem("isLogin");
  showUserCenter.value = false;
  window.location.reload();
};

// 自定义提示
const customTip = ref({
  show: false,
  message: "",
});

// 显示自定义提示
const showCustomTip = (message: string) => {
  customTip.value.message = message;
  customTip.value.show = true;

  // 3秒后自动关闭提示
  setTimeout(() => {
    customTip.value.show = false;
  }, 3000);
};

// 点击高级会员提示
const showHighVipTip = () => {
  showCustomTip("暂未开放~敬请期待");
};

// 点击支付宝提示
const showAlipayTip = () => {
  activePayment.value = "alipay"; // 激活支付宝按钮
  showCustomTip("手机支付宝跳转链接");

  // 加载支付链接
  loadRechargeUrl();
};

// 更新支付方式选择逻辑
const selectPaymentMethod = (method) => {
  activePayment.value = method;

  // 加载新的支付链接
  loadRechargeUrl();
};

// 选择充值额度
const selectRechargePackage = (index) => {
  console.log(
    "点击选择充值额度:",
    index,
    "价格:",
    rechargePackages[index].price
  );
  selectedRechargePackage.value = index;

  // 加载对应的充值二维码
  loadRechargeQrcode();
};

// 选择充值支付方式
const selectRechargePaymentMethod = (method) => {
  activeRechargePayment.value = method;

  // 加载新的支付二维码
  loadRechargeQrcode();
};

// 显示支付宝充值提示
const showRechargeAlipayTip = () => {
  activeRechargePayment.value = "alipay";
  showCustomTip("手机支付宝跳转链接");

  // 加载支付链接
  loadRechargeQrcode();
};

// 加载充值二维码
const loadRechargeQrcode = () => {
  rechargeQrcodeUrl.value = ""; // 先清空链接，显示加载状态

  // 构建查询参数
  const packageInfo = rechargePackages[selectedRechargePackage.value];
  const params = new URLSearchParams();
  params.append("amount", packageInfo.amount);
  params.append("price", packageInfo.price.toString());
  params.append("paymentMethod", activeRechargePayment.value);

  // 调用API加载充值二维码
  window.$api
    .recharge(params.toString())
    .then((res) => {
      const { code, data } = res;
      if (code === 200) {
        rechargeQrcodeUrl.value = data;
      }
    })
    .catch((err) => {
      console.error("获取充值二维码失败", err);
    });
};

// 监听充值弹窗显示状态，显示时加载充值二维码
watch(showRechargePackages, (newVal) => {
  if (newVal) {
    loadRechargeQrcode();
  }
});

// 复制文本到剪贴板
const copyToClipboard = (text) => {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      showCustomTip("已复制到剪贴板");
    })
    .catch((err) => {
      console.error("复制失败", err);
      showCustomTip("复制失败，请手动复制");
    });
};

// 打开链接
const openLink = (url) => {
  window.open(url, "_blank");
};
</script>

<style scoped lang="less">
.main {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f8f9fa;
  position: relative; // 添加相对定位以便于定位广告栏

  // 广告侧边栏样式
  .adSidebar {
    position: fixed;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 200px;
    background-color: #fff;
    border-radius: 0 8px 8px 0;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
    z-index: 100;
    padding: 15px;

    &_header {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      padding-bottom: 8px;
      border-bottom: 1px solid #eaeaea;
    }

    &_title {
      font-size: 14px;
      font-weight: 600;
      color: #1a8758;
      margin-right: 5px;
    }

    &_icon {
      width: 20px;
      height: 20px;
    }

    &_tip {
      font-size: 12px;
      color: #888;
      margin-bottom: 10px;
      line-height: 1.4;
    }

    &_items {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    &_item {
      display: block;
      padding: 8px 10px;
      background: linear-gradient(to right, #26c9a0, #1a8758);
      color: white;
      font-size: 12px;
      border-radius: 4px;
      text-align: center;
      cursor: pointer;
      text-decoration: none;
      transition: all 0.3s;
      line-height: 1.4;
      box-shadow: 0 2px 4px rgba(26, 135, 88, 0.2);

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(26, 135, 88, 0.3);
      }

      &:nth-child(2) {
        background: linear-gradient(to right, #14b8a6, #0d9488);
      }

      &:nth-child(3) {
        background: linear-gradient(to right, #f43f5e, #e11d48);
      }

      &:nth-child(4) {
        background: linear-gradient(to right, #6366f1, #4f46e5);
      }

      &:nth-child(5) {
        background: linear-gradient(to right, #f97316, #ea580c);
      }
    }
  }

  // 响应式调整
  @media (max-width: 1200px) {
    .adSidebar {
      width: 160px;
    }
  }

  @media (max-width: 768px) {
    .adSidebar {
      position: static;
      width: 100%;
      margin-bottom: 15px;
      transform: none;
      border-radius: 0;

      &_items {
        flex-direction: row;
        flex-wrap: wrap;

        .adSidebar_item {
          flex: 1 1 calc(50% - 5px);
          min-width: 150px;
        }
      }
    }
  }

  &_header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    background: linear-gradient(135deg, #f81ee6, #c634db);
    color: white;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    position: relative;
  }

  &_title {
    font-size: 24px;
    font-weight: 600;
    margin: 0;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  &_user {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-left: auto;

    &_avatar {
      width: 40px;
      height: 40px;
      background-image: url("@/assets/images/defaultIcon.png");
      background-size: cover;
      border-radius: 50%;
      cursor: pointer;
      border: 2px solid white;
    }

    &_login {
      padding: 8px 20px;
      background-color: white;
      color: #f81ee6;
      border: none;
      border-radius: 20px;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }
    }
  }

  &_content {
    flex: 1;
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
  }

  &_eventList {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    justify-content: center;

    &_item {
      display: flex;
      flex-direction: column;
      border-radius: 12px;
      overflow: hidden;
      background-color: white;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
      transition: all 0.3s;

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
      }

      img {
        width: 100%;
        height: 180px;
        object-fit: cover;
      }

      &_main {
        padding: 15px;

        p {
          font-size: 16px;
          font-weight: 500;
          text-align: center;
          margin-bottom: 15px;
          color: #333;
        }

        ul {
          display: flex;
          justify-content: space-between;
          gap: 10px;

          li {
            flex: 1;
            padding: 8px 0;
            border-radius: 6px;
            color: #fff;
            text-align: center;
            font-size: 14px;
            cursor: pointer;
            transition: all 0.3s;

            &:nth-child(1) {
              background-color: #1d6e04;
            }

            &:nth-child(2) {
              background-color: #c34cb2;
            }

            &:nth-child(3) {
              background-color: #06f;
            }

            &:hover {
              transform: translateY(-2px);
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
            }
          }
        }
      }
    }
  }
}

.userCenterDialog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;

  &_main {
    width: 420px;
    padding: 30px;
    border-radius: 16px;
    background-color: #fff;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    position: relative;
    animation: fadeIn 0.3s ease-in-out;

    &_close {
      position: absolute;
      top: 15px;
      right: 20px;
      font-size: 24px;
      font-weight: 300;
      color: #888;
      cursor: pointer;
      transition: color 0.3s;

      &:hover {
        color: #f81ee6;
      }
    }

    &_header {
      display: flex;
      align-items: center;
      margin-bottom: 25px;
    }

    &_avatar {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      overflow: hidden;
      margin-right: 15px;
      border: 2px solid #f81ee6;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &_info {
      flex: 1;

      h3 {
        font-size: 18px;
        font-weight: 600;
        color: #333;
        margin: 0 0 8px 0;
      }
    }

    &_vip {
      display: flex;
      align-items: center;

      .vip-tag {
        padding: 3px 8px;
        border-radius: 4px;
        font-size: 12px;
        font-weight: 500;
        color: white;
        margin-right: 10px;

        &.vip-level-0 {
          background: linear-gradient(135deg, #a0a0a0, #777);
        }

        &.vip-level-normal {
          background: linear-gradient(135deg, #f81ee6, #c634db);
        }

        &.vip-level-high {
          background: linear-gradient(135deg, #ffd700, #ff9800);
        }
      }

      .vip-expiry {
        font-size: 12px;
        color: #888;
      }
    }

    &_stats {
      display: flex;
      justify-content: space-between;
      margin-bottom: 25px;
      padding: 15px;
      background-color: #f9f9f9;
      border-radius: 12px;

      .stat-item {
        flex: 1;
        text-align: center;

        .stat-value {
          font-size: 20px;
          font-weight: 600;
          color: #f81ee6;
        }

        .stat-label {
          font-size: 12px;
          color: #888;
          margin-top: 5px;
        }
      }
    }

    &_actions {
      display: flex;
      gap: 15px;
      margin-bottom: 25px;

      .action-btn {
        flex: 1;
        height: 46px;
        border: none;
        border-radius: 8px;
        font-size: 15px;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.3s;

        &:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        &.vip-btn {
          background: linear-gradient(135deg, #f81ee6, #c634db);
          color: white;
        }

        &.recharge-btn {
          background-color: #f5f5f5;
          color: #333;
          border: 1px solid #e0e0e0;
        }
      }
    }

    &_menu {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 15px;

      .menu-item {
        display: flex;
        align-items: center;
        padding: 12px 15px;
        background-color: #f9f9f9;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.3s;

        &:hover {
          background-color: #f0f0f0;
        }

        .menu-icon {
          width: 20px;
          height: 20px;
          margin-right: 10px;
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;

          &.order-icon {
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23f81ee6'%3E%3Cpath d='M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z'/%3E%3C/svg%3E");
          }

          &.history-icon {
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23f81ee6'%3E%3Cpath d='M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z'/%3E%3C/svg%3E");
          }

          &.settings-icon {
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23f81ee6'%3E%3Cpath d='M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z'/%3E%3C/svg%3E");
          }

          &.logout-icon {
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23f81ee6'%3E%3Cpath d='M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z'/%3E%3C/svg%3E");
          }
        }

        span {
          font-size: 14px;
          color: #333;
        }
      }
    }
  }
}

.vipPackageDialog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;

  &_main {
    width: 450px;
    padding: 0;
    border-radius: 12px;
    background-color: #fff;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    position: relative;
    animation: fadeIn 0.3s ease-in-out;
    overflow: hidden;

    &_close {
      position: absolute;
      top: 15px;
      right: 20px;
      font-size: 24px;
      font-weight: 300;
      color: #888;
      cursor: pointer;
      transition: color 0.3s;
      z-index: 10;

      &:hover {
        color: #f81ee6;
      }
    }

    &_header {
      padding: 25px 20px 15px;
      text-align: center;
      background: linear-gradient(to right, #fbe8ae, #f8df82);

      h2 {
        font-size: 20px;
        color: #a97d0c;
        margin: 0 0 5px 0;
      }

      .username {
        font-size: 14px;
        color: #a97d0c;
        margin: 0;
      }
    }

    &_tabs {
      display: flex;
      border-bottom: 1px solid #f0f0f0;

      .tab {
        flex: 1;
        padding: 15px 10px;
        text-align: center;
        font-size: 16px;
        color: #666;
        cursor: pointer;
        position: relative;

        &.active {
          color: #f81ee6;

          &:after {
            content: "";
            position: absolute;
            bottom: -1px;
            left: 20%;
            width: 60%;
            height: 2px;
            background-color: #f81ee6;
          }
        }

        .tab-desc {
          font-size: 12px;
          color: #999;
          margin-top: 5px;
        }
      }
    }

    &_packages {
      display: flex;
      padding: 20px;
      gap: 10px;

      .package {
        flex: 1;
        border: 1px solid #e0e0e0;
        border-radius: 8px;
        padding: 15px 10px;
        text-align: center;
        cursor: pointer;
        transition: all 0.3s;

        &.active {
          border-color: #f81ee6;
          background-color: rgba(248, 30, 230, 0.05);
        }

        &:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
        }

        .package-duration {
          font-size: 16px;
          font-weight: 500;
          color: #333;
          margin-bottom: 5px;
        }

        .package-price {
          margin-bottom: 5px;

          .current-price {
            font-size: 20px;
            font-weight: 600;
            color: #f81ee6;
            margin-right: 5px;
          }

          .original-price {
            font-size: 12px;
            color: #999;
            text-decoration: line-through;
          }
        }
      }
    }

    &_payment {
      padding: 0 20px 20px;

      .payment-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;

        .price {
          font-size: 24px;
          font-weight: 600;
          color: #f81ee6;

          .unit {
            font-size: 14px;
            font-weight: normal;
          }
        }

        .payment-options {
          display: flex;
          gap: 10px;

          .payment-option {
            display: flex;
            align-items: center;
            padding: 5px 10px;
            border: 1px solid #e0e0e0;
            border-radius: 4px;
            cursor: pointer;

            &.active {
              border-color: #f81ee6;
              background-color: rgba(248, 30, 230, 0.05);
            }

            img {
              width: 20px;
              height: 20px;
              margin-right: 5px;
            }

            span {
              font-size: 14px;
              color: #666;
            }
          }
        }
      }

      .payment-qrcode {
        text-align: center;
        padding: 20px 0;
        min-height: 280px;

        .iframe-container {
          width: 250px;
          height: 300px;
          margin: 0 auto;
          overflow: hidden;
          position: relative;

          iframe {
            position: absolute;
            top: -175px;
            left: -70px;
            width: 400px;
            height: 600px;
            border: none;
            transform: scale(1);
          }
        }

        .payment-loading {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 200px;

          .spinner {
            width: 40px;
            height: 40px;
            border: 4px solid #f3f3f3;
            border-top: 4px solid #f81ee6;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin-bottom: 15px;
          }

          p {
            color: #888;
          }
        }
      }
    }

    &_footer {
      text-align: center;
      padding: 15px;
      background-color: #f9f9f9;
      border-top: 1px solid #f0f0f0;

      p {
        font-size: 12px;
        color: #999;
        margin: 0;
      }
    }
  }
}

.rechargeDialog {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  &_main {
    width: 80%;
    height: 80vh;
    background-color: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    position: relative;

    &_title {
      position: absolute;
      top: 10px;
      right: 15px;
      font-size: 24px;
      font-weight: 300;
      cursor: pointer;
      z-index: 10;
      width: 30px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.8);

      &:hover {
        background-color: #f0f0f0;
      }
    }

    &_frame {
      width: 100%;
      height: 100%;
    }
  }
}

.loginDialog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;

  &_main {
    width: 380px;
    padding: 30px;
    border-radius: 16px;
    background-color: #fff;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    animation: fadeIn 0.3s ease-in-out;
    position: relative;

    &_close {
      position: absolute;
      top: 15px;
      right: 20px;
      font-size: 24px;
      font-weight: 300;
      color: #888;
      cursor: pointer;
      transition: color 0.3s;

      &:hover {
        color: #f81ee6;
      }
    }

    &_title {
      font-size: 24px;
      font-weight: 600;
      color: #333;
      margin-bottom: 5px;
    }

    &_subtitle {
      font-size: 16px;
      color: #888;
      margin-bottom: 25px;
    }

    &_input {
      width: 100%;
      margin: 10px 0;
      display: flex;
      align-items: center;
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      overflow: hidden;
      transition: all 0.3s;

      &:focus-within {
        border-color: #f81ee6;
        box-shadow: 0 0 0 2px rgba(248, 30, 230, 0.1);
      }

      .input_icon {
        width: 50px;
        height: 46px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #f9f9f9;

        i {
          display: inline-block;
          width: 20px;
          height: 20px;
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
        }

        .user-icon {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23888'%3E%3Cpath d='M12 12c2.21 0 4-1.79 4-4s1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/%3E%3C/svg%3E");
        }

        .password-icon {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23888'%3E%3Cpath d='M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z'/%3E%3C/svg%3E");
        }
      }

      input {
        flex: 1;
        height: 46px;
        padding: 0 15px;
        border: none;
        outline: none;
        font-size: 15px;

        &::placeholder {
          color: #aaa;
        }
      }
    }

    &_btn {
      width: 100%;
      height: 46px;
      margin-top: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 16px;
      font-weight: 500;
      color: #fff;
      background: linear-gradient(135deg, #f81ee6, #c634db);
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.3s;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(248, 30, 230, 0.3);
      }

      &:active {
        transform: translateY(0);
      }
    }

    &_options {
      width: 100%;
      margin-top: 15px;
      display: flex;
      justify-content: space-between;
      font-size: 14px;
      color: #888;

      span {
        cursor: pointer;
        transition: color 0.3s;

        &:hover {
          color: #f81ee6;
        }
      }
    }
  }
}

.customTipDialog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1100;
  background-color: rgba(0, 0, 0, 0.5);

  &_main {
    background-color: white;
    width: 300px;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    animation: fadeIn 0.2s ease-in-out;
  }

  &_content {
    padding: 30px 20px;
    text-align: center;
    font-size: 16px;
    color: #333;
  }

  &_button {
    padding: 12px 0;
    text-align: center;
    background-color: #f81ee6;
    color: white;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: darken(#f81ee6, 5%);
    }
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
