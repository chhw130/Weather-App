<script lang="ts" setup>
import { ref } from 'vue';
import { WeatherType } from '@/utils/axiosSetting/axios';
import {
  rnDataArr,
  tempDataArr,
  wsDataArr,
} from '@/utils/clientdata/ClientData';

const { dateWeatherData } = defineProps<WeatherDetailTabProps>();
const activeKey = ref('1');

interface WeatherDetailTabProps {
  dateWeatherData: WeatherType;
}
</script>
<template>
  <section>
    <a-tabs v-model:activeKey="activeKey">
      <a-tab-pane key="1" tab="기온" class="panel">
        <article class="detail-section">
          <div
            class="title-category"
            v-for="tempData in tempDataArr"
            :key="tempData.content"
          >
            <strong>{{ tempData.label }}</strong>
            <p>{{ dateWeatherData[tempData.content] }}</p>
          </div>
        </article>
      </a-tab-pane>
      <a-tab-pane key="2" tab="풍량" force-render>
        <article class="detail-section">
          <div
            class="title-category"
            v-for="wsData in wsDataArr"
            :key="wsData.content"
          >
            <strong>{{ wsData.label }}</strong>
            <p>{{ dateWeatherData[wsData.content] }}</p>
          </div>
        </article>
      </a-tab-pane>
      <a-tab-pane key="3" tab="강수">
        <article class="detail-section">
          <template v-if="!dateWeatherData.sumRn">
            <a-result
              class="result"
              status="warning"
              title="데이터가 없습니다."
            >
            </a-result>
          </template>
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
        </article>
      </a-tab-pane>
    </a-tabs>
  </section>
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
  font-size: 1rem;
  line-height: 3;
}

.result {
  margin: 0 auto;
}
</style>
