<!--
 * @Descripttion:
 * @Author: taoman
 * @Date: 2022-04-26 16:29:53
 * @LastEditors: taoman
 * @LastEditTime: 2022-06-21 13:58:09
-->
<template>
  <div
    class="flex"
    :style="{background:`url(https://liquanquan.top/assets/images/${width>640?'cat':'bg'}.jpg)`,backgroundSize:'cover',backgroundRepeat: 'no-repeat'}"
  >
    <AppNav />
    <AppContent class="flex-1 h-screen" />
  </div>
</template>

<script setup lang='ts'>
import { onMounted, ref } from 'vue'

// import { ref } from 'vue'
// import {
//   BarsOutlined
// } from '@ant-design/icons-vue'
// const visible = ref<boolean>(false)
// const showDrawer = () => {
//   visible.value = true
// }
const initWidth = window.innerWidth
const width = ref(initWidth)
onMounted(() => {
  window.onresize = () => {
    width.value = window.innerWidth
  }
})
</script>

<style  scoped>

</style>
