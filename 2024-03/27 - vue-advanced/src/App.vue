<script lang="ts" setup>
import { onErrorCaptured } from 'vue'

onErrorCaptured((...rest) => {
  console.log('App.vue')
  return true
})
</script>

<template>
  <RouterView />
</template>
