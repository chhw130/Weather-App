<script setup lang="ts">
import { useRoute } from 'vue-router';
import MenuBar from './components/layout/MenuBar.vue';
import TheHeader from './components/layout/TheHeader.vue';

const route = useRoute();
</script>

<template>
  <a-layout>
    <a-layout-header>
      <TheHeader />
    </a-layout-header>
    <a-layout>
      <a-layout-sider>
        <MenuBar />
      </a-layout-sider>
      <a-layout style="padding: 30px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>지역별 날씨</a-breadcrumb-item>
          <a-breadcrumb-item>{{ route.name }}</a-breadcrumb-item>
        </a-breadcrumb>
        <a-layout-content>
          <RouterView />
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<style scoped>
section {
  height: 100%;
  background-color: white;
}

.ant-layout-header {
  background-color: rgb(236, 236, 236);
}
</style>
