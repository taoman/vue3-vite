<!--
 * @Descripttion:
 * @Author: taoman
 * @Date: 2022-05-05 14:51:55
 * @LastEditors: taoman
 * @LastEditTime: 2022-09-20 14:41:11
-->
<template>
  <div class="h-full p-12">
    <a-timeline>
      <div
        v-for="item in state.articleList"
        :key="item.create_time"
        class="text-white"
      >
        <a-timeline-item
          :color="bg"
          @click="detail(item.id)"
        >
          <div>
            {{ item.create_time }}
          </div>
          <!-- eslint-disable vue/no-v-html -->
          <div
            class=" max-h-32 overflow-ellipsis overflow-hidden "
            v-html="item.content"
          />
        </a-timeline-item>
      </div>
    </a-timeline>
  </div>
</template>

<script setup lang='ts'>
import { articleIndex } from 'src/request/api/article'
import { useRouter } from 'vue-router'
import { onMounted, reactive } from 'vue'
import { StateType } from './articleList.vue'
const R = Math.floor(Math.random() * 255)
const G = Math.floor(Math.random() * 255)
const B = Math.floor(Math.random() * 255)
const bg = 'rgb(' + R + ',' + G + ',' + B + ')'

const state = reactive<StateType>({
  articleList: []
})
onMounted(async () => {
  const res = await articleIndex('')
  state.articleList = res.data
})
const router = useRouter()
const detail = (id:number) => {
  router.push({
    path: '/articleDetail',
    query: { id }
  })
}
</script>

<style scoped>

</style>
