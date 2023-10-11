<script setup lang="ts">
import { useWeatherStore } from '@/utils/store/WeatherStore';

const weatherStore = useWeatherStore();

console.log(weatherStore);
</script>
<template>
  <a-table />
</template>

<style scoped></style>
