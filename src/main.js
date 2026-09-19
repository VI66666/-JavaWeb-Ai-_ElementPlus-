import { createApp } from 'vue'
import App from './App.vue'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App).use(ElementPlus,{locale: zhCn}).mount('#app')
