import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home'

const routes = [
  {
    name: 'home',
    path: '/',
    component: Home,
    meta: {
      layout: 'main'
    }
  },
  {
    name: 'Categories',
    path: '/categories',
    component: () => import('../views/Categories'),
    meta: {
      layout: 'main'
    }
  },
  {
    name: 'Detail',
    path: '/detail',
    component: () => import('../views/Detail'),
    meta: {
      layout: 'main'
    }
  },
  {
    name: 'History',
    path: '/history',
    component: () => import('../views/History'),
    meta: {
      layout: 'main'
    }
  },
  {
    name: 'Planning',
    path: '/planning',
    component: () => import('../views/Planning'),
    meta: {
      layout: 'main'
    }
  },
  {
    name: 'Profile',
    path: '/profile',
    component: () => import('../views/Profile'),
    meta: {
      layout: 'main'
    }
  },
  {
    name: 'Record',
    path: '/record',
    component: () => import('../views/Record'),
    meta: {
      layout: 'main'
    }
  },
  {
    name: 'auth',
    path: '/auth',
    component: () => import('../views/Login'),
    meta: {
      layout: 'auth'
    }
  },
  {
    name: 'register',
    path: '/register',
    component: () => import('../views/Register'),
    meta: {
      layout: 'auth'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
