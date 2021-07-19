import Vue from 'vue'
import './plugins/axios'
// import Fragment from 'vue-fragment'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/css/global.scss'

// Vue.use(Fragment.Plugin)
Vue.config.productionTip = false

localStorage.setItem(
  'token',
  'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIiLCJzeXNNZW1JZCI6Ik1FLTIwMjAxMTEyMTM0MTAzNDkzIiwicm9sZXMiOlsiUk9MRV9VU0VSIl0sImNoaWxkSWQiOiJNQy0yMDIwMTExMjEzNDEwMzAwMCIsImNoaWxkTmFtZSI6IlRFU1QiLCJjaGlsZEFnZSI6MiwiY2hpbGRUaHVtYm5haWwiOiIiLCJscm5nTWVtU2Vxbm8iOjIwOCwiaWF0IjoxNjE3NzY2NTg3LCJleHAiOjE2NDkyMTYxODd9.sg_eWWF6iRU9uYk_99K66m3-YlXgwAn9n4e1IKPA6hQ'
)

new Vue({
  store,
  router,
  render: (h) => h(App)
}).$mount('#app')
