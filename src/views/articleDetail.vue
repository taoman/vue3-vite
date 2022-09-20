<!--
 * @Descripttion:
 * @Author: taoman
 * @Date: 2022-05-05 16:25:03
 * @LastEditors: taoman
 * @LastEditTime: 2022-09-19 13:55:55
-->
<template>
  <div class="w-full h-screen flex justify-center items-center">
    <div class="bg-white w-5/6 h-5/6 rounded-lg p-4">
      <!-- eslint-disable vue/no-v-html -->
      <div
        class="text-black leading-8"
        v-html="content"
      />
      <!--eslint-enable-->
    </div>
  </div>
</template>

<script setup lang='ts'>
import { articleDetail } from 'src/request/api/article'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const content = ref('')
onMounted(async () => {
  const id = Number(route.query.id)
  const res = await articleDetail(id)
  content.value = res.data.content
})
</script>

<style scoped>
</style>
