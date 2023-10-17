<script setup lang="ts">
import { useRoute } from 'vue-router';
import TheHeader from './components/layout/TheHeader.vue';
import TheMenuBar from './components/layout/TheMenuBar.vue';

const route = useRoute();

/**get route path  */

const routes = { list: '목록', chart: '차트', detail: '상세 정보' };
</script>

<template>
  <a-layout class="main">
    <TheHeader />
    <a-layout class="main-section">
      <TheMenuBar />
      <a-layout class="main-content">
        <a-breadcrumb style="margin: 8px 0">
          <a-breadcrumb-item>지역별 날씨</a-breadcrumb-item>
          <a-breadcrumb-item v-if="routes[route.name]">{{
            routes[route.name]
          }}</a-breadcrumb-item>
        </a-breadcrumb>
        <a-layout-content>
          <RouterView />
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<style scoped>
.main {
  height: 100%;
}

.main-section {
  flex-direction: row;
  padding: 20px;
}

.main-content {
  padding: 30px;
}
.ant-layout-header {
  background-color: rgb(236, 236, 236);
}
</style>
