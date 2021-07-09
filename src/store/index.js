import { createStore, createLogger } from 'vuex'
import auth from './modules/auth'

const plugins = []

if (process.env.NODE_ENV === 'development') {
  plugins.push(createLogger())
}

export default createStore({
  plugins,
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
    auth
  }
})
