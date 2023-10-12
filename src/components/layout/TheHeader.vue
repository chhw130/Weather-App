<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const goHomeHandler = () => {
  return router.push('/');
};
</script>
<template>
  <a-layout-header class="header">
    <h1 class="logo" @click="goHomeHandler">OJT-PROD</h1>
  </a-layout-header>
</template>

<style scoped>
.header {
  background-color: aliceblue;
}

.logo {
  cursor: pointer;
}
</style>
