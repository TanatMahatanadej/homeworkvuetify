import Vue from 'vue'
import VueRouter from 'vue-router'
// import store from '@/store'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

// router.beforeEach((to,from,next) => {

//   console.log(to.name)
//   //console.log(store.getters.auth.accessToken)
//   console.log('AccessToken ที่อยากให้เห็น', store.getters['auth/auth'].accessToken)
//   if ((to.name !== 'Login' && to.name !== 'Register') && !store.getters['auth/auth'].accessToken ) {

//     next({ name: 'Login' })
//   }
//   if((to.name == 'Login' || to.name == 'Register')&& store.getters['auth/auth'].accessToken) {
//     next({ name: 'home' })
//   }

//   next()



// })


export default router
