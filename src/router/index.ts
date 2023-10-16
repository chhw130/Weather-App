import { createRouter, createWebHistory } from 'vue-router';
import WeatherListView from '@/views/weatherView/WeatherListView.vue';
import WeatherChartView from '@/views/weatherView/WeatherChartView.vue';
import WeatherDetailView from '@/views/weatherView/WeatherDetailView.vue';

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/list',
      name: 'list',
      component: WeatherListView,
    },
    {
      path: '/chart',
      name: 'chart',
      component: WeatherChartView,
    },
    {
      path: '/detail',
      name: 'detail',
      component: WeatherDetailView,
    },
  ],
});

export default router;
