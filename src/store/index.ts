import { defineStore } from 'pinia'
export const mainStore = defineStore('main', {
  state: ():{key:string} => ({
    key: ''
  }),
  actions: {
    subscribeAction (key:string, manual:boolean) {
      return new Promise((resolve, reject) => {
        if (manual) {
          resolve(`key值是${key}`)
        } else {
          reject(new Error('错误'))
        }
      })
    }
  }
})
