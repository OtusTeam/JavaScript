import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      meta: {
        layout: ''
      }
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (Login.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../pages/LoginPage.vue')
    },
    {
      path: '/users',
      component: () => import('../pages/users/UsersPage.vue'),
      name: 'users',
      children: [
        {
          path: ':id',
          component: () => import('../pages/users/UserPage.vue'),
          name: 'user',
          meta: {
            isAuth: true,
            isGuest: true
          }
        }
      ]
    },
    {
      // See: https://router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes
      path: '/:pathMatch(.*)*',
      name: '404',
      component: () => '404', // import('@/pages/404/Main.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  debugger
  next()
})

export default router
