<template>
  <div class="register-container">
    <div class="register-form">
      <h2>注册账号</h2>
      
      <div class="form-item">
        <label>用户名</label>
        <input 
          type="text" 
          v-model="formData.username" 
          placeholder="请输入用户名" 
        />
        <div class="error-message" v-if="errors.username">{{ errors.username }}</div>
      </div>
      
      <div class="form-item">
        <label>昵称</label>
        <input 
          type="text" 
          v-model="formData.nickName" 
          placeholder="请输入昵称" 
        />
        <div class="error-message" v-if="errors.nickName">{{ errors.nickName }}</div>
      </div>
      
      <div class="form-item">
        <label>邮箱</label>
        <input 
          type="email" 
          v-model="formData.email" 
          placeholder="请输入邮箱" 
        />
        <div class="error-message" v-if="errors.email">{{ errors.email }}</div>
      </div>
      
      <div class="form-item">
        <label>手机号码</label>
        <input 
          type="text" 
          v-model="formData.mobileNumber" 
          placeholder="请输入手机号码" 
        />
        <div class="error-message" v-if="errors.mobileNumber">{{ errors.mobileNumber }}</div>
      </div>
      
      <div class="form-item verification-code">
        <label>验证码</label>
        <div class="code-container">
          <input 
            type="text" 
            v-model="formData.captcha" 
            placeholder="请输入验证码" 
          />
          <button 
            class="send-code-btn" 
            :disabled="countdown > 0" 
            @click="sendVerificationCode"
          >
            {{ countdown > 0 ? `${countdown}秒后重新获取` : '获取验证码' }}
          </button>
        </div>
        <div class="error-message" v-if="errors.captcha">{{ errors.captcha }}</div>
      </div>
      
      <div class="form-item">
        <label>密码</label>
        <input 
          type="password" 
          v-model="formData.password" 
          placeholder="请输入密码"
        />
        <div class="error-message" v-if="errors.password">{{ errors.password }}</div>
      </div>
      
      <div class="form-item">
        <label>推荐人ID</label>
        <input 
          type="number" 
          v-model="formData.referrerId" 
          placeholder="请输入推荐人ID"
        />
        <div class="error-message" v-if="errors.referrerId">{{ errors.referrerId }}</div>
      </div>
      
      <!-- <div class="form-item checkbox">
        <input 
          type="checkbox" 
          id="agreement" 
          v-model="formData.agreement"
        />
        <label for="agreement">我已阅读并同意 <a href="javascript:void(0)" @click="showAgreement">用户协议</a> 和 <a href="javascript:void(0)" @click="showPrivacy">隐私政策</a></label>
        <div class="error-message" v-if="errors.agreement">{{ errors.agreement }}</div>
      </div> -->
      
      <div class="form-actions">
        <button class="register-btn" @click="handleRegister">注册</button>
      </div>
      
      <div class="form-footer">
        <p>已有账号？<a href="javascript:void(0)" @click="goToLogin">立即登录</a></p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const formData = reactive({
  username: '',
  nickName: '',
  email: '',
  mobileNumber: '',
  captcha: '',
  password: '',
  referrerId: null,
  agreement: false
});

const errors = reactive({
  username: '',
  nickName: '',
  email: '',
  mobileNumber: '',
  captcha: '',
  password: '',
  referrerId: '',
  agreement: ''
});

const countdown = ref(0);

// 发送验证码
const sendVerificationCode = () => {
  // 手机号验证
  if (!formData.mobileNumber) {
    errors.mobileNumber = '请输入手机号码';
    return;
  }
  
  if (!/^1[3-9]\d{9}$/.test(formData.mobileNumber)) {
    errors.mobileNumber = '请输入正确的手机号码';
    return;
  }
  
  // 清除错误信息
  errors.mobileNumber = '';
  
  // 模拟发送验证码
  countdown.value = 60;
  const timer = setInterval(() => {
    countdown.value--;
    if (countdown.value <= 0) {
      clearInterval(timer);
    }
  }, 1000);
  
  // 这里添加发送验证码的API调用
  console.log('发送验证码到', formData.mobileNumber);
  window.$api.sendLoginCaptchaApi({
    "mobileNumber": formData.mobileNumber
  }).then((res) => {
    console.log(res)
  }).catch((err) => {
    const {code, msg} = err.data;
    if (code == -1) {
      errors.captcha = msg;
    }
  })
};

// 验证表单
const validateForm = () => {
  let isValid = true;
  
  // 验证用户名
  if (!formData.username) {
    errors.username = '请输入用户名';
    isValid = false;
  } else {
    errors.username = '';
  }
  
  // 验证昵称
  if (!formData.nickName) {
    errors.nickName = '请输入昵称';
    isValid = false;
  } else {
    errors.nickName = '';
  }
  
  // 验证邮箱
  if (!formData.email) {
    errors.email = '请输入邮箱';
    isValid = false;
  } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
    errors.email = '请输入正确的邮箱';
    isValid = false;
  } else {
    errors.email = '';
  }
  
  // 验证手机号
  if (!formData.mobileNumber) {
    errors.mobileNumber = '请输入手机号码';
    isValid = false;
  } else if (!/^1[3-9]\d{9}$/.test(formData.mobileNumber)) {
    errors.mobileNumber = '请输入正确的手机号码';
    isValid = false;
  } else {
    errors.mobileNumber = '';
  }
  
  // 验证验证码
  if (!formData.captcha) {
    errors.captcha = '请输入验证码';
    isValid = false;
  } else {
    errors.captcha = '';
  }
  
  // 验证密码
  if (!formData.password) {
    errors.password = '请输入密码';
    isValid = false;
  } else if (formData.password.length < 6) {
    errors.password = '密码长度不能少于6位';
    isValid = false;
  } else {
    errors.password = '';
  }
  
  // 验证推荐人ID
  // if (formData.referrerId === null) {
  //   errors.referrerId = '请输入推荐人ID';
  //   isValid = false;
  // } else {
  //   errors.referrerId = '';
  // }
  
  // 验证协议勾选
  // if (!formData.agreement) {
  //   errors.agreement = '请阅读并同意用户协议和隐私政策';
  //   isValid = false;
  // } else {
  //   errors.agreement = '';
  // }
  
  return isValid;
};

// 注册逻辑
const handleRegister = () => {
  if (!validateForm()) {
    return;
  }
  
  // 这里添加注册API调用
  console.log('注册信息', formData);
  
  window.$api.registerApi({
    ...formData
  }).then((res) => {
    console.log(res);

    // 注册成功后跳转到登录页面
    router.push('/homePage')

    // eslint-disable-next-line no-alert
    alert('注册成功，即将跳转到登录页面');
  })
};

// 跳转到登录页面
const goToLogin = () => {
  router.push('/homePage')
};

// 显示用户协议
const showAgreement = () => {
  // eslint-disable-next-line no-alert
  alert('显示用户协议');
};

// 显示隐私政策
const showPrivacy = () => {
  // eslint-disable-next-line no-alert
  alert('显示隐私政策');
};
</script>

<style scoped>
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 100vh; */
  background-color: #f5f5f5;
}

.register-form {
  width: 400px;
  padding: 30px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  margin-bottom: 30px;
  color: #333;
}

.form-item {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
  color: #333;
  font-size: 14px;
}

input[type="text"],
input[type="email"],
input[type="password"],
input[type="number"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.3s;
}

input[type="text"]:focus,
input[type="email"]:focus,
input[type="password"]:focus,
input[type="number"]:focus {
  border-color: #409eff;
}

.verification-code .code-container {
  display: flex;
}

.verification-code input {
  flex: 1;
  margin-right: 10px;
}

.send-code-btn {
  width: 120px;
  padding: 0 10px;
  background: linear-gradient(135deg, #0062cc, #1e90ff, #00bfff);
  background-size: 200% 200%;
  animation: gradientAnimation 3s ease infinite;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 12px;
  cursor: pointer;
}

.send-code-btn:disabled {
  background-color: #a0cfff;
  cursor: not-allowed;
}

.checkbox {
  display: flex;
  align-items: center;
}

.checkbox input {
  margin-right: 5px;
}

.checkbox label {
  margin-bottom: 0;
  font-size: 12px;
}

.checkbox a {
  color: #409eff;
  text-decoration: none;
}

.error-message {
  color: #f56c6c;
  font-size: 12px;
  margin-top: 5px;
}

.form-actions {
  margin-top: 30px;
}

.register-btn {
  width: 100%;
  padding: 12px 0;
  background: linear-gradient(135deg, #0062cc, #1e90ff, #00bfff);
  background-size: 200% 200%;
  animation: gradientAnimation 3s ease infinite;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.register-btn:hover {
  background-color: #66b1ff;
}

.form-footer {
  margin-top: 20px;
  text-align: center;
  font-size: 14px;
}

.form-footer a {
  color: #409eff;
  text-decoration: none;
}
            
@keyframes gradientAnimation {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}
</style> 