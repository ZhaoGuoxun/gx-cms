import { createApp } from 'vue'
import 'normalize.css'
import './assets/css/index.less'
import 'element-plus/theme-chalk/el-message.css'
import 'nprogress/nprogress.css'

import App from './App.vue'
import router from './router'
import pinia from './store'
import registerIcons from './global/register-icon'
import { setupStore } from './store/login'

const app = createApp(App)
app.use(pinia)
app.use(registerIcons)

setupStore().then(() => {
  app.use(router).mount('#app')
})
