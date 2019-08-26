import Vue from 'vue'
import Vuex from 'vuex'
import request from '@/common/js/request'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: sessionStorage.getItem('userInfo') ? JSON.parse(sessionStorage.getItem('userInfo')) : null
  },
  mutations: {
    UPDATE_USERINFO (state, payload) {
      if (payload) {
        sessionStorage.setItem('userInfo', JSON.stringify(payload))
      } else {
        sessionStorage.removeItem('userInfo')
      }
      state.userInfo = payload
    }
  },
  actions: {
    setUserInfo ({ commit }, payload) {
      commit('UPDATE_USERINFO', payload)
    }
  },
  getters: {
    userInfo (state, getters) {
      return state.userInfo
    }
  }
})
