import Vue from 'vue'
import VueAnalytics from 'vue-analytics'

import App from './App.vue'
import router from './router.js'

Vue.config.productionTip = false

Vue.use(VueAnalytics, {
  id:"UA-123501070-1",
  router
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')