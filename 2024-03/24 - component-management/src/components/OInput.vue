<script lang="ts" setup>
import { defineProps } from 'vue'

interface Props {
  placeholder?: string;
  label: string;
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: 'Введите',
})
const value = defineModel<string>()
</script>

<template>
  <label class="input input-bordered flex items-center gap-2">
    {{ props.label }}
    <input v-model="value" type="text" class="grow" :placeholder="props.placeholder" />
  </label>
</template>

<style scoped></style>