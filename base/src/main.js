import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { registerMicroApps, start } from 'qiankun'
import actions from './actions'

const apps = [
  {
    name: 'vue3', // 子应用的名称
    entry: 'http://localhost:9002/', // 子应用的域名
    container: '#vue3', // 承载子应用的容器，在上面App.vue中定义
    activeRule: '/vue3', // 被激活的子应用的路由
    props: {
      baseUrl: '/vue3',
      getGlobalState: actions.getGlobalState
    }
  },
  {
    name: 'react', // 子应用的名称
    entry: 'http://localhost:9003/',
    container: '#react',
    activeRule: '/react',
    props: {
      baseUrl: '/react',
      getGlobalState: actions.getGlobalState
    }
  }
]

registerMicroApps(apps) // 注册子应用
start() // 启动qiankun

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
