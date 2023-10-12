<script setup lang="ts">
import { useRoute } from 'vue-router';
import MenuBar from './components/layout/MenuBar.vue';
import TheHeader from './components/layout/TheHeader.vue';

const route = useRoute();
</script>

<template>
  <a-layout class="main">
    <TheHeader />
    <a-layout>
      <MenuBar />
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
.main {
  height: 100%;
}
.ant-layout-header {
  background-color: rgb(236, 236, 236);
}
</style>
