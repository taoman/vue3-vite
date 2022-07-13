import { createApp } from 'vue'
import App from './App.vue'
import 'ant-design-vue/dist/antd.css'
import { router } from 'src/router'
import { createPinia } from 'pinia'
import './index.css'
import * as Sentry from '@sentry/vue'
import { BrowserTracing } from '@sentry/tracing'
const app = createApp(App)
// process.env.NODE_ENV === 'production' &&
Sentry.init({
  app,
  dsn: 'https://6c912efa7e4f428e89999e24cce4358b@o1313588.ingest.sentry.io/6563933',
  integrations: [
    new BrowserTracing({
      routingInstrumentation: Sentry.vueRouterInstrumentation(router),
      tracingOrigins: ['localhost', 'my-site-url.com', /^\//]
    })
  ],
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0
})
app.use(router)
app.use(createPinia())
app.mount('#app')
