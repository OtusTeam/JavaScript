import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { User } from '@/shared/types/User'

export const useUserStore = defineStore('userStore', () => {
  const user = ref<Partial<User> & { id: number } | null>(null)
  const token = ref<string>()

  return {
    user,
    token
  }
})
