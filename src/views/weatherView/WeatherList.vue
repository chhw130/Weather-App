<script setup lang="ts">
import { reactive, ref, toRaw } from 'vue';
import { getWeather } from '@/utils/axiosSetting/axios';

interface FormType {
  region: string;
  date: String;
}
const formState = reactive<FormType>({
  region: undefined,
  date: undefined,
});

const submitHandler = async () => {
  //   const data = await getWeather();
  //   console.log(data);

  console.log(formState.date);
};
</script>
<template>
  <div style="background: #ececec; padding: 30px">
    <a-form :model="formState">
      <a-form-item ref="region" label="지역">
        <a-input v-model:value="formState.region" />
      </a-form-item>
      <a-form-item label="date" name="date">
        <a-range-picker v-model:value="formState.date" type="date" />
      </a-form-item>
      <a-form-item>
        <a-button type="primary" @click="submitHandler">검색</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<style scoped></style>
