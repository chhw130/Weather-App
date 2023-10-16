<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import MenuBar from './components/layout/MenuBar.vue';
import TheHeader from './components/layout/TheHeader.vue';

const router = useRouter();

const route = useRoute();
console.log(route.path);

console.log(route.name);
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
