<template>
  <pre>{{ user }}</pre>
</template>

<script lang="ts" setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { UserService } from '@/entities/User';
import type { User } from '@/shared/types/User'
import { useRoute } from 'vue-router'

const user = ref<User>()

const route = useRoute()

const userId = computed(() => parseInt(route.params.id as string, 10))

const abortControler = new AbortController()
const fetchUser = async () => {
  const response = await UserService.getUser(userId.value)
  user.value = response
}

watch(() => route.params.id, fetchUser, {
  immediate: true,
})
// onMounted(fetchUser)

onBeforeUnmount(() => {
  abortControler.abort()
})
</script>
