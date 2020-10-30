import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    globalCount1: 0,
    globalCount2: 0,
    profile: null,
  },
  mutations: {
    globalIncrement(state){
      state.globalCount1++,
      state.globalCount2--
    },
    setGithubProfile(state, payload){
      state.profile = payload;
    },
  },
  actions: {
    async fetchGithubProfile(store, payload){
      if(store.state.profile !== null) return;

      const response = await fetch(
        `https://api.github.com/users/${payload.user_id}`
      ).then((res) => {
        return res.json();
      });
      store.commit("setGithubProfile",response);
    },
  },
  modules: {},
})
