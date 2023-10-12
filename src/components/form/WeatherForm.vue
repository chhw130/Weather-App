<script setup lang="ts">
import { reactive, ref } from 'vue';
import { getWeather } from '@/utils/axiosSetting/axios';
import { useDate } from 'vue3-dayjs-plugin/useDate';
import { Moment } from 'moment';
import { useWeatherStore } from '@/utils/store/WeatherStore';
import { useLoadingStore } from '@/utils/store/LoadingStore';
import { regionData } from '@/utils/clientdata/ClientData';

interface FormType {
  region: string;
  date: Moment[] | any;
}

const formState = reactive<FormType>({
  region: undefined,
  date: undefined,
});

const formRef = ref();
const weatherStore = useWeatherStore();
const loadingStore = useLoadingStore();
const date = useDate();

const submitHandler = () => {
  formRef.value
    .validate()
    .then(async () => {
      loadingStore.updateLoading();
      const firstDate = date(formState.date[0]?.$d).format('YYYYMMDD') || 0;
      const lastDate = date(formState.date[1]?.$d).format('YYYYMMDD') || 0;

      // const submitData = {
      //   firstDate,
      //   lastDate,
      //   region :
      //   formState.region
      // };

      const data = await getWeather(firstDate, lastDate);
      weatherStore.updateWeather(data);
      loadingStore.updateLoading();
    })
    .catch(() => {
      return;
    });
};

const rules = {
  date: [
    {
      required: true,
      message: 'Please pick a date',
      trigger: 'change',
    },
  ],
  region: [
    {
      required: true,
      message: 'Please select Activity zone',
      trigger: 'change',
    },
  ],
};
</script>

<template>
  <div style="background: #ececec; padding: 30px">
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
  </div>
</template>

<style scoped></style>
