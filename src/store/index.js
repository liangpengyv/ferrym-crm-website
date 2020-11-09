import Vue from 'vue'
import Vuex from 'vuex'

// 统一授权
import customer from './module/user'
import { vuexOidcCreateStoreModule } from 'vuex-oidc'
import oidcSetting from 'config/oidc'
import utility from 'config/utility'
import store from 'store'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    customer,
    oidcStore: vuexOidcCreateStoreModule(
      oidcSetting,
      {
        namespaced: false,
        routeBase: '/',
        publicRoutePaths: [
          '/sign-in-callback',
          '/sign-out-callback',
          '/oidc-silent-renew',
          '/',
          '/uni-studio',
        ],
      },
      {
        userLoaded: (user) => {
          console.log('OIDC user is loaded: ', user)
          utility.setToken(user.access_token)
          if (!store.state.customer.hasGetInfo) {
            store.dispatch('getUserInfo')
              .then(() => {
                store.state.customer.hasGetInfo = true
              })
              .catch(() => {
                // utility.setToken('')
              })
          }
        },
        userUnloaded: () => {
          console.log('OIDC user is unloaded')
        },
        accessTokenExpiring: () => {
          console.log('Access token will expire')
        },
        accessTokenExpired: () => {
          utility.setToken('')
          store.state.customer.hasGetInfo = false
          console.log('Access token did expire')
        },
        silentRenewError: () => {
          console.log('OIDC user is unloaded')
        },
        userSignedOut: () => {
          utility.setToken('')
          store.state.customer.hasGetInfo = false
          console.log('OIDC user is signed out')
        },
        oidcError: (payload) => {
          console.log(`An error occured at ${payload.context}: `, payload.error)
        },
        automaticSilentRenewError: (payload) => {
          console.log('Automatic silent renew failed.', payload.error)
        },
      },
    ),
  },
})
