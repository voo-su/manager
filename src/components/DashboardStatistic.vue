<script setup lang="ts">
import { defineProps } from 'vue'
import { NGrid, NGridItem, NStatistic } from 'naive-ui'
import type { IDashboardStatistic } from '@/types/dashboard'

const props = defineProps<{
  data: IDashboardStatistic
}>()
</script>

<template>
  <section class="mb-6">
    <h2 class="text-2xl font-semibold text-gray-800 mb-4">Статистика</h2>
    <n-grid :x-gap="12" :y-gap="9" :cols="2">
      <n-grid-item>
        <n-statistic
          label="Пользователей"
          :value="props.data?.users || 0"
        />
      </n-grid-item>
      <n-grid-item>
        <n-statistic
          label="Ботов"
          :value="props.data?.bots || 0"
        />
      </n-grid-item>
      <n-grid-item>
        <n-statistic
          label="Всего сообщений"
          :value="props.data?.totalMessages || 0"
        />
      </n-grid-item>
      <n-grid-item>
        <n-statistic
          label="Групповые чаты"
          :value="props.data?.groupChats || 0"
        />
      </n-grid-item>
      <n-grid-item>
        <n-statistic
          label="Сообщения в личных чатах"
          :value="props.data?.privateMessages || 0"
        />
      </n-grid-item>
      <n-grid-item>
        <n-statistic
          label="Сообщения в групповых чатах"
          :value="props.data?.groupMessages || 0"
        />
      </n-grid-item>
    </n-grid>
  </section>
</template>

<style lang="scss" scoped>
.n-statistic {
  @apply bg-white rounded-lg p-4 shadow transition-transform duration-200;

  .n-statistic-label {
    @apply text-gray-600 font-medium;
  }

  .n-statistic-value {
    @apply text-gray-800 font-bold text-2xl;
  }
}
</style>
