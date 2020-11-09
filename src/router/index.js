import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from 'views/Home'

import { vuexOidcCreateRouterMiddleware } from 'vuex-oidc'
import store from 'store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/sign-in-callback',
    name: 'SignInCallback',
    component: () => import('views/oidc/SignInCallback'),
  },
  {
    path: '/sign-out-callback',
    name: 'SignOutCallback',
    component: () => import('views/oidc/SignOutCallback'),
  },
  {
    path: '/oidc-silent-renew',
    name: 'SilentRenew',
    component: () => import('views/oidc/SilentRenew'),
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/uni-studio',
    name: 'UniStudio',
    component: () => import('views/UniStudio'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {x: 0, y: 0}
    }
  },
})

// 注入 OIDC 中间件
router.beforeEach(vuexOidcCreateRouterMiddleware(store))

export default router
