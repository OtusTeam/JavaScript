<template>
  <div class="container mr-auto p-4">
    <div class="card w-full bg-base-100 shadow-xl">
      <div v-if="user" class="card-body">
        <div class="flex items-center space-x-4">
          <Transition name="rotate" appear>
            <img :src="user.image" alt="User Image" class="rounded-full w-24 h-24">
          </Transition>
          <div>
            <h2 class="card-title text-2xl">{{ user.firstName }} {{ user.lastName }}</h2>
            <p class="text-gray-600">@{{ user.username }}</p>
            <p class="text-gray-600">{{ user.email }}</p>
            <p class="text-gray-600">{{ user.phone }}</p>
          </div>
        </div>
        <div class="divider"></div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 class="text-lg font-bold">Personal Information</h3>
            <ul class="list-disc pl-5">
              <li><strong>Age:</strong> {{ user.age }}</li>
              <li><strong>Gender:</strong> {{ user.gender }}</li>
              <li><strong>Birth Date:</strong> {{ user.birthDate }}</li>
              <li><strong>Blood Group:</strong> {{ user.bloodGroup }}</li>
              <li><strong>Eye Color:</strong> {{ user.eyeColor }}</li>
              <li><strong>Hair:</strong> {{ user.hair.color }} ({{ user.hair.type }})</li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg font-bold">Address</h3>
            <p>{{ user.address.address }}</p>
            <p>{{ user.address.city }}, {{ user.address.state }} ({{ user.address.stateCode }})</p>
            <p>{{ user.address.postalCode }}</p>
            <p>{{ user.address.country }}</p>
          </div>
        </div>
        <div class="divider"></div>
        <div>
          <h3 class="text-lg font-bold">Company</h3>
          <p><strong>{{ user.company.name }}</strong> - {{ user.company.department }}</p>
          <p>{{ user.company.title }}</p>
          <p>{{ user.company.address.address }}</p>
          <p>{{ user.company.address.city }}, {{ user.company.address.state }} ({{ user.company.address.stateCode }})</p>
          <p>{{ user.company.address.postalCode }}</p>
        </div>
        <div class="divider"></div>
        <div>
          <h3 class="text-lg font-bold">Bank</h3>
          <p><strong>Card Type:</strong> {{ user.bank.cardType }}</p>
          <p><strong>Card Number:</strong> {{ user.bank.cardNumber }}</p>
          <p><strong>Card Expire:</strong> {{ user.bank.cardExpire }}</p>
          <p><strong>Currency:</strong> {{ user.bank.currency }}</p>
          <p><strong>IBAN:</strong> {{ user.bank.iban }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, onBeforeUnmount, ref, watch } from 'vue'
import { UserService } from '@/entities/User'
import type { User } from '@/shared/types/User'
import { useRoute } from 'vue-router'

const user = ref<User>()

const route = useRoute()

const userId = computed(() => parseInt(route.params.id as string, 10))

const abortController = new AbortController()
const fetchUser = async () => {
  user.value = await UserService.getUser(userId.value)
}

watch(() => route.params.id, fetchUser, {
  immediate: true,
})

onBeforeUnmount(() => {
  abortController.abort()
})
</script>
