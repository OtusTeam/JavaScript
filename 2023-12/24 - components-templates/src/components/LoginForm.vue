<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import IconEmail from '@/components/icons/IconEmail.vue'
import IconPassword from '@/components/icons/IconPassword.vue'

const inputEmailRef = ref<HTMLInputElement>()

const form = ref({
  email: '',
  password: ''
})

const loading = ref(false)
const login = () => {
  console.log(form.value)
}

const isFormDisabled = computed(() => {
  return !form.value.email || !form.value.password || loading.value
})

watch(form, () => {
  if (form.value.email && form.value.password) {
    console.log('Форма заполнена!')
  }
})

onMounted(() => {
  inputEmailRef.value?.focus()
})
</script>

<template>
  <div class="h-screen overflow-hidden flex items-center justify-center">
    <div class="card w-96 bg-base-100 shadow-xl">
      <div class="card-body">
        <form @submit.prevent="login" class="grid gap-2">
          <label class="input input-bordered flex items-center gap-2">
            <IconEmail class="w-4 h-4 opacity-70" />
            <input
              ref="inputEmailRef"
              v-model="form.email"
              type="text"
              class="grow"
              placeholder="Email"
            />
          </label>
          <label class="input input-bordered flex items-center gap-2">
            <IconPassword class="w-4 h-4 opacity-70" />
            <input type="password" class="grow" v-model="form.password" placeholder="Password" />
          </label>

          <button :disabled="isFormDisabled" class="btn btn-primary">Отправить</button>
        </form>
      </div>
    </div>
  </div>
</template>
