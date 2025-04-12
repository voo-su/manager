<script setup lang="ts">
import { ElConfigProvider } from 'element-plus'
import ru from 'element-plus/dist/locale/ru.mjs'
</script>

<template>
  <el-config-provider :locale="ru">
    <router-view />
  </el-config-provider>
</template>

<style scoped>

</style>
