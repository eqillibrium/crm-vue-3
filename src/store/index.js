import { createStore } from 'vuex'

export default createStore({
  state: {
    sidebar: false
  },
  mutations: {
    toggleSidebar (state) {
      state.sidebar = !state.sidebar
    }
  },
  actions: {
  },
  getters: {
    sidebarState (state) {
      return state.sidebar
    }
  },
  modules: {
  }
})
