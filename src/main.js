import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './registerServiceWorker'
// import 'plugin'
import './plugin/plugin'
import './assets/icon/iconfont.css'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
