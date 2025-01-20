<script setup lang="ts">
import { ref, defineProps, onMounted } from 'vue'
import type { IChart } from '@/types/base'
import { Chart, registerables } from 'chart.js'
import type { ChartItem } from 'chart.js'

const props = defineProps<{
  title: string
  labels: string[]
  data: IChart[]
}>()

const chartRef = ref<ChartItem>()
const chart = ref()

const init = () => {
  const ctx = chartRef.value instanceof HTMLCanvasElement ? chartRef.value.getContext('2d') : chartRef.value

  if (ctx){
    Chart.register(...registerables)
    chart.value = new Chart(ctx, {
      type: 'line',
      data: {
        labels: props.labels,
        datasets: props.data
      }
    })
  }
}

onMounted(() => {
  init()
})
</script>

<template>
  <section>
    <h2 class="text-2xl font-semibold text-gray-800 mb-4">{{ props.title }}</h2>
    <div class="bg-white p-6 rounded-lg shadow-md">
      <p class="text-center text-gray-600">
        <canvas
          ref="chartRef"
          width="400"
          height="100"
        />
      </p>
    </div>
  </section>
</template>

<style scoped></style>
