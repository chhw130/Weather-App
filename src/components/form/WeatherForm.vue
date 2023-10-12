<script setup lang="ts">
import { reactive, ref } from 'vue';
import { getWeather } from '@/utils/axiosSetting/axios';
import { useDate } from 'vue3-dayjs-plugin/useDate';
import { Moment } from 'moment';
import { useWeatherStore } from '@/utils/store/WeatherStore';
import { useLoadingStore } from '@/utils/store/LoadingStore';
import { regionData } from '@/utils/clientdata/ClientData';

const formRef = ref();
const date = useDate();
const weatherStore = useWeatherStore();
const loadingStore = useLoadingStore();

interface FormType {
  region: number;
  date: Moment[] | any;
}

interface CalculateDate {
  firstDate: string;
  lastDate: string;
  dateDiff: number;
}

export interface SubmitData extends CalculateDate {
  region: number | string | string[];
}

const formState = reactive<FormType>({
  region: undefined,
  date: undefined,
});

/**Date calculate/formate function */
const calculateDate = (dateData: any): CalculateDate => {
  const firstDate: string = date(dateData[0]?.$d).format('YYYYMMDD') || 0;
  const lastDate: string = date(dateData[1]?.$d).format('YYYYMMDD') || 0;

  const date1 = date(firstDate);
  const date2 = date(lastDate);

  const dateDiff: number = date2.diff(date1, 'day') + 1;

  return { firstDate, lastDate, dateDiff };
};

/**Form submit event */
const submitHandler = () => {
  formRef.value
    .validate()
    .then(async () => {
      /**loading active */
      loadingStore.updateLoading();

      /**formatting date */
      const dateData: string = formState.date;
      const { firstDate, lastDate, dateDiff } = calculateDate(dateData);

      /**data fetching */
      const submitData: SubmitData = {
        firstDate,
        lastDate,
        dateDiff,
        region: formState.region,
      };
      const data = await getWeather(submitData);

      /**store data in pinia store */
      weatherStore.updateWeather(data);

      /**loading inactive */
      loadingStore.updateLoading();
    })
    .catch(() => {
      return;
    });
};

/**Form validation rule */
const rules = {
  date: [
    {
      required: true,
      message: '날짜를 선택해주세요.',
      trigger: 'change',
    },
  ],
  region: [
    {
      required: true,
      message: '지역을 선택해주세요.',
      trigger: 'change',
    },
  ],
};
</script>

<template>
  <section>
    <a-form :model="formState" :rules="rules" ref="formRef">
      <a-form-item ref="region" required label="지역" name="region">
        <a-select v-model:value="formState.region">
          <a-select-option
            v-for="region in regionData"
            :key="region"
            :value="region.stnlds"
            >{{ region.region }}</a-select-option
          >
        </a-select>
      </a-form-item>
      <a-form-item ref="date" label="날짜" required name="date">
        <a-range-picker v-model:value="formState.date" required type="date" />
      </a-form-item>
      <a-form-item>
        <a-button type="primary" @click="submitHandler">검색</a-button>
      </a-form-item>
    </a-form>
  </section>
</template>

<style scoped>
section {
  background-color: #ececec;
  padding: 30px;
}
</style>
