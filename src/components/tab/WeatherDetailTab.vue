<script lang="ts" setup>
import { ref } from 'vue';
import { WeatherType } from '@/utils/axiosSetting/axios';

interface WeatherDetailTabProps {
  dateWeatherData: WeatherType;
}

const { dateWeatherData } = defineProps<WeatherDetailTabProps>();

const activeKey = ref('1');
</script>
<template>
  <a-tabs v-model:activeKey="activeKey">
    <a-tab-pane key="1" tab="기온" class="panel">
      <section class="detail-section">
        <div class="title-category">
          <strong>평균 기온</strong>
          <p>{{ dateWeatherData.avgTa }}</p>
        </div>
        <div class="title-category">
          <strong>최고 기온</strong>
          <p>{{ dateWeatherData.maxTa }}</p>
        </div>
        <div class="title-category">
          <strong>최고 기온 시간</strong>
          <p>{{ dateWeatherData.maxTaHrmt }}</p>
        </div>
        <div class="title-category">
          <strong>최저 기온</strong>
          <p>{{ dateWeatherData.minTa }}</p>
        </div>
        <div class="title-category">
          <strong>최저 기온 시간</strong>
          <p>{{ dateWeatherData.minTaHrmt }}</p>
        </div>
      </section></a-tab-pane
    >
    <a-tab-pane key="2" tab="풍량" force-render>
      <section class="detail-section">
        <div class="title-category">
          <strong>평균 풍속</strong>
          <p>{{ dateWeatherData.avgWs }}</p>
        </div>
        <div class="title-category">
          <strong>최대 순간 풍속</strong>
          <p>{{ dateWeatherData.maxInsWs }}</p>
        </div>
        <div class="title-category">
          <strong>최대 순간 풍속 풍향</strong>
          <p>{{ dateWeatherData.maxInsWsWd }}</p>
        </div>
        <div class="title-category">
          <strong>최대 순간 풍속 시간</strong>
          <p>{{ dateWeatherData.maxInsWsHrmt }}</p>
        </div>
        <div class="title-category">
          <strong>최대 풍속</strong>
          <p>{{ dateWeatherData.maxWs }}</p>
        </div>
        <div class="title-category">
          <strong>최대 풍속 방향</strong>
          <p>{{ dateWeatherData.maxInsWsHrmt }}</p>
        </div>
        <div class="title-category">
          <strong>최대 풍속 시간</strong>
          <p>{{ dateWeatherData.maxWsHrmt }}</p>
        </div>
        <div class="title-category">
          <strong>최다 풍향</strong>
          <p>{{ dateWeatherData.maxWd }}</p>
        </div>
      </section>
    </a-tab-pane>
    <a-tab-pane key="3" tab="강수">
      <section class="detail-section">
        <div v-if="!dateWeatherData.sumRn">데이터가 없습니다.</div>
        <template v-else>
          <div class="title-category">
            <strong>일 강수량</strong>
            <p>{{ dateWeatherData.sumRn }}</p>
          </div>
          <div class="title-category">
            <strong>강수 계속시간</strong>
            <p>{{ dateWeatherData.sumRnDur }}</p>
          </div>
          <div class="title-category">
            <strong>10분 최다 강수량</strong>
            <p>{{ dateWeatherData.mi10MaxRn }}</p>
          </div>
          <div class="title-category">
            <strong>1시간 최다 강수량</strong>
            <p>{{ dateWeatherData.hr1MaxRn }}</p>
          </div>
          <div class="title-category">
            <strong>1시간 최다 강수량 시간</strong>
            <p>{{ dateWeatherData.hr1MaxRnHrmt }}</p>
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
