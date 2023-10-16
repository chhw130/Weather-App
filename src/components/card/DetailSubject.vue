<script setup lang="ts">
import { reactive } from 'vue';
import { LocationQuery, useRoute } from 'vue-router';

/**!! */
const route = useRoute();
console.log(route.name);

const queryData = reactive<LocationQuery>(route.query);
</script>
<template>
  <section class="detail-section">
    <div class="title-category">
      <strong>지역(지역번호)</strong>
      <p>{{ queryData.regionName }}({{ queryData.regionId }})</p>
    </div>
    <div class="title-category">
      <strong>날짜</strong>
      <p>{{ queryData.date }}</p>
    </div>
  </section>
</template>

<style scoped>
.detail-section {
  background-color: #ececec;
  padding: 30px;
  display: flex;
}
.title-category {
  width: 50%;
  font-size: 1.3rem;
  line-height: 2;
}
</style>
