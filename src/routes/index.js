import Index from '../pages/index/index.vue'
import Cart from '../pages/cart/cart.vue'
import Deserve from '../pages/deserve/deserve.vue'
import Personal from '../pages/personal/personal.vue'
import Search from '../pages/search/search.vue'

export default [
  { path: '/Index', component: Index },
  { path: '/Cart', component: Cart },
  { path: '/Deserve', component: Deserve },
  { path: '/Personal', component: Personal },
  { path: '/Search', component: Search },
  { path: '/', redirect: '/Index' }
]