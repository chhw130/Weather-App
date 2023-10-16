<script setup lang="ts">
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { BarChart, LineChart } from 'echarts/charts';
import {
  TooltipComponent,
  LegendComponent,
  GridComponent,
  ToolboxComponent,
} from 'echarts/components';
import VChart from 'vue-echarts';
import { useWeatherStore } from '@/utils/store/WeatherStore';
import { computed, reactive } from 'vue';
import { useLoadingStore } from '@/utils/store/LoadingStore';
import SpinnerUI from '../UX/SpinnerUI.vue';
import { EChartsCoreOption } from 'echarts';

use([
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  BarChart,
  LineChart,
  CanvasRenderer,
]);

const loadingStore = useLoadingStore();
const weatherStore = useWeatherStore();
const isLoading = computed(() => loadingStore.isLoading);

const date = computed(
  () =>
    weatherStore.weatherData?.map((data) => {
      return data.tm || 0;
    })
);

const avgTem = computed(
  () =>
    weatherStore.weatherData?.map((data) => {
      return data.avgTa || 0;
    })
);

const dateRainFall = computed(
  () =>
    weatherStore.weatherData?.map((data) => {
      return data.sumRn || '';
    })
);

/**chart option */
const option = reactive<EChartsCoreOption>({
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999',
      },
    },
  },
  legend: {
    data: ['평균 기온', '일 강수량'],
  },
  xAxis: [
    {
      type: 'category',
      data: date,
      axisPointer: {
        type: 'shadow',
      },
    },
  ],
  yAxis: [
    {
      type: 'value',
      name: '평균 기온',
      min: -16,
      max: 32,
      interval: 8,
      axisLabel: {
        formatter: '{value} °C',
      },
    },
    {
      type: 'value',
      name: '일 강수량',
      min: 0,
      max: 96,
      interval: 16,
      axisLabel: {
        formatter: '{value} ml',
      },
    },
  ],
  series: [
    {
      name: '평균 기온',
      type: 'line',
      tooltip: {
        valueFormatter: (value) => {
          return value + ' °C';
        },
      },
      data: avgTem,
    },
    {
      name: '일 강수량',
      type: 'bar',
      yAxisIndex: 1,
      tooltip: {
        valueFormatter: (value) => {
          return value + ' ml';
        },
      },
      data: dateRainFall,
    },
  ],
});
</script>

<template>
  <section>
    <SpinnerUI v-if="isLoading" />
    <v-chart v-else class="chart" :option="option" />
  </section>
</template>

<style scoped>
.chart {
  height: 400px;
  width: 100%;
}

section {
  display: flex;
  background-color: #ececec;
  margin: 30px 0 0 0;
  padding: 30px;
  height: 400px;
}
</style>
