import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import Layout from '@/layout/index.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    redirect: '/home',
    component: Layout,
    children: [
      {
        path: '/home',
        component: () => import('@/views/home.vue')
      },
      {
        path: '/category',
        component: () => import('@/views/category.vue')
      },
      {
        path: '/category/:id',
        component: () => import('@/views/list.vue')
      },
      {
        path: '/tag',
        component: () => import('@/views/tag.vue')
      },
      {
        path: '/tag/:id',
        component: () => import('@/views/list.vue')
      },
      {
        path: '/archive',
        component: () => import('@/views/archive.vue')
      },
      {
        path: '/about',
        component: () => import('@/views/about.vue')
      },
      {
        path: '/detail/:id',
        component: () => import('@/views/detail.vue')
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
