<template>
  <a-layout-sider width="200" style="background: grey">
    <a-menu v-model:openKeys="openKeys" mode="inline" :style="{ height: '100%', borderRight: 0 }">
      <a-sub-menu key="sub1">
        <template #title>
          <span>
            <user-outlined />
            지역별 날씨
          </span>
        </template>
        <a-menu-item key="1">목록</a-menu-item>
        <a-menu-item key="2">차트</a-menu-item>
      </a-sub-menu>
    </a-menu>
  </a-layout-sider>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { MenuProps } from 'ant-design-vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const openKeys = ref<string[]>([])

const handleClick: MenuProps['onClick'] = (e) => {
  return router.push(`${e.key}`)
}
</script>

<style scoped>
.ant-layout-sider {
  height: 100%;
}
</style>
