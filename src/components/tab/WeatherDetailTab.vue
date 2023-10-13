<script lang="ts" setup>
import { ref } from 'vue';
import { WeatherType } from '@/utils/axiosSetting/axios';

const { dateWeatherData } = defineProps<WeatherDetailTabProps>();
const activeKey = ref('1');

interface WeatherDetailTabProps {
  dateWeatherData: WeatherType;
}

interface DataArrType {
  label: string;
  content: string;
}

const tempDataArr: DataArrType[] = [
  {
    label: '평균기온',
    content: 'avgTa',
  },
  { label: '최고 기온', content: 'maxTa' },
  { label: '최고 기온 시간', content: 'maxTaHrmt' },
  { label: '최저 기온', content: 'minTa' },
  { label: '최저 기온 시간', content: 'minTaHrmt' },
];

const wsDataArr: DataArrType[] = [
  {
    label: '평균 풍속',
    content: 'avgWs',
  },
  {
    label: '최대 순간 풍속',
    content: 'maxInsWs',
  },
  {
    label: '최대 순간 풍속 풍향',
    content: 'maxInsWsWd',
  },
  {
    label: '최대 순간 풍속 시간',
    content: 'maxInsWsHrmt',
  },
  {
    label: '최대 풍속',
    content: 'maxWs',
  },
  {
    label: '최대 풍속 방향',
    content: 'maxInsWsHrmt',
  },
  {
    label: '최대 풍속 시간',
    content: 'maxWsHrmt',
  },
  {
    label: '최다 풍향',
    content: 'maxWd',
  },
];

const rnDataArr: DataArrType[] = [
  {
    label: '일 강수량',
    content: 'sumRn',
  },
  {
    label: '강수 계속시간',
    content: 'sumRnDur',
  },
  {
    label: '10분 최다 강수량',
    content: 'mi10MaxRn',
  },
  {
    label: '1시간 최다 강수량',
    content: 'hr1MaxRn',
  },
  {
    label: '1시간 최다 강수량 시간',
    content: 'hr1MaxRnHrmt',
  },
];
</script>
<template>
  <a-tabs v-model:activeKey="activeKey">
    <a-tab-pane key="1" tab="기온" class="panel">
      <section class="detail-section">
        <div
          class="title-category"
          v-for="tempData in tempDataArr"
          :key="tempData.content"
        >
          <strong>{{ tempData.label }}</strong>
          <p>{{ dateWeatherData[tempData.content] }}</p>
        </div>
      </section>
    </a-tab-pane>
    <a-tab-pane key="2" tab="풍량" force-render>
      <section class="detail-section">
        <div
          class="title-category"
          v-for="wsData in wsDataArr"
          :key="wsData.content"
        >
          <strong>{{ wsData.label }}</strong>
          <p>{{ dateWeatherData[wsData.content] }}</p>
        </div>
      </section>
    </a-tab-pane>
    <a-tab-pane key="3" tab="강수">
      <section class="detail-section">
        <div v-if="!dateWeatherData.sumRn">데이터가 없습니다.</div>
        <template v-else>
          <div
            class="title-category"
            v-for="rnData in rnDataArr"
            :key="rnData.content"
          >
            <strong>{{ rnData.label }}</strong>
            <p>{{ dateWeatherData[rnData.content] }}</p>
          </div>
        </template>
      </section>
    </a-tab-pane>
  </a-tabs>
</template>

<style scoped>
.panel {
  height: 200px;
}
.detail-section {
  background-color: #ececec;
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
}

.title-category {
  width: 20%;
  font-size: 1.2rem;
  line-height: 3;
}
</style>
