<script setup lang="ts">
import { useLoadingStore } from '@/utils/store/LoadingStore';
import { useWeatherStore } from '@/utils/store/WeatherStore';
import { computed } from 'vue';
import SpinnerUI from '../UX/SpinnerUI.vue';

const weatherStore = useWeatherStore();

const columns = [
  {
    title: '날짜',
    dataIndex: 'tm',
    key: 'tm',
  },
  {
    title: '평균 기온',
    key: 'avgTa',
    dataIndex: 'avgTa',
  },
  {
    title: '최고 기온',
    key: 'maxTa',
    dataIndex: 'maxTa',
  },
  {
    title: '최고 기온 시간',
    key: 'maxTaHrmt',
    dataIndex: 'maxTaHrmt',
  },
  {
    title: '최저 기온',
    key: 'minTa',
    dataIndex: 'minTa',
  },
  {
    title: '최저 기온 시간',
    key: 'minTaHrmt',
    dataIndex: 'minTaHrmt',
  },
  {
    title: '일강수량',
    key: 'sumRn',
    dataIndex: 'sumRn',
  },
];

const loadingStore = useLoadingStore();

const isLoading = computed(() => loadingStore.isLoading);

const weatherTableData = computed(() => weatherStore.weatherData);
</script>
<template>
  <section>
    <SpinnerUI v-if="isLoading" />
    <a-table v-else :columns="columns" :data-source="weatherTableData">
      <template #tm="{ tm }">
        <a>{{ tm }}</a>
      </template>
      <template #customTitle>
        <span> 날짜 </span>
      </template>
      <template #tags="{ text: tags }">
        <span>
          <a-tag
            v-for="tag in tags"
            :key="tag"
            :color="
              tag === 'loser'
                ? 'volcano'
                : tag.length > 5
                ? 'geekblue'
                : 'green'
            "
          >
            {{ tag.toUpperCase() }}
          </a-tag>
        </span>
      </template>
    </a-table>
  </section>
</template>

<style scoped>
section {
  background-color: #ececec;
  margin: 30px 0 0 0;
  padding: 30px;
}
.spinner {
  text-align: center;
}
</style>
