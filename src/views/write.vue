<!--
 * @Descripttion:
 * @Author: taoman
 * @Date: 2022-05-05 14:57:56
 * @LastEditors: taoman
 * @LastEditTime: 2022-06-09 11:08:42
-->
<template>
  <div class="flex w-full flex-col justify-center">
    <AppTinymce v-model:value="state.value" />
    <div class="text-center mt-4" @click="submit">
      <a-button type="primary" class="bg-[#40a9ff] text-white"> 收录 </a-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { articleStore } from 'src/request/api/article'
import { useRouter } from 'vue-router'
// const content = ref('')
const state = reactive<{ value?: string }>({
  value: undefined
})
const router = useRouter()
const submit = async () => {
  // const random = Math.floor(Math.random() * 10 + 1)
  const data = {
    avatar: 'https://liquanquan.top/assets/images/touxiang.jpg',
    name: sessionStorage.username,
    content: state.value
  }
  try {
    const res = await articleStore(data)
    if (res.statusCode === 200) {
      router.push('/articleList')
    }
  } catch (error) {
    console.log(error)
  }
}
</script>

<style lang="scss" scoped></style>
