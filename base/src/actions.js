import { initGlobalState } from 'qiankun'

const initialState = {
  username: null,
  email: null
}

const actions = initGlobalState(initialState)

actions.onGlobalStateChange((state, prev) => {
  for (const key in state) {
    initialState[key] = state[key]
  }
  console.log('base: ', state)
})

actions.getGlobalState = (key) => key ? initialState[key] : initialState

export default actions
