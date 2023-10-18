<script setup lang="ts">
import { useLoadingStore } from '@/utils/store/LoadingStore';
import { useWeatherStore } from '@/utils/store/WeatherStore';
import { computed } from 'vue';
import SpinnerUI from '../UX/SpinnerUI.vue';
import { columnData } from '@/utils/clientdata/ClientData';
import { useRouter } from 'vue-router';

const router = useRouter();
const weatherStore = useWeatherStore();
const loadingStore = useLoadingStore();

const isLoading = computed(() => loadingStore.isLoading);
const weatherTableData = computed(() => weatherStore.weatherData);

/**go detailpage when weatherTable weatherDate function */
const goDetailView = (tm: string) => {
  const regionId = weatherTableData?.value[0].stnId;
  const regionName = weatherTableData?.value[0].stnNm;

  const queryData = {
    date: tm,
    regionId,
    regionName,
  };
  return router.push({ name: 'detail', query: queryData });
};
</script>
<template>
  <section class="table-section">
    <SpinnerUI v-if="isLoading" />
    <a-table
      v-else
      :columns="columnData"
      :data-source="weatherTableData"
      :pagination="{ pageSize: 10 }"
      class="table"
    >
      <template #tm="{ tm }">
        <a>{{ tm }}</a>
      </template>

      <template #tags="{ text: tags }">
        <span>
          <a-tag v-for="tag in tags" :key="tag"> {{ tag }} </a-tag>
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
.table-section {
  background-color: #ececec;
  margin: 30px 0 0 0;
  padding: 30px;
  min-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.table {
  width: 100%;
  height: 100%;
}
.spinner {
  text-align: center;
}
</style>
