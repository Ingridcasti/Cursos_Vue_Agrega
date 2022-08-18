import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Backend',
name: 'Backend',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Backend.vue')
  },
  {
    path: '/frontend',
    name: 'frontend',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/frontend.vue')
 },
 {
  path: '/Desing',
  name: 'Desing',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ '../views/desing.vue')
},
  {
    path: '/comentarios',
    name: 'comentarios',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/comentarios.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
