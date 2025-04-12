<script setup lang="ts">
import { ElPageHeader } from 'element-plus'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// const onRefresh = () => {
//
// }
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <header class="bg-white shadow">
      <el-page-header
        title="Manager"
        icon=""
        class="max-w-7xl mx-auto p-4"
      >
        <template #extra>
<!--          <n-button-->
<!--            type="primary"-->
<!--            @click="onRefresh"-->
<!--          >Обновить</n-button>-->
        </template>
      </el-page-header>
    </header>
    <main class="flex-grow bg-gray-50 p-4">
      <div class="max-w-7xl mx-auto">
        <slot />
      </div>
    </main>
  </div>
</template>

<style scoped></style>
