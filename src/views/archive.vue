<!--
 * @Descripttion:
 * @Author: taoman
 * @Date: 2022-05-05 14:51:55
 * @LastEditors: taoman
 * @LastEditTime: 2022-05-12 09:44:25
-->
<template>
  <div class="h-full bg-gray-100 p-16">
    <Timeline
      theme="lightblue"
    >
      <timeline-title>时间轴</timeline-title>
      <timeline-item
        v-for="(item,key) in [1,2,3,4,5,6]"
        :key="key"
        :bg-color="bg"
        font-color="#e166ab"
        @click="detail"
      >
        <!-- <template #others>
        <img
          :src="`src/assets/images/heart-${key}.png`"
        >
      </template> -->
        虎年大吉
      </timeline-item>
    </Timeline>
  </div>
</template>

<script setup lang='ts'>
import { Timeline, TimelineTitle, TimelineItem } from 'vue3-cute-component'
const R = Math.floor(Math.random() * 255)
const G = Math.floor(Math.random() * 255)
const B = Math.floor(Math.random() * 255)
const bg = 'rgb(' + R + ',' + G + ',' + B + ')'
const detail = () => {
  console.log(111)
}
</script>

<style scoped>

</style>
