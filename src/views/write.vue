<!--
 * @Descripttion:
 * @Author: taoman
 * @Date: 2022-05-05 14:57:56
 * @LastEditors: taoman
 * @LastEditTime: 2022-06-02 15:40:16
-->
<template>
  <div class="flex w-full flex-col justify-center ">
    <AppTinymce v-model:value="state.value" />
    <div
      class="text-center mt-4"
      @click="submit"
    >
      <a-button
        type="primary"
        class="bg-[#40a9ff] text-white"
      >
        收录
      </a-button>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { reactive } from 'vue'
import { articleStore } from 'src/request/api/article'
// const content = ref('')
const state = reactive<{value?:string}>({
  value: undefined
})
const submit = async () => {
  // const random = Math.floor(Math.random() * 10 + 1)
  const data = {
    avatar: 'https://liquanquan.top/assets/images/touxiang.jpg',
    name: 'taoman',
    content: state.value
  }
  console.log(data)
  try {
    const res = await articleStore(data)
    console.log('res', res)
  } catch (error) {
    console.log(error)
  }
}

</script>

<style lang='scss' scoped></style>
