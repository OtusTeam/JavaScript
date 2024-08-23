import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { User } from '@/shared/types/User'

export const useUserStore = defineStore('userStore', () => {
  const user = ref<Partial<User> & { id: number } | null>(null)
  const _token = ref(localStorage.getItem('token') ?? '');
  const token = computed<string>({
    get () {
      return _token.value
    },
    set (value) {
      localStorage.setItem('token', value)
      _token.value = value
    }
  })

  const fetchUser = async () => {
    const response = await fetch('https://dummyjson.com/user/me', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token.value}`,
      },
    })

    const data: User = await response.json()

    user.value = data;
  }

  return {
    user,
    token,
    fetchUser
  }
})
