import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import actions from './actions';
let root = null;

function render({ container, baseUrl } = {}) {
  root = ReactDOM.createRoot(container ? container.querySelector('#react') : document.getElementById("react"));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

// 被主应用使用时
if (window.__POWERED_BY_QIANKUN__) {
  window.__webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

// 独立运行微应用
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

// 导出生命周期函数
export async function bootstrap() {}
export async function mount(props) {
  actions.setActions(props)
  render(props);
}
export async function unmount(props) {
  root.unmount();
}
export async function update() {
  // 更新微应用
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
