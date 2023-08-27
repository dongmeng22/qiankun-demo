const empty = () => {
  console.log('empty now')
}

// 使用父actions暴露的函数覆盖此
class Actions {
  actions = {
    onGlobalStateChange: empty,
    setGlobalState: empty,
    getGlobalState: empty
  }
  setActions(actions) {
    this.actions = actions
  }
  onGlobalStateChange(...args) {
    return this.actions.onGlobalStateChange(...args);
  }
  setGlobalState(...args) {
    return this.actions.setGlobalState(...args);
  }
  getGlobalState(key) {
    return this.actions.getGlobalState(key);
  }
}
export default new Actions();
