import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/index.vue'
import about from '../pages/about.vue'
import product from '../pages/product.vue'
import product_c from '../pages/product_c.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      /* alias: '/index', */
      name: 'index',
      component: index
    },
    {
      path: '/project',
      name: 'product',
      component: product
    },
    {
      path: '',
      alias: '/index/:first',
      name: 'index',
      component: index
    },
    {
      path: '/product_c',
      name: 'product_c',
      component:product_c
    },
  ]
})
