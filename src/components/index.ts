
import { onBeforeUnmount, onMounted, reactive, ref, watch } from 'vue'
// export default {
//   install: function (app, options) {
//     app.config.globalProperties.$translate = key => {
//       return key.split('.').reduce((o, i) => {
//         if (o) return o[i]
//       }, options)
//     }
//     app.provide('i18n', options)
//   }
// }
// export const myHook = () => {
//   const num = ref(1)
//   const numAdd = () => {
//     num.value++
//     console.log(num.value)
//   }
//   onMounted(() => {
//     console.log('num', num.value)
//   })
//   return { num, numAdd }
// }
export const myHook = function () {
  const num = ref(1)
  const numAdd = () => {
    num.value++
    console.log(num.value)
  }
  onMounted(() => {
    console.log('num', num.value)
  })
  watch(() => num.value, (newValue, oldValue) => {
    console.log('oldValue', newValue, oldValue)
  })
  return { num, numAdd }
}
// export const myHook = {
//   data () {
//     return {
//       num: 0
//     }
//   },
//   mounted () {
//     console.log(this.num)
//   },
//   methods: {
//     numAdd () {
//       this.num++
//     }
//   }
// }
