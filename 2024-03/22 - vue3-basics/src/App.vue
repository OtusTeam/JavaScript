<script setup lang="ts">
import { ref } from 'vue'

import HelloWorld from './components/HelloWorld.vue'

const courseTitle = 'OTUS JS Pro'
const lessons = ['Vue basic', 'Vue components', 'Vue router']

const lessonFiltered = lessons.filter(l => l !== 'Vue basic')

const filterLesson = (lessons: string[]) => {
  return lessons.filter(l => l !== 'Vue basic')
}

const lessonList = lessons.map(l => `<li>${l}</li>`)

const tagId = 'test'

const openCourse = (event) => {
  login.value = 'JS Pro';
}

const loading = false

const classes =  ['title', 'readonly', 'disabled', 'test']

const openLesson = (lesson: string, event: any) => {
  login.value = lesson;
}


const login = ref('freepad')

login.value = 'Оксана'

const send = (e) => {
  e.preventDefault()
  e.stopPropagination()
}

const count = ref(0)

const inc = () => {
  count.value++
}

const dec = () => {
  count.value--
}
</script>

<template>
  <h1 :class="classes" :id="tagId" @click="openCourse">{{ courseTitle }}</h1>
  <span v-show="loading">Loading...</span>

  <div>
    <button @click="dec">-</button>
    {{ count }}
    <button @click="inc">+</button>
  </div>

  <h2>Login: {{ typeof login }}</h2>

  <pre>{{ login }}</pre>

  <form @submit.stop.prevent="send">
    <label for="login">Login</label>
    <!-- :value="login" @change="e => login = e.target.value.trim()"  -->
    <input v-model.trim.number="login" type="text" id="login" placeholder="Введите логи">
    <button>Отправить</button>
  </form>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
