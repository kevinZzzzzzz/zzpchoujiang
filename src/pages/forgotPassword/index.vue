<template>
  <div class="forgot-password-container">
    <div class="forgot-password-form">
      <h2>忘记密码</h2>
      
      <div class="form-item">
        <label>手机号码</label>
        <input 
          type="text" 
          v-model="formData.phone" 
          placeholder="请输入注册时使用的手机号码" 
        />
        <div class="error-message" v-if="errors.phone">{{ errors.phone }}</div>
      </div>
      
      <div class="form-item verification-code">
        <label>验证码</label>
        <div class="code-container">
          <input 
            type="text" 
            v-model="formData.verificationCode" 
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
        <div class="error-message" v-if="errors.verificationCode">{{ errors.verificationCode }}</div>
      </div>
      
      <div class="form-item" v-if="step === 2">
        <label>新密码</label>
        <input 
          type="password" 
          v-model="formData.newPassword" 
          placeholder="请输入新密码"
        />
        <div class="error-message" v-if="errors.newPassword">{{ errors.newPassword }}</div>
      </div>
      
      <div class="form-item" v-if="step === 2">
        <label>确认新密码</label>
        <input 
          type="password" 
          v-model="formData.confirmPassword" 
          placeholder="请再次输入新密码"
        />
        <div class="error-message" v-if="errors.confirmPassword">{{ errors.confirmPassword }}</div>
      </div>
      
      <div class="form-actions">
        <button v-if="step === 1" class="next-btn" @click="verifyCode">下一步</button>
        <button v-if="step === 2" class="reset-btn" @click="resetPassword">重置密码</button>
      </div>
      
      <div class="form-footer">
        <p>想起密码了？<a href="javascript:void(0)" @click="goToLogin">返回登录</a></p>
        <p>没有账号？<a href="javascript:void(0)" @click="goToRegister">立即注册</a></p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const step = ref(1); // 1: 验证手机号 2: 重置密码

const formData = reactive({
  phone: '',
  verificationCode: '',
  newPassword: '',
  confirmPassword: ''
});

const errors = reactive({
  phone: '',
  verificationCode: '',
  newPassword: '',
  confirmPassword: ''
});

const countdown = ref(0);

// 发送验证码
const sendVerificationCode = () => {
  // 手机号验证
  if (!formData.phone) {
    errors.phone = '请输入手机号码';
    return;
  }
  
  if (!/^1[3-9]\d{9}$/.test(formData.phone)) {
    errors.phone = '请输入正确的手机号码';
    return;
  }
  
  // 清除错误信息
  errors.phone = '';
  
  // 模拟发送验证码
  countdown.value = 60;
  const timer = setInterval(() => {
    countdown.value--;
    if (countdown.value <= 0) {
      clearInterval(timer);
    }
  }, 1000);
  
  // 这里添加发送验证码的API调用
  console.log('发送验证码到', formData.phone);
  window.$api.sendResetPasswordCaptchaApi({
    "resetPasswordType": "1",
    "email": "",
    "mobileNumber": formData.phone
  }).then((res) => {
    console.log(res)
  }).catch((err) => {
    const {code, msg} = err.data;
    if (code == -1) {
      errors.verificationCode = msg;
    }
  })
};

// 验证手机号和验证码
const verifyCode = () => {
  let isValid = true;
  
  // 验证手机号
  if (!formData.phone) {
    errors.phone = '请输入手机号码';
    isValid = false;
  } else if (!/^1[3-9]\d{9}$/.test(formData.phone)) {
    errors.phone = '请输入正确的手机号码';
    isValid = false;
  } else {
    errors.phone = '';
  }
  
  // 验证验证码
  if (!formData.verificationCode) {
    errors.verificationCode = '请输入验证码';
    isValid = false;
  } else {
    errors.verificationCode = '';
  }
  
  if (!isValid) {
    return;
  }
  
  // 模拟验证码校验
  // 实际应用中应该调用API进行验证
  console.log('验证码校验通过');
  
  // 进入下一步
  step.value = 2;
};

// 重置密码
const resetPassword = () => {
  let isValid = true;
  
  // 验证新密码
  if (!formData.newPassword) {
    errors.newPassword = '请输入新密码';
    isValid = false;
  } else if (formData.newPassword.length < 6) {
    errors.newPassword = '密码长度不能少于6位';
    isValid = false;
  } else {
    errors.newPassword = '';
  }
  
  // 验证确认密码
  if (!formData.confirmPassword) {
    errors.confirmPassword = '请再次输入密码';
    isValid = false;
  } else if (formData.confirmPassword !== formData.newPassword) {
    errors.confirmPassword = '两次输入的密码不一致';
    isValid = false;
  } else {
    errors.confirmPassword = '';
  }
  
  if (!isValid) {
    return;
  }
  
  // 这里添加重置密码的API调用
  console.log('重置密码', formData);
  window.$api.resetPasswordApi({
    "resetPasswordType": "1",
    "email": "",
    "mobileNumber": formData.phone,
    "captcha": formData.verificationCode,
    "password": formData.newPassword
  }).then((res) => {
    console.log(res)
    // 重置密码成功后跳转到登录页面
    // eslint-disable-next-line no-alert
    alert('密码重置成功，即将跳转到登录页面');
    goToLogin();
  })
};

// 跳转到登录页面
const goToLogin = () => {
  router.push('/homePage');
};

// 跳转到注册页面
const goToRegister = () => {
  router.push('/register');
};
</script>

<style scoped>
.forgot-password-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
}

.forgot-password-form {
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
input[type="password"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.3s;
}

input[type="text"]:focus,
input[type="password"]:focus {
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

.error-message {
  color: #f56c6c;
  font-size: 12px;
  margin-top: 5px;
}

.form-actions {
  margin-top: 30px;
}

.next-btn,
.reset-btn {
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

.next-btn:hover,
.reset-btn:hover {
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

.form-footer p {
  margin-bottom: 10px;
}
</style> 