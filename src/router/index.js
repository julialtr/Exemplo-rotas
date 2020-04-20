import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Componente1 from '../views/Componente1.vue'
import Componente2 from '../views/Componente2.vue'
import Componente3 from '../views/Componente3.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/componente1',
    name: 'Componente1',
    component: Componente1
  },
  {
    path: '/componente2',
    name: 'Componente2',
    component: Componente2
  },{
    path: '/componente3',
    name: 'Componente3',
    component: Componente3
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
