<script setup lang="ts">
import { useLoadingStore } from '@/utils/store/LoadingStore';
import { useWeatherStore } from '@/utils/store/WeatherStore';
import { computed, ref } from 'vue';
import SpinnerUI from '../UX/SpinnerUI.vue';
import { columnData } from '@/utils/clientdata/ClientData';
import { useRouter } from 'vue-router';

const router = useRouter();
const weatherStore = useWeatherStore();
const loadingStore = useLoadingStore();

const isLoading = computed(() => loadingStore.isLoading);

const weatherTableData = computed(() => weatherStore.weatherData);

const goDetailView = (tm: string) => {
  const regionId: string = weatherTableData?.value[0].stnId;
  const regionName: string = weatherTableData?.value[0].stnNm;

  const queryData = {
    date: tm,
    regionId,
    regionName,
  };

  return router.push({ name: 'detail', query: queryData });
};
</script>
<template>
  <section>
    <SpinnerUI v-if="isLoading" />
    <a-table v-else :columns="columnData" :data-source="weatherTableData">
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

      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'tm'">
          <a @click="goDetailView(record.tm)">
            {{ record.tm }}
          </a>
        </template>
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
