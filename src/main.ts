import { createApp } from 'vue'
import App from './App.vue'
import 'ant-design-vue/dist/antd.css'
import { router } from 'src/router'
import { createPinia } from 'pinia'
import './index.css'
const app = createApp(App)
app.use(router)
app.use(createPinia())
app.mount('#app')
