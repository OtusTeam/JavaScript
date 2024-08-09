<script setup lang="ts">
import { ref, computed } from 'vue'
import IconEmail from '@/components/icons/IconEmail.vue'
import IconPassword from '@/components/icons/IconPassword.vue'
import AppField from '@/shared/ui/Field.vue'
import * as LoginService from '../api/LoginService'
import { useUserStore } from '@/shared/store/userStore'
import { useRouter } from 'vue-router'

const form = ref({
  username: 'kminchelle',
  password: '0lelplR'
})

const loading = ref(false)

const userStore = useUserStore()
const router = useRouter()
const login = async () => {
  try {
    loading.value = true
    const data = await LoginService.login(form.value)
    const { token, ...user } = data
    userStore.user = user
    userStore.token = token
    await router.push({
      name: 'users',
    })
  } catch (error) {
    alert('Ошибка :(')
  } finally {
    loading.value = false
  }
}

const isFormDisabled = computed(() => {
  return !form.value.username || !form.value.password || loading.value
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

          <button :disabled="isFormDisabled" class="btn btn-primary">Отправить</button>
        </form>
      </div>
    </div>
  </div>
</template>
