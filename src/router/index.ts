import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WeatherListView from '@/views/weatherView/WeatherList.vue'
import WeatherChartView from '@/views/weatherView/WeatherChart.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/list',
      name: 'list',
      component: WeatherListView
    },
    {
      path: '/chart',
      name: 'chart',
      component: WeatherChartView
    }
  ]
})

export default router
