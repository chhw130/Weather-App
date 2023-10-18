<script lang="ts" setup>
import { ref } from 'vue';
import { WeatherType } from '@/utils/axiosSetting/axios';
import {
  rnDataArr,
  tempDataArr,
  wsDataArr,
} from '@/utils/clientdata/ClientData';
import WeatherDetailTabContent from './WeatherDetailTabContent.vue';

interface WeatherDetailTabProps {
  dateWeatherData: WeatherType;
}
const { dateWeatherData } = defineProps<WeatherDetailTabProps>();
const activeKey = ref<string>('1');
</script>

<template>
  <section>
    <a-tabs v-model:activeKey="activeKey">
      <a-tab-pane key="1" tab="기온" class="panel">
        <WeatherDetailTabContent
          :dateWeatherData="dateWeatherData"
          :detailDatas="tempDataArr"
        />
      </a-tab-pane>
      <a-tab-pane key="2" tab="풍량" force-render>
        <WeatherDetailTabContent
          :dateWeatherData="dateWeatherData"
          :detailDatas="wsDataArr"
        />
      </a-tab-pane>
      <a-tab-pane key="3" tab="강수">
        <WeatherDetailTabContent
          :dateWeatherData="dateWeatherData"
          :detailDatas="rnDataArr"
          :isOptionData="true"
        />
      </a-tab-pane>
    </a-tabs>
  </section>
</template>

<style scoped>
.panel {
  height: 200px;
}

.result {
  margin: 0 auto;
}
</style>
