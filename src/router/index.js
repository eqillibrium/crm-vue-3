import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import Home from '../views/Home'

const routes = [
  {
    name: 'home',
    path: '/',
    component: Home,
    meta: {
      layout: 'main',
      auth: true
    }
  },
  {
    name: 'Categories',
    path: '/categories',
    component: () => import('../views/Categories'),
    meta: {
      layout: 'main',
      auth: true
    }
  },
  {
    name: 'Detail',
    path: '/detail',
    component: () => import('../views/Detail'),
    meta: {
      layout: 'main',
      auth: true
    }
  },
  {
    name: 'History',
    path: '/history',
    component: () => import('../views/History'),
    meta: {
      layout: 'main',
      auth: true
    }
  },
  {
    name: 'Planning',
    path: '/planning',
    component: () => import('../views/Planning'),
    meta: {
      layout: 'main',
      auth: true
    }
  },
  {
    name: 'Profile',
    path: '/profile',
    component: () => import('../views/Profile'),
    meta: {
      layout: 'main',
      auth: true
    }
  },
  {
    name: 'Record',
    path: '/record',
    component: () => import('../views/Record'),
    meta: {
      layout: 'main',
      auth: true
    }
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('../views/Login'),
    meta: {
      layout: 'auth',
      auth: false
    }
  },
  {
    name: 'register',
    path: '/register',
    component: () => import('../views/Register'),
    meta: {
      layout: 'auth',
      auth: false
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})

router.beforeEach((to, from, next) => {
  const isAuth = to.meta.auth
  if (isAuth && store.getters['auth/isAuth']) {
    next()
  } else if (isAuth && !store.getters['auth/isAuth']) {
    next('/login?message=noAuth')
  } else {
    next()
  }
})

export default router
