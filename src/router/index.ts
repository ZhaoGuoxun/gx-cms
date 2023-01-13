import { createRouter, createWebHashHistory } from 'vue-router'
import NotFound from '@/views/not-found/notFound.vue'
import { localCache } from '@/utils/Cache'
import { firstMenu } from '@/utils/map-menus'

import nprogress from 'nprogress'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/login',
      component: () => import('@/views/login/login.vue')
    },
    {
      path: '/main',
      name: 'main',
      component: () => import('@/views/main/main.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})

router.beforeEach((to, from) => {
  nprogress.start()
  const token = localCache.getItem('token')
  if (!token && to.path.startsWith('/main')) {
    return '/login'
  } else if (token && to.path == '/login') {
    return '/main'
  }
  if (to.path == '/main') {
    return firstMenu?.path
  }
})

router.afterEach(() => {
  nprogress.done()
})

export default router
