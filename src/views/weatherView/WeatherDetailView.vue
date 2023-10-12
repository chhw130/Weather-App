<script setup lang="ts">
import WeatherDetailTab from '@/components/tab/WeatherDetailTab.vue';
</script>
<template>
  <section class="detail-section">
    <div class="title-category">
      <strong>지역(지역번호)</strong>
      <p>서울</p>
    </div>
    <div class="title-category">
      <strong>날짜</strong>
      <p>2023</p>
    </div>
  </section>
  <section>
    <WeatherDetailTab />
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
