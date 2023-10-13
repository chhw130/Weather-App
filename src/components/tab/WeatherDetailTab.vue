<script lang="ts" setup>
import { ref } from 'vue';
import { WeatherType } from '@/utils/axiosSetting/axios';

interface WeatherDetailTabPropsType {
  dateWeatherData: WeatherType[] | void;
}

const { dateWeatherData } = defineProps<WeatherDetailTabPropsType>();

const activeKey = ref('1');
</script>
<template>
  <a-tabs v-model:activeKey="activeKey">
    <a-tab-pane key="1" tab="기온">
      <section class="detail-section">
        <div class="title-category">
          <strong>평균 기온</strong>
          <p>{{ dateWeatherData[0]?.avgTa }}</p>
        </div>
        <div class="title-category">
          <strong>최고 기온</strong>
          <p>{{ dateWeatherData[0]?.maxTa }}</p>
        </div>
        <div class="title-category">
          <strong>최고 기온 시간</strong>
          <p>{{ dateWeatherData[0]?.maxTaHrmt }}</p>
        </div>
        <div class="title-category">
          <strong>최저 기온</strong>
          <p>{{ dateWeatherData[0]?.minTa }}</p>
        </div>
        <div class="title-category">
          <strong>최저 기온 시간</strong>
          <p>{{ dateWeatherData[0]?.minTaHrmt }}</p>
        </div>
      </section></a-tab-pane
    >
    <a-tab-pane key="2" tab="풍량" force-render>
      <section class="detail-section">
        <div class="title-category">
          <strong>평균 풍속</strong>
          <p>{{ dateWeatherData[0]?.avgWs }}</p>
        </div>
        <div class="title-category">
          <strong>최대 순간 풍속</strong>
          <p>{{ dateWeatherData[0]?.maxInsWs }}</p>
        </div>
        <div class="title-category">
          <strong>최대 순간 풍속 풍향</strong>
          <p>{{ dateWeatherData[0]?.maxInsWsWd }}</p>
        </div>
        <div class="title-category">
          <strong>최대 순간 풍속 시간</strong>
          <p>{{ dateWeatherData[0]?.maxInsWsHrmt }}</p>
        </div>
        <div class="title-category">
          <strong>최대 풍속</strong>
          <p>{{ dateWeatherData[0]?.maxWs }}</p>
        </div>
        <div class="title-category">
          <strong>최대 풍속 방향</strong>
          <p>{{ dateWeatherData[0]?.maxInsWsHrmt }}</p>
        </div>
        <div class="title-category">
          <strong>최대 풍속 시간</strong>
          <p>{{ dateWeatherData[0]?.maxWsHrmt }}</p>
        </div>
        <div class="title-category">
          <strong>최다 풍향</strong>
          <p>{{ dateWeatherData[0]?.maxWd }}</p>
        </div>
      </section>
    </a-tab-pane>
    <a-tab-pane key="3" tab="강수">
      <section class="detail-section">
        <div v-if="!dateWeatherData[0]?.sumRn">데이터가 없습니다.</div>
        <template v-else>
          <div class="title-category">
            <strong>일 강수량</strong>
            <p>{{ dateWeatherData[0]?.sumRn }}</p>
          </div>
          <div class="title-category">
            <strong>강수 계속시간</strong>
            <p>{{ dateWeatherData[0]?.sumRnDur }}</p>
          </div>
          <div class="title-category">
            <strong>10분 최다 강수량</strong>
            <p>{{ dateWeatherData[0]?.mi10MaxRn }}</p>
          </div>
          <div class="title-category">
            <strong>1시간 최다 강수량</strong>
            <p>{{ dateWeatherData[0]?.hr1MaxRn }}</p>
          </div>
          <div class="title-category">
            <strong>1시간 최다 강수량 시간</strong>
            <p>{{ dateWeatherData[0]?.hr1MaxRnHrmt }}</p>
          </div>
        </template>
      </section>
    </a-tab-pane>
  </a-tabs>
</template>

<style scoped>
.detail-section {
  background-color: #ececec;
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
}

.title-category {
  width: 20%;
  font-size: 1.2rem;
  line-height: 2;
}
</style>
