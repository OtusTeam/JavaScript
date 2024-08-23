<template>
  <label class="input input-bordered flex items-center gap-2">
    <slot name="before" :id="id"></slot>
    <input
      :type="type"
      class="grow"
      v-model="value"
      :placeholder="placeholder"
    />
    <slot name="after" :id="id" :data="{ id: 1, name: 'Оксана' }"></slot>
  </label>
</template>

<script setup lang="ts">
import { useModel } from 'vue'

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

const id = Math.ceil(Math.random() * 1000)

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
