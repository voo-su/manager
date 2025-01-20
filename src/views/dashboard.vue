<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { DashboardService } from '@/services/dashboard-service'
import type { IDashboardStatistic, IChartData } from '@/types/dashboard'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import DashboardStatistic from '@/components/DashboardStatistic.vue'
import BaseChart from '@/components/base/BaseChart.vue'

const statistics = ref<IDashboardStatistic>()
const charLabels = ref<string[]>(['1', '2', '3', '4'])
const chartData = ref<IChartData[]>([
  {
    type: 'line',
    label: 'Сообщения в личных чатах',
    data: [10, 20, 30, 40]
  }, {
    type: 'line',
    label: 'Сообщения в групповых чатах',
    data: [50, 50, 50, 50],
  }
])

const load = async () => {
  try {
    const {
      users,
      bots,
      totalMessages,
      groupChats,
      groupMessages,
      privateMessages,
      charts
    } = await DashboardService.dashboard()

    statistics.value = {
      users: users,
      bots: bots,
      totalMessages: totalMessages,
      groupChats: groupChats,
      groupMessages: groupMessages,
      privateMessages: privateMessages,
    }

    charLabels.value = charts.labels
    chartData.value = charts.data
  } catch (error) {
    console.error('Ошибка:', error)
  }
}

onMounted(() => {
  load()
})
</script>

<template>
  <default-layout>
    <dashboard-statistic :data="statistics"/>
    <base-chart
      title="Статистика сообщений"
      :labels="charLabels"
      :data="chartData"
    />
  </default-layout>
</template>

<style scoped></style>
