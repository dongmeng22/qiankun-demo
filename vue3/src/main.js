import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {
  renderWithQiankun,
  qiankunWindow
} from 'vite-plugin-qiankun/dist/helper'
import actions from './actions'

let instance;

function render(props = {}) {
  // 加载vue实例
  const { container, baseUrl } = props
  actions.setActions(props) // props中有onGlobalStateChange、setGlobalState等函数
  instance = createApp(App)
  instance.mount(container ? container.querySelector('#vue3') : '#vue3')
}

const initQianKun = () => {
  renderWithQiankun({
    bootstrap() {},
    mount(props) {
      render(props)
    },
    unmount() {
      instance.unmount()
      instance = null
    },
    update() {
    }
  })
}
qiankunWindow.__POWERED_BY_QIANKUN__ ? initQianKun() : render()
