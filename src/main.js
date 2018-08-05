import Vue from 'vue'
import App from './App.vue'
import VueTouch from 'vue-touch'
import router from './router.js'

Vue.config.productionTip = false

Vue.use(VueTouch, {name: 'v-touch'})
console.log(router);



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')