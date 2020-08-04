import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// Automatically register components globally
const files = require.context('@/components/', true, /\.vue$/i)
files.keys().map((key) =>
  Vue.component(
    key
      .split('/')
      .pop()
      .split('.')[0],
    files(key).default
  )
)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
