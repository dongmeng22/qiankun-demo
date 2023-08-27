const empty = () => {
  console.log('empty now')
}

// 把父actions覆盖进来
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
const actions = new Actions();

export default actions;