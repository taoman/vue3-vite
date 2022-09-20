<!--
 * @Descripttion:
 * @Author: taoman
 * @Date: 2022-05-05 13:47:13
 * @LastEditors: taoman
 * @LastEditTime: 2022-09-19 13:56:05
-->
<template>
  <div
    class="py-8 box-border flex flex-col h-screen overflow-y-auto items-center scrollbar"
  >
    <div
      v-for="item in state.articleList"
      :key="item.id"
      class="w-3/4 h-29 p-3 box-border overflow-hidden flex-shrink-0 mb-8 bg-white bg-opacity-75 rounded-lg"
      @click="detail(item.id)"
    >
      <img
        :key="item.id"
        src="../assets/images/close.png"
        class="close"
        alt=""
        @click.stop="del(item.id)"
      >

      <div class="flex justify-between content-center text-base font-mono">
        <div class="flex">
          <img
            class="w-8 h-8"
            :src="item.avatar"
          >
          <span class="ml-2 font-medium">{{ item.name }}</span>
        </div>

        <div class="subpixel-antialiased">
          {{ item.create_time }}
        </div>
      </div>
      <!-- eslint-disable vue/no-v-html -->
      <div
        class="w-full h-10 mt-2 overflow-hidden font-mono tracking-widest text-gray-700"
        v-html="item.content"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref, defineComponent, createVNode } from 'vue'
import { useRouter } from 'vue-router'
import { ExclamationCircleOutlined } from '@ant-design/icons-vue'
import { articleIndex, deleteDetail } from 'src/request/api/article'
import { ArticleIndexData } from 'src/interface/article'
import { mainStore } from 'src/store'
import { Modal } from 'ant-design-vue'
export interface StateType {
  articleList: ArticleIndexData[]
}
const router = useRouter()
const detail = (id: number) => {
  router.push({
    path: '/articleDetail',
    query: { id }
  })
}
const del = (id: number) => {
  Modal.confirm({
    title: '确认要删除吗?',
    icon: createVNode(ExclamationCircleOutlined),
    content: '',
    okText: '确认',
    cancelText: '取消',
    async onOk () {
      const res = await deleteDetail(id)
      init()
      console.log('点了ok', res)
    },
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onCancel () {}
  })
}

// const del = async (id: number) => {
//   const res = await deleteDetail(id)
//   init()
// }
const state = reactive<StateType>({
  articleList: []
})
const key = ref('')
const main = mainStore()
const subscribe = main.$subscribe((mutation, state) => {
  key.value = state.key
  init()
})
const tou = sessionStorage.avatar
console.log('tou', tou)

// const subscribeNormal = () => {
//   main.subscribeAction('taoman', true)
// }
// const subscribeError = () => {
//   main.subscribeAction('jie', false)
// }
// const unsubscribe = main.$onAction(
//   ({
//     name, store, args, after, onError
//   }) => {
//     console.log('name', name)
//     console.log('store实例', store)
//     console.log('参数', args)
//     after((result) => {
//       console.log('result', result)
//     })
//     onError(error => {
//       console.log('error', error)
//     })
//   })
// subscribeNormal()
// subscribeError()
// watch(() => main.key, (newValue) => {
//   key.value = newValue
//   init()
// })
// const obj = {
//   num: 1,
//   functionParams: () => {
//     console.log('taoman')
//   },
//   objParams: {
//     a: 1,
//     b: 2
//   }
// }
// const arr = [1, { a: 1 }]
// const objCopy = (obj:any) => {
//   let newObj = null
//   if (typeof (obj) === 'object' && obj !== null) {
//     newObj = obj instanceof Array ? [] : {}
//     for (const i in obj) {
//       newObj[i] = objCopy(obj[i])
//     }
//   } else {
//     newObj = obj
//   }
//   return newObj
// }
const init = async () => {
  const res = await articleIndex(key.value)
  state.articleList = res.data
}
onMounted(async () => {
  init()
})
</script>

<style>
.close {
  width: 30px;
  height: 30px;
  margin: -12px -12px 0 auto;
  cursor: pointer;
}
.scrollbar::-webkit-scrollbar {
  width: 10px;
  height: 20px;
}

.scrollbar::-webkit-scrollbar-track {
  border-radius: 100vh;
  background: #f7f4ed;
}

.scrollbar::-webkit-scrollbar-thumb {
  background: #fbbf24;
  border-radius: 100vh;
  border: 3px solid #f6f7ed;
}

.scrollbar::-webkit-scrollbar-thumb:hover {
  background: #c0a0b9;
}
.btn {
  width: 100px;
  height: 100px;
  border: 1px solid red;
  color: #fff;
}
</style>
