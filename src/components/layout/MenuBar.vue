<script setup lang="ts">
import { useWeatherStore } from '@/utils/store/WeatherStore';
import { onBeforeMount, ref } from 'vue';
import { RouteRecordName, useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

console.log(route.name);

const selectedKeys = ref<RouteRecordName[]>([route.name]);
const openKeys = ref<string[]>(['sub1']);
const weatherStore = useWeatherStore();

/**get route path  */
onBeforeMount(async () => {
  await router.isReady();
  selectedKeys.value = [route.name];
});

/**menu control function */
const menuHandler = ({ key }: { key: string }) => {
  weatherStore.initWeather();
  return router.push({ name: `${key}` });
};
</script>

<template>
  <a-menu
    class="menu-bar"
    v-model:selectedKeys="selectedKeys"
    v-model:openKeys="openKeys"
    mode="inline"
    @click="menuHandler"
  >
    <a-sub-menu key="sub1">
      <template #title>
        <span> 지역별 날씨 </span>
      </template>
      <a-menu-item key="list">목록</a-menu-item>
      <a-menu-item key="chart">차트</a-menu-item>
    </a-sub-menu>
  </a-menu>
</template>

<style scoped>
.menu-bar {
  width: 230px;
}
.ant-layout-sider {
  height: 100%;
  padding: 0px 10px;
  background-color: rgb(236, 236, 236);
}
</style>
