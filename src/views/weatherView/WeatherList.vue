<script setup lang="ts">
import { ref } from 'vue';
import WeatherTable from '@/components/table/WeatherTable.vue';
import WeatherForm from '@/components/form/WeatherForm.vue';

const fetchLoading = ref<boolean>(false);
</script>
<template>
  <div style="background: #ececec; padding: 30px">
    <WeatherForm />
  </div>
  <div style="background: #ececec; padding: 30px; margin-top: 30px">
    <div v-if="fetchLoading" class="spinner">
      <a-spin />
    </div>
    <WeatherTable v-else />
  </div>
</template>

<style scoped>
.spinner {
  text-align: center;
}
</style>
