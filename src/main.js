import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './vuex/store'
import '@/plugins/element'
import request from '@/common/js/request'

Vue.config.productionTip = false
Vue.prototype.$http = request

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
