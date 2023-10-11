<script setup lang="ts">
import { reactive, ref, toRaw } from 'vue';
import { getWeather } from '@/utils/axiosSetting/axios';
import { useDate } from 'vue3-dayjs-plugin/useDate';
import { Moment } from 'moment';

interface FormType {
  region: string;
  date: Moment[];
}
const formState = reactive<FormType>({
  region: undefined,
  date: [],
});

const date = useDate();

const submitHandler = async () => {
  const firstDate = date(formState.date[0]?.$d).format('YYYYMMDD') || 0;
  const lastDate = date(formState.date[1]?.$d).format('YYYYMMDD') || 0;
  //   console.log(firstDate, lastDate);
  const data = await getWeather(firstDate, lastDate);
};
</script>
<template>
  <div style="background: #ececec; padding: 30px">
    <a-form :model="formState">
      <a-form-item ref="region" label="지역">
        <a-input v-model:value="formState.region" />
      </a-form-item>
      <a-form-item label="date" required name="date">
        <a-range-picker v-model:value="formState.date" required type="date" />
      </a-form-item>
      <a-form-item>
        <a-button type="primary" @click="submitHandler">검색</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<style scoped></style>
