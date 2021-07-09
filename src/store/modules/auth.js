// import messages from '../../utils/messageMap'
import Materialize from 'materialize-css'

const TOKEN_KEY = 'jwt-token'
const key = process.env.VUE_APP_FB_KEY
const REGISTER_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${key}`
const LOGIN_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key}`

export default {
  namespaced: true,
  state: {
    token: localStorage.getItem(TOKEN_KEY)
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      localStorage.setItem(TOKEN_KEY, token)
    },
    logout (state) {
      state.token = null
      localStorage.removeItem(TOKEN_KEY)
    }
  },
  actions: {
    async login ({ commit }, payload) {
      try {
        const response = await fetch(LOGIN_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify({ ...payload, returnSecureToken: true })
        })
        const data = await response.json()
        commit('setToken', data.idToken)
        if (data.error) {
          // const message = data.error.message
          Materialize.toast({ html: data.error.message })
          console.log(data.error)
        }
      } catch (e) {
        console.log(e)
      }
    },
    async register ({ commit }, payload) {
      try {
        const response = await fetch(REGISTER_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify(payload)
        })
        const data = await response.json()
        commit('setToken', data.idToken)
        if (data.error) {
          // const message = data.error.message
          Materialize.toast({ html: data.error.message })
          console.log(data.error)
        }
      } catch (e) {
        console.log(e)
      }
    }
  },
  getters: {
    token (state) {
      return state.token
    },
    isAuth (_, getters) {
      return !!getters.token
    }
  }
}
