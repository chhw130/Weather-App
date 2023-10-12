<template>
  <a-layout-sider>
    <a-menu
      v-model:selectedKeys="selectedKeys"
      v-model:openKeys="openKeys"
      mode="inline"
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

const selectedKeys = ref<string[]>([]);
const openKeys = ref<string[]>(['sub1']);
const router = useRouter();

/**menu control function */
const menuHandler = ({ key }: { key: string }) => {
  selectedKeys.value = [key];
  return router.push({ name: `${key}` });
};
</script>

<style scoped>
.ant-layout-sider {
  height: 100%;
  padding: 0px 10px;
  background-color: rgb(236, 236, 236);
}
</style>
