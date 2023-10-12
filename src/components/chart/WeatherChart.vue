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

const date = computed(() =>
  weatherStore.weatherData.map((data) => {
    return data.tm || [];
  })
);

const avgTem = computed(() =>
  weatherStore.weatherData.map((data) => {
    return data.avgTa || [];
  })
);

const dateRainFall = computed(() =>
  weatherStore.weatherData.map((data) => {
    return data.sumRn;
  })
);

const option = reactive({
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999',
      },
    },
  },
  toolbox: {
    feature: {
      dataView: { show: true, readOnly: false },
      magicType: { show: true, type: ['line', 'bar'] },
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
      min: 10,
      max: 28,
      interval: 2,
      axisLabel: {
        formatter: '{value} °C',
      },
    },
    {
      type: 'value',
      name: '일 강수량',
      min: 10,
      max: 50,
      interval: 4,
      axisLabel: {
        formatter: '{value} ml',
      },
    },
  ],
  series: [
    {
      name: '평균 기온',
      type: 'bar',
      tooltip: {
        valueFormatter: function (value) {
          return value + ' °C';
        },
      },
      data: avgTem,
    },
    {
      name: '일 강수량',
      type: 'line',
      yAxisIndex: 1,
      tooltip: {
        valueFormatter: function (value) {
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
    <div v-if="isLoading" class="spinner">
      <a-spin />
    </div>
    <v-chart v-else class="chart" :option="option" />
  </section>
</template>

<style scoped>
.spinner {
  text-align: center;
}
.chart {
  height: 400px;
  width: 100%;
}

section {
  background-color: #ececec;
  margin: 30px 0 0 0;
  padding: 30px;
}
</style>
