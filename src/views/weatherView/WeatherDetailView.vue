<script setup lang="ts">
import WeatherDetailTab from '@/components/tab/WeatherDetailTab.vue';
import { WeatherType, getWeather } from '@/utils/axiosSetting/axios';
import { reactive, ref } from 'vue';
import { LocationQuery, useRoute } from 'vue-router';
import { useDate } from 'vue3-dayjs-plugin/useDate';

const route = useRoute();
const date = useDate();

const queryData = reactive<LocationQuery>(route.query);
const dateWeatherData = ref<void | WeatherType[]>([]);

const submitData = {
  dateDiff: 1,
  firstDate: date(queryData.date).format('YYYYMMDD'),
  lastDate: date(queryData.date).format('YYYYMMDD'),
  region: queryData.regionId,
};

const fetchDateWeather = async () => {
  const data = await getWeather(submitData);
  dateWeatherData.value = data;
};

fetchDateWeather();
</script>
<template>
  <section class="detail-section">
    <div class="title-category">
      <strong>지역(지역번호)</strong>
      <p>서울({{ queryData.regionId }})</p>
    </div>
    <div class="title-category">
      <strong>날짜</strong>
      <p>{{ queryData.date }}</p>
    </div>
  </section>
  <section>
    <WeatherDetailTab />
  </section>
</template>

<style scoped>
.detail-section {
  background-color: #ececec;
  padding: 30px;
  display: flex;
}

.title-category {
  width: 50%;
  font-size: 1.3rem;
  line-height: 2;
}
</style>
