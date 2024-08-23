<template>
  <h2 class="text-2xl block">Пользователь: {{ user?.firstName }} {{ user?.lastName }}</h2>

  <div class="flex">
    <TransitionGroup name="swipe-to-left" class="menu bg-base-200 w-56 rounded-box" tag="ul">
      <li class="menu-title">Юзеры</li>
      <li v-for="user in users" :key="user.id" class="flex flex-row">
        <router-link :to="{ name: 'user', params: { id: user.id } }" class="flex-1">
          {{ user.id }} -- {{ user.firstName}} {{ user.lastName }}
        </router-link>

        <button class="btn btn-circle btn-xs" @click="removeUser(user)">
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
        </button>
      </li>
    </TransitionGroup>

    <div class="flex-1">
      <RouterView v-slot="{ Component, route }">
        <Transition name="slide-fade">
          <component :is="Component" :key="route.path" />
        </Transition>
      </RouterView>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { UserService } from '@/entities/User';
import type { User } from '@/shared/types/User'
import { useUserStore } from '@/shared/store/userStore'
import { storeToRefs } from 'pinia'

const users = ref<User[]>([])

const userStore = useUserStore()
const { user, token } = storeToRefs(userStore)
const { fetchUser } = useUserStore()

const removeUser = (_user: User) => {
  users.value = users.value.filter(user => user !== _user)
}

onMounted(async () => {
  const response = await UserService.getUsers()
  users.value = response.users

  if (!user.value && token.value) {
    await fetchUser()
  }
})
</script>
