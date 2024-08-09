<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  email: 'freepad@ya.ru',
  password: '1'
})
const canSendForm = function () {
  return !!form.value.email && !!form.value.password
}

const isLoading = false

const todos = [
  {
    id: 1,
    text: "Выучить vue"
  },
  {
    id: 2,
    text: "Применить vue на практике"
  },
]

function login(event) {
  console.log('Login event: ', event)
  debugger
}

const updField = (event) => {
  const name = event.target.name as string
  const value = event.target.value as string
  // @ts-expect-error
  form[name] = value
  console.log(form)
}

const count = ref(0) // .value
const inc = () => { count.value++ }
const dec = () => { count.value-- }
</script>

<template>
  <!-- <p>Кол-во: {{ count }}</p>
  <button @click="dec">-</button>
  <button @click="inc">+</button>

  {{ form }}
  <p v-if="isLoading" class="title">
    Данные загружаются...
  </p> -->
  <form @submit.prevent="login">
    <p>
      <input class="input w-full max-w-xs" v-model.trim="form.email" name="email" placeholder="Ввведите email" />
    </p>
    <p>
      <input class="input w-full max-w-xs" v-model="form.password" name="password" type="password"
        placeholder="Введите пароль" />
    </p>

    <button :disabled="!canSendForm()" class="btn"> Отправить </button>
  </form>

  <!-- <ul>
    <li v-for="(todo, index) in todos" :key="todo.id">
      {{ index + 1 }} - {{ todo.text }}
    </li>
  </ul> -->
</template>

<style scoped>
.title {
  color: red;
  font-size: 30px;
}

.disabled {
  background-color: green;
}
</style>
