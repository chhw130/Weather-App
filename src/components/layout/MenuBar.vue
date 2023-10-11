<template>
  <a-layout-sider width="200" style="background: grey">
    <a-menu
      v-model:selectedKeys="selectedKeys"
      mode="inline"
      :style="{ height: '100%', borderRight: 0 }"
      @click="menuHandler"
    >
      <a-sub-menu key="sub1">
        <template #title>
          <span> 지역별 날씨 </span>
        </template>
        <a-menu-item key="list">목록</a-menu-item>
        <a-menu-item key="chart">차트</a-menu-item>
      </a-sub-menu>
    </a-menu>
  </a-layout-sider>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const selectedKeys = ref<string[]>(['1']);
const router = useRouter();

const menuHandler = ({ key }: { key: string }) => {
  console.log(key);
  router.push({ name: `${key}` });
};
</script>

<style scoped>
.ant-layout-sider {
  height: 100%;
}
</style>
