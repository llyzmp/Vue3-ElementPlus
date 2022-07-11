import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as Icons from '@element-plus/icons-vue'
import { toLine } from './utils'
import mUI from './components'

const app = createApp(App)

// 全局注册方便消耗点性能，设置为el-icon的用法
// el-icon-xxx
for(let i in Icons) {
  // 注册全局组件
  app.component(`el-icon-${toLine(i)}`, (Icons as any)[i])
}

console.log('mUI', mUI)
// 全局组件引用报错
// app.use(router).use(ElementPlus).use(mUI)

app.use(router).use(ElementPlus)
app.mount('#app')
