<template>
  <label class="input input-bordered flex items-center gap-2">
    <slot name="before"></slot>
    <input
      :type="type"
      class="grow"
      v-model="value"
      :placeholder="placeholder"
    />
    <slot name="after"></slot>
  </label>
</template>

<script setup lang="ts">
import { computed, useModel } from 'vue'

defineOptions({
  name: 'AppField'
})

interface Props {
  modelValue?: string;
  type?: string;
  placeholder?: string;
}
const props = withDefaults(defineProps<Props>(), {
  type: 'text'
})

// const emit = defineEmits<{
//   (e: 'update:modelValue', newValue: string): void
// }>()

const value = useModel(props, 'modelValue')
// const value = computed({
//   get () {
//     return props.modelValue
//   },
//   set (value) {
//     emit('update:modelValue', value)
//   }
// })
</script>
