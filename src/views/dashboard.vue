<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { DashboardService } from '@/services/dashboard-service'
import type { IDashboardStatistic } from '@/types/dashboard'
import type { IChart } from '@/types/base'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import DashboardStatistic from '@/components/DashboardStatistic.vue'
import BaseChart from '@/components/base/BaseChart.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const statistics = ref<IDashboardStatistic>()
const chart = ref<IChart>({
  labels: [],
  data: []
})

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

    chart.value = charts
  } catch (err) {
    console.error('Error:', err)
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
      :title="t('messageStats')"
      :data="chart"
    />
  </default-layout>
</template>

<style scoped></style>
