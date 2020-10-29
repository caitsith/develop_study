import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    globalCount1: 0,
    globalCount2: 0
  },
  mutations: {
    globalIncrement(state){
      state.globalCount1++,
      state.globalCount2--
    }
  },
  actions: {
  },
  modules: {
  }
})
