import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// Dynamically assigns page routes
const files = require.context('@/pages/', true, /\.vue$/i)
const routes = files.keys().map((key) => {
  const name = key
    .split('/')
    .pop()
    .split('.')[0]

  return {
    path: files(key).default.path || '/' + name.toLowerCase(),
    name: files(key).default.name || name,
    component: files(key).default,
  }
})

/* Regular way to define routes */
// import Home from '@/pages/Home.vue'
// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home,
//   },
//   {
//     path: '/about',
//     name: 'About',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import('@/pages/About.vue'),
//     // component: () =>
//     //   import(/* webpackChunkName: "about" */ '../pages/About.vue'),
//   },
// ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
