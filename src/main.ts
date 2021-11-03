/*
 * @Descripttion:
 * @version: 1.0
 * @Author: Zheng
 * @Date: 2021-09-03 11:11:05
 * @LastEditors: Zheng
 * @LastEditTime: 2021-09-05 14:00:12
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App)
  .use(store)
  .use(router)
  .mount('#app')
