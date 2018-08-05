import Vue from 'vue'
import VueRouter from 'vue-router'
import project1 from "./components/work/project1.vue"
import project2 from "./components/work/project2.vue"
import project3 from "./components/work/project3.vue"

Vue.use(VueRouter)
export default new VueRouter({
  mode: "history",
  routes: [
    { path: '/project1', component: project1 },
    { path: '/project2', component: project2 },
    { path: '/project3', component: project3 }

  ]
})