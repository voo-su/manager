<script setup lang="ts">
import { ElRow, ElCol, ElStatistic } from 'element-plus'
import type { IDashboardStatistic } from '@/types/dashboard'
import { useI18n } from 'vue-i18n'

const props = defineProps<{
  data: IDashboardStatistic
}>()

const { t } = useI18n()
</script>

<template>
  <section class="mb-6">
    <h2 class="text-2xl font-semibold text-gray-800 mb-4">{{ t('statistics') }}</h2>
    <el-row>
      <el-col>
        <el-statistic
          :title="t('users')"
          :value="props.data?.users || 0"
        />
      </el-col>
      <el-col>
        <el-statistic
          :title="t('bots')"
          :value="props.data?.bots || 0"
        />
      </el-col>
      <el-col>
        <el-statistic
          :title="t('totalMessages')"
          :value="props.data?.totalMessages || 0"
        />
      </el-col>
      <el-col>
        <el-statistic
          :title="t('groupChats')"
          :value="props.data?.groupChats || 0"
        />
      </el-col>
      <el-col>
        <el-statistic
          :title="t('personalMessages')"
          :value="props.data?.privateMessages || 0"
        />
      </el-col>
      <el-col>
        <el-statistic
          :title="t('groupMessages')"
          :value="props.data?.groupMessages || 0"
        />
      </el-col>
    </el-row>
  </section>
</template>

<style lang="scss" scoped>
.el-statistic {
  @apply bg-white rounded-lg p-4 shadow transition-transform duration-200;

  .el-statistic__content {
    @apply text-gray-800 font-bold text-2xl;
  }

  .el-statistic__content {
    @apply text-gray-800 font-bold text-2xl;
  }
}
</style>
