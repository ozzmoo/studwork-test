import Vue from 'vue'
import VueRouter from 'vue-router'
import Ships from '../views/Ships.vue'
import Starship from '../views/Starship.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Ships',
    component: Ships
  },
  {
    path: '/:name',
    name: 'Starship',
    component: Starship
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router