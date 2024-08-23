<script setup lang="ts">
import { Codemirror } from 'vue-codemirror'
import { ref, reactive, computed, onMounted, onBeforeMount, onBeforeUnmount, onUnmounted, watch } from 'vue'
import OButton from '@/components/OButton.vue'
import OInput from '@/components/OInput.vue'

const form = ref({
  login: 'emilys',
  password: 'emilyspass'
})

const loading = ref(false)
const disabled = computed(() => loading.value || !form.value.login || !form.value.password)
const login = async () => {
  try {
    loading.value = true
    const response = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: form.value.login,
        password: form.value.password
      })
    })

    const data = await response.json()

    console.log(data)
  } catch (error: unknown) {
    alert((error as Error).message)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <form @submit.stop.prevent="login" class="grid gap-4">
    <input v-model="form.login" />
    <OInput v-model="form.login" class="field" label="Login" placeholder="Введите логин" />
    <OInput v-model="form.password" label="Password" placeholder="Введите пароль" />
    <OButton class="btn-primary" :disabled="disabled">
      <template #before>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12" />
        </svg>
      </template>

      Отправить
    </OButton>
  </form>

  <pre>{{ form }}</pre>

  <Codemirror />
</template>

<style scoped>
</style>
