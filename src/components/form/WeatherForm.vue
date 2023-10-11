<template>
  <div style="background: #ececec; padding: 30px">
    <a-form :model="formState" :rules="rules" ref="formRef">
      <a-form-item ref="region" required label="지역" name="region">
        <a-input v-model:value="formState.region" />
      </a-form-item>
      <a-form-item label="날짜" required name="date">
        <a-range-picker v-model:value="formState.date" required type="date" />
      </a-form-item>
      <a-form-item>
        <a-button type="primary" @click="submitHandler">검색</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { getWeather } from '@/utils/axiosSetting/axios';
import { useDate } from 'vue3-dayjs-plugin/useDate';
import { Moment } from 'moment';
import { useWeatherStore } from '@/utils/store/WeatherStore';
import { useLoadingStore } from '@/utils/store/LoadingStore';

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
      const data = await getWeather(firstDate, lastDate);
      weatherStore.fetchWeather(data);
      loadingStore.updateLoading();
    })
    .catch(() => {
      return;
    });
};

const rules = {
  name: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
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

<style scoped></style>
