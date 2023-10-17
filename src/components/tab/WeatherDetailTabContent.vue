<template>
  <template v-if="isDataOption && !dateWeatherData.sumRn">
    <a-result class="result" status="warning" title="데이터가 없습니다.">
    </a-result>
  </template>
  <template v-else>
    <article class="detail-section">
      <div
        class="title-category"
        v-for="detailData in detailDatas"
        :key="detailData.content"
      >
        <strong>{{ detailData.label }}</strong>
        <p>{{ dateWeatherData[detailData.content] }}</p>
      </div>
    </article>
  </template>
</template>
<script setup lang="ts">
import { WeatherType } from '@/utils/axiosSetting/axios';
import { DetailDataArrType } from '@/utils/clientdata/ClientData';

interface WeatherDetailTabProps {
  dateWeatherData: WeatherType;
  detailDatas: DetailDataArrType[];
  isDataOption?: boolean;
}
const { dateWeatherData, detailDatas, isDataOption } =
  defineProps<WeatherDetailTabProps>();
</script>
<style scoped>
.detail-section {
  background-color: #ececec;
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
}

.title-category {
  width: 20%;
  font-size: 1rem;
  line-height: 3;
}
</style>
