<script setup lang="ts">
import { useRouter } from 'vue-router';
import MenuBar from './components/layout/MenuBar.vue';
import TheHeader from './components/layout/TheHeader.vue';
import { ref } from 'vue';

const router = useRouter();

interface Route {
  path: string;
  breadcrumbName: string;
  children?: Array<{
    path: string;
    breadcrumbName: string;
  }>;
}

const routes = ref<Route[]>([
  {
    path: 'index',
    breadcrumbName: 'home',
  },
  {
    path: '/list',
    breadcrumbName: '지역별 날씨',
    children: [
      {
        path: '/list',
        breadcrumbName: '목록',
      },
      {
        path: '/chart',
        breadcrumbName: '차트',
      },
    ],
  },
]);
</script>

<template>
  <a-layout class="main">
    <TheHeader />
    <a-layout class="main-section">
      <MenuBar />
      <a-layout style="padding: 30px">
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
}
.ant-layout-header {
  background-color: rgb(236, 236, 236);
}
</style>
