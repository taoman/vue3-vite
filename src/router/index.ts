/*
 * @Descripttion:
 * @Author: taoman
 * @Date: 2022-04-26 17:20:07
 * @LastEditors: taoman
 * @LastEditTime: 2022-09-07 14:21:10
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import login from '../views/login.vue'
import Home from 'src/views/Home.vue'
import ArticleList from 'src/views/articleList.vue'
import ArticleDetail from 'src/views/articleDetail.vue'
import Archive from 'src/views/archive.vue'
import Write from 'src/views/write.vue'
import NotFound from 'src/views/notFound.vue'
export const routesModuleList = [
  {
    path: '/articleList',
    component: ArticleList,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/articleDetail',
    component: ArticleDetail,
    meta: {
      title: '详情',
      hidden: true
    }
  },
  {
    path: '/archive',
    component: Archive,
    meta: {
      title: '文归档'
    }
  },
  {
    path: '/write',
    component: Write,
    meta: {
      title: '撰笔'
    }
  }
]
const routes:RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/articleList'
  },
  {
    path: '/home',
    component: Home,
    children: routesModuleList
  },
  {
    path: '/login',
    component: login
  },
  {
    path: '/:pathMatch(.*)',
    component: NotFound
  }

]
export const router = createRouter({
  history: createWebHashHistory(process.env.NODE_ENV === 'production' ? '/rem/' : '/'),
  routes
})

router.beforeEach((to, from, next) => {
  const token = sessionStorage.token
  if (to.path !== '/login' && !token)next({ path: '/login' })
  else next()
})
