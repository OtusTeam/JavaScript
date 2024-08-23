<template>
  <div class="grid grid-cols-2">
    <ul class="menu bg-base-200 w-56 rounded-box">
      <li class="menu-title">Юзеры</li>
      <li v-for="user in users" :key="user.id">
        <router-link :to="{ name: 'user', params: { id: user.id } }">
          {{ user.id }} -- {{ user.firstName}} {{ user.lastName }}
        </router-link>
      </li>
    </ul>

    <div>
      <RouterView />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { UserService } from '@/entities/User';
import type { User } from '@/shared/types/User'

const users = ref<User[]>([])

onMounted(async () => {
  const response = await UserService.getUsers()
  users.value = response.users
})
</script>
