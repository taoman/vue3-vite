<!--
 * @Descripttion:
 * @Author: taoman
 * @Date: 2022-04-27 13:33:15
 * @LastEditors: taoman
 * @LastEditTime: 2022-06-14 14:41:29
-->
<template>
  <div class="w-4/12 h-screen  hidden  md:block ">
    <div class="flex flex-col items-center">
      <div class="w-64 h-12 px-6 mt-40 bg-[#0b4e5b] flex justify-center items-center rounded-full">
        <input
          v-model="value"
          type="text"
          placeholder="Search"
          class="border-transparent placeholder-white caret-white text-white focus:outline-none bg-transparent w-52 h-6"
        >
        <img
          src="src/assets/images/search.png"
          alt=""
          @click="search"
        >
      </div>

      <ul
        class="w-48 mt-40 flex flex-col justify-start"
      >
        <li
          v-for="(item,key) in renderList"
          :key="key"
          class="p-2 w-full pl-16 text-white text-base"
          :style="{color:path===item.path?'#FCD34D':'#fff',transform:path===item.path? 'translateX(-0.3rem)':'translateX(0)'}"
          @click="nav(item)"
        >
          {{ item.meta.title }}
        </li>
      </ul>
    </div>
  </div>
  <div class="fixed top-6 left-2 z-50 sm:hidden">
    <a-button
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
      style="color:#3B82F6; "
      width="60%"
      placement="left"
    >
      <div class="flex flex-col justify-center items-center">
        <div class="w-20 h-20 rounded-full my-8 border-solid border border-purple-500">
          <img
            class="w-20 h-20 rounded-full"
            src="https://liquanquan.top/assets/images/202141-155232.jpeg"
          >
        </div>
        <div
          v-for="(item,key) in renderList"
          :key="key"
          class="w-full h-10 leading-10 text-center animate__animated  animate__fadeInRight "
          :class="[`animate-delay-${key + 1}`]"
          @click="nav(item)"
        >
          {{ item.meta.title }}
        </div>
      </div>
    </a-drawer>
  </div>
</template>

<script setup lang='ts'>
import 'animate.css'
import { RouteRecordRaw, useRoute, useRouter } from 'vue-router'
import { routesModuleList } from 'src/router'
import { computed, ref } from 'vue'
import { mainStore } from 'src/store/index'
import {
  BarsOutlined
} from '@ant-design/icons-vue'
import { clear } from 'console'
const renderList = computed(() => {
  return routesModuleList.filter(item => !item.meta.hidden)
})
const router = useRouter()
const route = useRoute()
const path = ref('/articleList')
const nav = (e:RouteRecordRaw) => {
  visible.value = false

  path.value = e.path
  router.push(e.path)
}
const value = ref('')
const main = mainStore()
const search = () => {
  if (route.fullPath !== '/articleList') {
    router.push('/articleList')
    value.value = ''
  }
  main.$state.key = value.value
}
const visible = ref<boolean>(false)
const showDrawer = () => {
  visible.value = true
}
</script>

<style lang="scss" scoped>
</style>
