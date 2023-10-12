import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import WeatherListView from '@/views/weatherView/WeatherListView.vue';
import WeatherChartView from '@/views/weatherView/WeatherChartView.vue';
import WeatherDetailView from '@/views/weatherView/WeatherDetailView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
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
