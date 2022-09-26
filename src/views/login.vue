<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<!-- eslint-disable vue/v-on-event-hyphenation -->
<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<!--
 * @Descripttion:
 * @Author: taoman
 * @Date: 2022-04-26 15:51:41
 * @LastEditors: taoman
 * @LastEditTime: 2022-09-20 14:44:25
-->
<template>
  <div
    id="box"
    class="py-8 box-border flex flex-col h-screen overflow-y-auto items-center scrollbar"
  >
    <div class="login">
      <div class="portrait">
        <a-upload
          v-model:file-list="fileList"
          :max-count="1"
          name="avatar"
          list-type="picture-card"
          class="avatar-uploader"
          :show-upload-list="false"
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          :before-upload="beforeUpload"
          @change="handleChange"
        >
          <img
            v-if="imageUrl"
            :src="imageUrl"
            alt="avatar"
          >
          <div v-else>
            <loading-outlined v-if="loading" />
            <plus-outlined v-else />
            <div class="ant-upload-text">
              头像
            </div>
          </div>
        </a-upload>
      </div>
      <div>
        <a-form
          :model="formState"
          name="basic"
          :label-col="{ span: 8 }"
          :wrapper-col="{ span: 16 }"
          autocomplete="off"
          @finish="onFinish"
          @finishFailed="onFinishFailed"
        >
          <a-form-item
            label="账号"
            name="username"
            :rules="[{ required: true, message: '账号不能为空!' }]"
          >
            <a-input
              v-model:value="formState.username"
              @blur="test"
            />
          </a-form-item>

          <a-form-item
            label="密码"
            name="password"
            :rules="[{ required: true, message: '密码不能为空!' }]"
          >
            <a-input-password v-model:value="formState.password" />
          </a-form-item>
          <div class="button">
            <button
              class="reg"
              @click="register"
            >
              注册
            </button>
            <button
              class="sub"
              @click="submit"
            >
              登录
            </button>
          </div>
        </a-form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PlusOutlined, LoadingOutlined } from '@ant-design/icons-vue'
import { message } from 'ant-design-vue'
import { ref, reactive, onMounted } from 'vue'
import type { UploadChangeParam } from 'ant-design-vue'
import {
  registerDetail,
  loginDetail,
  avatarDetail,
  getAvatar
} from 'src/request/api/login'
import { router } from 'src/router'
interface FormState {
  username: string
  password: string
}
const formState = reactive<FormState>({
  username: '',
  password: ''
})
const onFinish = (values: string) => {
  console.log('Success:', values)
}

const onFinishFailed = (errorInfo: unknown) => {
  console.log('Failed:', errorInfo)
}
function getBase64 (img: any, callback: (base64Url: string) => void) {
  const reader = new FileReader()
  // eslint-disable-next-line n/no-callback-literal
  reader.addEventListener('load', () => callback(reader.result as string))
  reader.readAsDataURL(img)
}
const fileList = ref()
const loading = ref<boolean>(false)
const imageUrl = ref<string>('')

const handleChange = (info: UploadChangeParam) => {
  if (info.file.status === 'uploading') {
    loading.value = true
    return
  }
  if (info.file.status === 'done') {
    // Get this url from response in real world.
    getBase64(info.file.originFileObj, (base64Url: string) => {
      imageUrl.value = base64Url
      loading.value = false
    })
  }
  if (info.file.status === 'error') {
    loading.value = false
    message.error('upload error')
  }
}

const beforeUpload = (file: { type: string; size: number }) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
  if (!isJpgOrPng) {
    message.error('You can only upload jpeg file!')
  }
  const isLt2M = file.size / 1024 / 1024 < 2
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!')
  }
  return isJpgOrPng && isLt2M
}
// 注册
const register = async () => {
  const res = await registerDetail(
    formState.username,
    formState.password,
    fileList.value
  )
  message.success('注册成功')
  console.log(res)
  const res2 = await avatarDetail(fileList.value[0].originFileObj)
  console.log('apk', res2)
  sessionStorage.avatar = res2.data.path.replace('/home', 'liquanquan.top')
}
// 登录
const submit = async () => {
  const res = await loginDetail(formState.username, formState.password)
  console.log(res)
  sessionStorage.token = res.data.token
  sessionStorage.username = res.data.username
  sessionStorage.avatar = res.data.avatar
  if (res.statusCode === 200) {
    router.push('/')
  }
}
const test = async () => {
  const res = await getAvatar(formState.username)
  console.log('22222', res)
  imageUrl.value = res.data
  if (res.statusCode === 500) {
    console.log('500')
  }
}
const num = ref(0)
onMounted(() => {
  num.value = Math.ceil(Math.random() * 3)
  const dom: any = document.getElementById('box')
  dom.style.background =
    "url('/src/assets/images/butterfly" +
    num.value +
    ".jpeg') center/cover no-repeat"
})
</script>

<style scoped>
.py-8 {
  padding-top: 13rem;
  padding-bottom: 2rem;
  /* transition: all 3.5s linear; */
  animation: fadein 2s linear 1;
}
@keyframes fadein{
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}
.button {
  display: flex;
  justify-content: space-between;
  width: 200px;
  margin-left: 100px;
  padding-top: 15px;
}
.sub {
  width: 80px;
  height: 40px;
  color: rgb(243, 220, 220);
  background: rgb(34, 176, 97);
  border-radius: 50px;
}
.reg {
  width: 80px;
  height: 40px;
  color: rgb(243, 220, 220);
  background: rgb(254, 162, 93);
  border-radius: 50px;
}
:deep .ant-message .anticon {
  position: relative;
  top: -3px;
  margin-right: 8px;
  font-size: 16px;
}

:deep .ant-upload.ant-upload-select-picture-card {
  width: 100px;
  height: 100px;
  margin-right: 8px;
  margin-bottom: 8px;
  text-align: center;
  vertical-align: top;
  background-color: #fafafa;
  border: 1px dashed #d9d9d9;
  border-radius: 50px;
  cursor: pointer;
  transition: border-color 0.3s;
  opacity: 0.8;
}
:deep .ant-upload.ant-upload-select-picture-card img {
  border-radius: 50px;
}
.box {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: aquamarine;
  height: 100vh;
  z-index: 0;
  position: relative;
  display: flex;
  align-items: center;
}
.login {
  display: flex;
  justify-content: center;
}
@media screen and (max-width: 574px) {
  .py-8 {
    background: url('https://liquanquan.top/assets/images/login_bg1.jpg')
      center/cover no-repeat;
  }
  .login {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .button {
    margin-left: 20px;
    padding-top: 30px;
    color: #666;
  }
}
</style>
