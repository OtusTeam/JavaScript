<script setup lang="ts">
import { ref, computed, onErrorCaptured } from 'vue'
import IconEmail from '@/components/icons/IconEmail.vue'
import IconPassword from '@/components/icons/IconPassword.vue'
import AppField from '@/shared/ui/Field.vue'
import * as LoginService from '../api/LoginService'
import { useUserStore } from '@/shared/store/userStore'
import { useRoute, useRouter } from 'vue-router'
import AlertError from '@/shared/ui/Alert/AlertError.vue'
import AlertInfo from '@/shared/ui/Alert/AlertInfo.vue'

const form = ref({
  username: 'emilys',
  password: 'emilyspass'
})

const loading = ref(false)
const errorMessage = ref('')

const message = computed(() => {
  return errorMessage.value ? errorMessage.value : 'Ошибки нет'
})

const alertComponent = computed(() => {
  return errorMessage.value ? AlertError : AlertInfo
})

const userStore = useUserStore()
const router = useRouter()
// const route = useRoute()
const login = async () => {
  try {
    loading.value = true
    errorMessage.value = ''
    const data = await LoginService.login(form.value)
    const { token, ...user } = data
    userStore.user = user
    userStore.token = token
    await router.push({
      name: 'users',
    })
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : 'Неизвестная ошибка'
    throw error
  } finally {
    loading.value = false
  }
}

const isFormDisabled = computed(() => {
  return !form.value.username || !form.value.password || loading.value
})

onErrorCaptured((...rest) => {
  console.log('LoginForm.vue')
  return false
})
</script>

<template>
  <div class="h-screen overflow-hidden flex items-center justify-center">
    <div class="card w-96 bg-base-100 shadow-xl">
      <div class="card-body">
        <form @submit.prevent="login" class="grid gap-2">
          <AppField v-model="form.username" placeholder="Email" >
            <template #before>
              <IconEmail class="w-4 h-4 opacity-70" />
            </template>
          </AppField>
          <AppField type="password"  v-model="form.password" placeholder="Password" >
            <template #before>
              <IconPassword  class="w-4 h-4 opacity-70" />
            </template>
          </AppField>

          <Transition name="fade">
            <AlertError :key="message">
              {{ message }}
            </AlertError>
          </Transition>

          <button :disabled="isFormDisabled" class="btn btn-primary">
            {{ $translate('Send') }}
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
