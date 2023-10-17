<script setup lang="ts">
import WeatherDetailTab from '@/components/tab/WeatherDetailTab.vue';
import DetailSubject from '@/components/card/DetailSubjectCard.vue';
import { WeatherType, getWeather } from '@/utils/axiosSetting/axios';
import { reactive, ref } from 'vue';
import { LocationQuery, useRoute } from 'vue-router';
import { useDate } from 'vue3-dayjs-plugin/useDate';

const route = useRoute();
const date = useDate();

const queryData = reactive<LocationQuery>(route.query);
const dateWeatherData = ref<WeatherType>({
  avgTa: '',
  minTa: '',
  maxTaHrmt: '',
  maxTa: '',
  minTaHrmt: '',
  sumRn: '',
  stnId: '',
  stnNm: '',
  tm: '',
  avgWs: '',
  maxInsWs: '',
  maxInsWsWd: '',
  maxWs: '',
  maxInsWsHrmt: '',
  maxWsHrmt: '',
  maxWd: '',
  sumRnDur: '',
  mi10MaxRn: '',
  hr1MaxRn: '',
  hr1MaxRnHrmt: '',
});

interface SubmitDataType {
  dateDiff: number;
  firstDate: string;
  lastDate: string;
  region: string | string[];
}

const submitData: SubmitDataType = {
  dateDiff: 1,
  firstDate: date(queryData.date).format('YYYYMMDD'),
  lastDate: date(queryData.date).format('YYYYMMDD'),
  region: queryData.regionId,
};

const fetchDateWeather = async () => {
  const data = await getWeather(submitData);
  dateWeatherData.value = data[0];
};

fetchDateWeather();
</script>
<template>
  <DetailSubject />
  <WeatherDetailTab :dateWeatherData="dateWeatherData" />
</template>

<style scoped>
.detail-section {
  background-color: #ececec;
  padding: 30px;
  display: flex;
}
</style>
