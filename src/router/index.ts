import { createRouter, createWebHistory } from 'vue-router';

/**tree shaking */
export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/list',
    },
    {
      path: '/list',
      name: 'list',
      component: () => import('@/views/weatherView/WeatherListView.vue'),
    },
    {
      path: '/chart',
      name: 'chart',
      component: () => import('@/views/weatherView/WeatherChartView.vue'),
    },
    {
      path: '/list/detail',
      name: 'detail',
      component: () => import('@/views/weatherView/WeatherDetailView.vue'),
    },
  ],
});

export default router;
