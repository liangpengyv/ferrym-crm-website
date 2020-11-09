import Vue from 'vue'
import ElementUI from 'element-ui'
import VueProgressBar from 'vue-progressbar'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueProgressBar, {
  color: '#21bbc2',
  failedColor: 'red',
  height: '2px',
})

export default new Vue({
  ...App,
  router,
  store,
  render: h => h(App),
}).$mount('#app')
