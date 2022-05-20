<!--
 * @Descripttion:
 * @Author: taoman
 * @Date: 2022-05-05 14:51:55
 * @LastEditors: taoman
 * @LastEditTime: 2022-05-18 14:03:11
-->
<template>
  <div class="h-full p-12">
    <a-timeline>
      <div
        v-for="item in list"
        :key="item.date"
        class="text-white"
      >
        <a-timeline-item
          :color="bg"
          @click="detail"
        >
          <div>
            {{ item.date }}
          </div>
          <div class="line-clamp-5 md:line-clamp-3">
            {{ item.content }}
          </div>
        </a-timeline-item>
      </div>
    </a-timeline>
  </div>
</template>

<script setup lang='ts'>
const R = Math.floor(Math.random() * 255)
const G = Math.floor(Math.random() * 255)
const B = Math.floor(Math.random() * 255)
const bg = 'rgb(' + R + ',' + G + ',' + B + ')'
const list = [
  {
    date: '2022-05-12',
    content: '日本防卫省6日称，前往西太平洋训练的解放军海军航母辽宁舰编队连续三天进行了舰载战斗机的起降训练。这个消息让台湾方面联想到解放军军机近来在台湾附近的频繁活动，最终得出一个让他们惊恐的结论——解放军航母正以台湾为背景演练攻防大战。'
  },
  {
    date: '2022-05-13',
    content: '日本防卫省6日称，前往西太平洋训练的解放军海军航母辽宁舰编队连续三天进行了舰载战斗机的起降训练。这个消息让台湾方面联想到解放军军机近来在台湾附近的频繁活动，最终得出一个让他们惊恐的结论——解放军航母正以台湾为背景演练攻防大战。'
  }
]
const detail = () => {
  console.log(111)
}
</script>

<style scoped>

</style>
