<!--
 * @Descripttion:
 * @Author: taoman
 * @Date: 2022-04-27 13:33:15
 * @LastEditors: taoman
 * @LastEditTime: 2022-05-07 11:40:45
-->
<template>
  <div class="w-4/12 h-screen bg-gray-200 hidden  md:block ">
    <div class="flex flex-col items-center">
      <div class="w-64 h-12 px-6 mt-40 bg-[#0b4e5b] flex justify-center items-center rounded-full">
        <input
          type="text"
          placeholder="Search"
          class="border-transparent placeholder-white caret-white text-white focus:outline-none bg-transparent w-52 h-6"
        >
        <img
          src="src/assets/images/search.png"
          alt=""
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
</template>

<script setup lang='ts'>
import { RouteRecordRaw, useRouter } from 'vue-router'
import { routesModuleList } from 'src/router'
import { computed, ref } from 'vue'
const renderList = computed(() => {
  return routesModuleList.filter(item => !item.meta.hidden)
})
console.log('route', routesModuleList)
const router = useRouter()
const path = ref('/articleList')
const nav = (e:RouteRecordRaw) => {
  path.value = e.path
  router.push(e.path)
}
</script>

<style lang='scss' scoped></style>
