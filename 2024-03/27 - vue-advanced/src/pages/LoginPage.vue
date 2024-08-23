<script lang="ts" setup>
import LoginForm from '@/features/LoginForm/ui/LoginForm.vue'
import { onErrorCaptured } from 'vue'

onErrorCaptured((...rest) => {
  console.log('LoginPage.vue')
  return true
})
</script>

<template>
  <LoginForm />
</template>
