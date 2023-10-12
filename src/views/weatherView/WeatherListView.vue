<script setup lang="ts">
import { computed } from 'vue';
import WeatherTable from '@/components/table/WeatherTable.vue';
import WeatherForm from '@/components/form/WeatherForm.vue';
import { useLoadingStore } from '@/utils/store/LoadingStore';

const loadingStore = useLoadingStore();

const isLoading = computed(() => loadingStore.isLoading);
</script>
<template>
  <WeatherForm />
  <div style="background: #ececec; padding: 30px; margin-top: 30px">
    <div v-if="isLoading" class="spinner">
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
