import Vue from 'vue'
import VueRouter from 'vue-router'
import xenos from "./components/work/xenos.vue"
import kwint from "./components/work/kwint.vue"
import eiga from "./components/work/eiga.vue"

Vue.use(VueRouter)
export default new VueRouter({
  mode: "history",
  routes: [
    { path: '/xenos', component: xenos },
    { path: '/kwint', component: kwint },
    { path: '/eiga', component: eiga }
  ]
})