<template>
  <div class="bg"></div>
  <div class="login-panel">
    <h3 class="title">后台管理系统</h3>
    <el-tabs type="border-card" v-model="loginMode" class="demo-tabs" :stretch="true">
      <el-tab-pane name="account">
        <template #label>
          <span class="icon-span">
            <el-icon><UserFilled /></el-icon>
            <span>账号登录</span>
          </span>
        </template>

        <el-form ref="loginFormRef" :model="loginForm" :rules="rules" label-width="60px">
          <el-form-item label="账号" prop="name">
            <el-input v-model="loginForm.name" size="large" />
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="loginForm.password" type="password" show-password size="large" />
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span class="icon-span">
            <el-icon><Iphone /></el-icon>
            <span>手机登录</span>
          </span>
        </template>
        <el-form ref="phoneFormRef" :model="phoneForm" label-width="60px">
          <el-form-item label="手机号" prop="phone">
            <el-input v-model="phoneForm.phone" size="large" />
          </el-form-item>
          <el-form-item label="验证码" prop="code">
            <div class="code-input">
              <el-input v-model="phoneForm.code" size="large" />
              <el-button type="primary" size="large">获取验证码</el-button>
            </div>
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>

    <div class="tool">
      <el-checkbox v-model="loginForm.receive" label="记住密码" />
      <el-link type="primary">忘记密码</el-link>
    </div>

    <el-button type="primary" size="large" class="login-btn" @click="handleLogin">立即登录</el-button>
  </div>
</template>

<script setup lang="ts">
import { doLogin } from '@/api/login'
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import useLoginStore from '@/store/login'

import { localCache } from '@/utils/Cache'

const loginMode = ref('account')

let loginInfo = localCache.getItem('login')
const loginForm = reactive({
  name: loginInfo.name,
  password: loginInfo.password,
  receive: true
})
const rules = reactive<FormRules>({
  name: [{ required: true, message: '请输入账号', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
})

const phoneForm = reactive({
  phone: '',
  code: ''
})

const loginStore = useLoginStore()
const loginFormRef = ref<FormInstance>()
const handleLogin = () => {
  if (loginMode.value === 'account') {
    loginFormRef.value?.validate(valid => {
      if (valid) {
        //记住密码
        if (loginForm.receive) {
          localCache.setItem('login', { name: loginForm.name, password: loginForm.password })
        } else {
          localCache.removeItem('login')
        }
        loginStore.accountLoginAction({
          name: loginForm.name,
          password: loginForm.password
        })
      } else {
        return false
      }
    })
  } else {
    console.log('phone login')
  }
}
</script>

<style scoped lang="less">
.bg {
  width: 100vw;
  height: 100vh;
  background: url(@/assets/images/login-bg.svg);
  position: absolute;
  z-index: -1;
}
.login-panel {
  margin: 0 auto;
  width: 330px;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.title {
  margin-bottom: 14px;
  font-size: 30px;
  font-weight: bold;
}
.icon-span {
  & > * {
    vertical-align: middle;
  }

  i {
    margin-right: 6px;
  }
}

.tool {
  display: flex;
  justify-content: space-between;
  margin: 4px 0;
}
.login-btn {
  margin-bottom: 150px;
}

.code-input {
  display: flex;
  align-items: center;

  .el-button {
    margin-left: 6px;
  }
}
</style>
