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
          <a-breadcrumb-item>List</a-breadcrumb-item>
          <a-breadcrumb-item>App</a-breadcrumb-item>
        </a-breadcrumb>
        <a-layout-content>
          <RouterView />
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">
import MenuBar from './MenuBar.vue'
import TheHeader from './TheHeader.vue'
</script>

<style scoped>
section {
  height: 100%;
  background-color: white;
}

.ant-layout-header {
  background-color: grey;
}
</style>
