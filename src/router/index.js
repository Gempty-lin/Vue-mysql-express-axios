import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/index.vue'
import about from '../pages/about.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index/:first/:second',
      alias: '/index/:first',
      name: 'index',
      component: index
    },
    {
      path: '/about/:first',
      name: 'about',
      component: about
    },
  ]
})
