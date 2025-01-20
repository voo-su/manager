<script setup lang="ts">
import { reactive } from 'vue'

const model = reactive({
  username: '',
  password: ''
})
</script>

<template>
  <n-input
    type="text"
    v-model:value="model.username"
    placeholder="Имя пользователя"
  />
  <n-input
    type="password"
    v-model:value="model.password"
    placeholder="Пароль"
    show-password-on="click"
  />
  <n-button>Войти</n-button>
</template>

<style scoped>

</style>
