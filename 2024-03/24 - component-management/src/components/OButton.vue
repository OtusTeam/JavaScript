<script lang="ts" setup>
import { defineProps, ref } from 'vue'

interface Props {
  disabled?: boolean;
}

defineProps<Props>()
</script>

<template>
  <button class="btn" :disabled="disabled">
    <slot name="before" />

    <slot />

    <slot name="after" />
  </button>
</template>

<style scoped></style>