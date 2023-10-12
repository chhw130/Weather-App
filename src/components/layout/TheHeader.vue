<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const goHomeHandler = () => {
  return router.push('/');
};
</script>
<template>
  <a-layout-header class="header">
    <div class="logo" @click="goHomeHandler">OJT-PROD</div>
  </a-layout-header>
</template>

<style scoped>
.logo {
  cursor: pointer;
}
</style>
