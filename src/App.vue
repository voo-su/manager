<script setup lang="ts">
import { NConfigProvider, NMessageProvider } from 'naive-ui'
import { ruRU, dateRuRU } from 'naive-ui'

</script>

<template>
  <n-config-provider
    :locale="ruRU"
    :date-locale="dateRuRU"
  >
    <n-message-provider>
      <router-view />
    </n-message-provider>
  </n-config-provider>
</template>

<style scoped>

</style>
