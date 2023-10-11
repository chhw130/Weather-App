<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()

const title = route.path

console.log(route.path)
</script>
<template>
  <div>
    <div>{{ title }}</div>
    <h1>123</h1>
  </div>
</template>

<style scoped></style>
