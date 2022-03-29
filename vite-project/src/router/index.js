import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/layouts/index.vue'

// 工厂函数创建router实例
export const routes = [
  {
    path: '/',
    component: Layout,
    alwaysShow: true,
    meta: { title: '首页', icon: 'el-icon-s-home' },
    children: [
      {
        path: '/',
        component: () => import('views/home.vue'),
        name: 'Home',
        meta: { title: 'Vue2', icon: 'el-icon-document' }
      },
      {
        path: '/vue',
        component: () => import('views/vue/index.vue'),
        name: 'Vue',
        meta: { title: 'Vue3', icon: 'el-icon-document-copy' }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export default router
