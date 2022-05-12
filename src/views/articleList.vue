<!--
 * @Descripttion:
 * @Author: taoman
 * @Date: 2022-05-05 13:47:13
 * @LastEditors: taoman
 * @LastEditTime: 2022-05-07 10:54:43
-->
<template>
  <div class="py-8 box-border flex flex-col h-screen  overflow-y-auto items-center bg-black scrollbar">
    <div
      v-for="item in artList"
      :key="item.id"
      class="w-4/6 h-28 p-3 box-border overflow-hidden flex-shrink-0 mb-8 bg-white bg-opacity-75 rounded-lg "
      @click="detail(item.id)"
    >
      <div class="flex justify-between content-center text-base font-mono">
        <div class="flex">
          <img
            class="w-8 h-8 "
            src="src/assets/logo.png"
          >
          <span class="ml-2 font-medium">Taoman</span>
        </div>
        <div class="subpixel-antialiased">
          2022-05-06
        </div>
      </div>
      <div
        class="w-full h-10 overflow-hidden font-mono tracking-widest text-gray-700"
      >
        日本防卫省6日称，前往西太平洋训练的解放军海军航母辽宁舰编队连续三天进行了舰载战斗机的起降训练。这个消息让台湾方面联想到解放军军机近来在台湾附近的频繁活动，最终得出一个让他们惊恐的结论——解放军航母正以台湾为背景演练攻防大战。

        日本《产经新闻》6日称，自卫队确认，辽宁舰编队5日在冲绳县宫古岛东南约320公里的太平洋海域进行了舰载战斗机起降训练。这已经是辽宁舰接连第三天在该海域起降战斗机，“防卫省分析称，中国正通过训练提高其航母的作战能力。”
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { useRouter } from 'vue-router'
interface ArtListType {
  id:number
  autor:string
  date:string
  content:string

}
const artList:ArtListType[] = [
  {
    id: 1,
    autor: '人工智能',
    date: '2022-05-06',
    content: 'content'
  },
  {
    id: 1,
    autor: '人工智能',
    date: '2022-05-06',
    content: 'content'
  },
  {
    id: 1,
    autor: '人工智能',
    date: '2022-05-06',
    content: 'content'
  },
  {
    id: 1,
    autor: '人工智能',
    date: '2022-05-06',
    content: 'content'
  },
  {
    id: 1,
    autor: '人工智能',
    date: '2022-05-06',
    content: 'content'
  },
  {
    id: 1,
    autor: '人工智能',
    date: '2022-05-06',
    content: 'content'
  }
]
const router = useRouter()
const detail = (id:number) => {
  router.push({
    path: '/articleDetail',
    query: { id }
  })
}
</script>

<style>
.scrollbar::-webkit-scrollbar {
    width: 10px;
    height: 20px;
  }

.scrollbar::-webkit-scrollbar-track {
    border-radius: 100vh;
    background: #f7f4ed;
}

.scrollbar::-webkit-scrollbar-thumb {
    background: #FBBF24;
    border-radius: 100vh;
    border: 3px solid #f6f7ed;
}

.scrollbar::-webkit-scrollbar-thumb:hover {
    background: #c0a0b9;
}
</style>
