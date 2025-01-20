<script setup lang="ts">
import { NPageHeader, NButton } from 'naive-ui'

// const onRefresh = () => {
//
// }
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <header class="bg-white shadow">
      <NPageHeader
        title="Manager"
        back-text="Назад"
        :back="true"
        class="max-w-7xl mx-auto p-4"
      >
        <template #extra>
<!--          <NButton-->
<!--            type="primary"-->
<!--            @click="onRefresh"-->
<!--          >Обновить</NButton>-->
        </template>
      </NPageHeader>
    </header>
    <main class="flex-grow bg-gray-50 p-4">
      <div class="max-w-7xl mx-auto">
        <slot />
      </div>
    </main>
  </div>
</template>

<style  scoped></style>
