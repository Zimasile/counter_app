import { createStore } from 'vuex'

export default createStore({
  state: {
    counter: null
  },
  getters: {
  },
  mutations: {
    setCounter(state, value) {
      state.counter = value
    }
  },
  actions: {
    increaseCounter(context) {
      context.commit('setCounter', ++this.state.counter)
    },
  decreaseCounter(context) {
    if(this.state.counter > 0)
    context.commit('setCounter', --this.state.counter)
    }
  },
  modules: {
  }
})
