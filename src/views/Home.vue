<!--
 * @Descripttion:
 * @Author: taoman
 * @Date: 2022-04-26 16:29:53
 * @LastEditors: taoman
 * @LastEditTime: 2022-05-06 17:16:19
-->
<template>
  <div class="flex">
    <a-button
      type="primary"
      class="fixed sm:hidden"
      shape="circle"
      size="large"
      @click="showDrawer"
    >
      <template #icon>
        <bars-outlined />
      </template>
    </a-button>
    <a-drawer
      v-model:visible="visible"
      style="color: red "
      width="60%"
      title="Basic Drawer"
      placement="left"
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-drawer>
    <AppNav />
    <AppContent class="flex-1 h-screen" />
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import {
  BarsOutlined
} from '@ant-design/icons-vue'
const visible = ref<boolean>(false)
const showDrawer = () => {
  visible.value = true
}
</script>

<style  scoped>

</style>
