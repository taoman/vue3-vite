<!--
 * @Descripttion:
 * @Author: taoman
 * @Date: 2022-05-05 14:57:56
 * @LastEditors: taoman
 * @LastEditTime: 2022-05-18 13:53:09
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
// const content = ref('')
const state = reactive<{value?:string}>({
  value: undefined
})
const submit = () => {
  console.log('content', state.value)
}

</script>

<style lang='scss' scoped></style>
