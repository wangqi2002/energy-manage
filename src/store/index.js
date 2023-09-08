import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin:false
  },
  mutations,
  actions,
  modules: {
    AppMoudule: {
      state: {
      },
      actions: {
      },
      mutations: {
      }
    }
  },
  plugins: [
  ]
})
