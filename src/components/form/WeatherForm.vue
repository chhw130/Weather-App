<script setup lang="ts">
import { reactive, ref } from 'vue';
import { getWeather } from '@/utils/axiosSetting/axios';
import { useDate } from 'vue3-dayjs-plugin/useDate';
import { useWeatherStore } from '@/utils/store/WeatherStore';
import { useLoadingStore } from '@/utils/store/LoadingStore';
import { regionData } from '@/utils/clientdata/ClientData';
import { Dayjs } from 'dayjs';
import { rules } from '@/utils/clientdata/ClientData';

const formRef = ref();
const date = useDate();
const weatherStore = useWeatherStore();
const loadingStore = useLoadingStore();

interface FormType {
  region: string;
  date: DateType[];
}

interface DateType {
  $L: string;
  $u: string;
  $H: number;
  $D: number;
  $M: number;
  $W: number;
  $d: Date;
  $isDayjsObject: boolean;
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

/**date calculate/formate function */
const calculateDate = (dateData: DateType[]): CalculateDate => {
  const firstDate: string = date(dateData[0]?.$d).format('YYYYMMDD') || 0;
  const lastDate: string = date(dateData[1]?.$d).format('YYYYMMDD') || 0;

  const date1 = date(firstDate);
  const date2 = date(lastDate);

  const dateDiff: number = date2.diff(date1, 'day') + 1;

  return { firstDate, lastDate, dateDiff };
};

/**form submit event */
const submitHandler = () => {
  formRef.value
    .validate()
    .then(async () => {
      /**loading active */
      loadingStore.updateLoading();

      /**formatting date */
      const dateData = formState.date;
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

/**calendar validation */
const disabledDate = (current: Dayjs) => {
  const today = new Date();
  const yesterday = new Date(today.setDate(today.getDate() - 1));
  return current >= date(yesterday).endOf('day');
};
</script>

<template>
  <section>
    <a-form
      :model="formState"
      :rules="rules"
      ref="formRef"
      class="weather-form"
    >
      <a-form-item
        ref="region"
        required
        label="지역"
        name="region"
        class="region-item category-item"
      >
        <a-select v-model:value="formState.region">
          <a-select-option
            v-for="region in regionData"
            label-in-value
            :key="region"
            :value="region.stnlds"
            :defaultValue="region"
            >{{ region.region }}</a-select-option
          >
        </a-select>
      </a-form-item>
      <a-form-item
        ref="date"
        label="날짜"
        required
        name="date"
        class="category-item"
      >
        <a-range-picker
          v-model:value="formState.date"
          :disabled-date="disabledDate"
          required
          type="date"
          class="date-picker"
        />
      </a-form-item>
      <a-form-item class="search-btn category-item">
        <a-button type="primary" @click="submitHandler">검색</a-button>
      </a-form-item>
    </a-form>
  </section>
</template>

<style scoped>
.weather-form {
  display: flex;
  width: 100%;
}
.category-item {
  padding: 10px;
}

.region-item {
  width: 15%;
  min-width: 100px;
}

.date-picker {
  width: 25%;
  min-width: 400px;
}
.ant-row {
  flex-direction: column;
}

section {
  background-color: #ececec;
  padding: 30px;
}

.search-btn {
  margin-left: auto;
}

.ant-btn {
  width: 100px;
  height: 40px;
}
</style>
