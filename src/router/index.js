import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import NewsView from '../views/NewsView.vue'
import CategoryView from '../views/CategoryView.vue'
import ProfileView from '../views/ProfileView.vue'
import DetailCategory from '../views/DetailCategory.vue'
import DashboardLayout from '../layouts/DashboardLayout.vue'

//Public
import PublicLayout from '../layouts/PublicLayout.vue'
import LandingPageView from '../views/LandingPage.vue'
import CategoryPublicView from '../views/public/CategoryView.vue'
import LoginView from '../views/public/LoginView.vue'
import RegisterView from '../views/public/RegisterView.vue'
import CategoryNewsById from '@/views/public/category/CategoryByIdView.vue'

//Error
import NotFoundView from '../views/error/NotFoundView.vue'

//News
import CreateNewsView from '@/views/news/CreateNewsView.vue'
import DetailNews from '@/views/news/DetailNewsView.vue'
import UpdateNews from '@/views/news/UpdateNewsView.vue'
import DetailNewsPublic from '@/views/public/news/DetailNewsPublicView.vue'

import { auth } from '../config/firebase'

const requiredAuth = (to, from, next) => {
  const userAuth = auth.currentUser
  if (!userAuth) {
    alert('Please login or register')
    next({ name: 'Login' })
  } else {
    next()
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //Dashboard
    {
      path: '/dashboard',
      component: DashboardLayout,
      beforeEnter: requiredAuth,
      children: [
        {
          path: '',
          redirect: { name: 'Dashboard' }
        },
        {
          path: './',
          name: 'Dashboard',
          component: DashboardView
        },
        {
          path: 'news',
          name: 'News',
          component: NewsView
        },
        {
          path: 'news/create',
          name: 'CreateNews',
          component: CreateNewsView
        },
        {
          path: 'news/:id',
          name: 'DetailNews',
          component: DetailNews
        },
        {
          path: 'news/:id/edit',
          name: 'EditNews',
          component: UpdateNews
        },
        {
          path: 'category',
          name: 'Category',
          component: CategoryView
        },
        {
          path: 'profile',
          name: 'Profile',
          component: ProfileView
        },
        {
          path: 'category/:name',
          name: 'Category-name',
          component: DetailCategory
        }
      ]
    },

    //Public
    {
      path: '/',
      component: PublicLayout,
      children: [
        {
          path: '/',
          name: 'Home',
          component: LandingPageView
        },
        {
          path: '/news/:id',
          name: 'DetailNewsPublic',
          component: DetailNewsPublic
        },
        {
          path: '/category',
          name: 'CategoryPublic',
          component: CategoryPublicView
        },
        {
          path: '/category/:id',
          name: 'CategoryById',
          component: CategoryNewsById
        },
        {
          path: '/register',
          name: 'Register',
          component: RegisterView
        },
        {
          path: '/login',
          name: 'Login',
          component: LoginView
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFoundView
    }
  ]
})

export default router
