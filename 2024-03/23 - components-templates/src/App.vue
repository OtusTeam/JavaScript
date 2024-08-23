<script setup lang="ts">
import { ref, reactive, computed, onMounted, onBeforeMount, onBeforeUnmount, onUnmounted, watch } from 'vue'

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
const state = reactive({ id: 10, name: 'Александр' })

state.id = 10

const inc = () => {
  count.value++
}

const dec = () => {
  count.value--
}

const startDate = ref('01.01.2023')
const endDate = ref('02.12.2024')

const setDate = (e: any) => {
  const value: string = e!.target!.value
  const dates = value.split('-').map(v => v.trim()).filter(v => {
    return !!v
  })
  if (dates.length === 2) {
    startDate.value = dates[0]
    endDate.value = dates[1]
  }
}

// const date = computed(() => {
//   return `${startDate.value}-${endDate.value}`
// })

const date = computed({
  get () {
    return `${startDate.value}-${endDate.value}`
  },
  set (value: string) {
    const dates = value.split('-').map(v => v.trim()).filter(v => {
      return !!v
    })
    if (dates.length === 2) {
      startDate.value = dates[0]
      endDate.value = dates[1]
    }
  }
})

const fetchUser = () => {
  console.log('fetch user...')
}
// '01.01.2023'
watch(startDate, (newValue, oldValue) => {
  console.log(newValue, oldValue)
  if (newValue === '23.02.1993') {
    console.log('win!')
  }
  fetchUser()
}, {
  immediate: true,
  deep: true
})

// startDate.value = '23.02.1993'

// const user = ref({ id: 1 })
//
// watch(user, (newValue, oldValue) => {
//   if (newValue.id === newValue.id) { // isEqual // isDeepEqual
//     console.log(newValue, oldValue)
//   }
// })
//
// const fetchUser = () => {
//   // ...
//   user.value = { id: 1}
// }
</script>

<template>
  <input type="text"  placeholder="Дата старта" v-model="startDate" class="input input-bordered w-full max-w-xs">
  <input type="text" placeholder="Дата окончания" v-model="endDate"  class="input input-bordered w-full max-w-xs">
  <input id="period" ref="inputEl" type="text" placeholder="Период" v-model="date" class="input input-bordered w-full max-w-xs">

  <form @submit.stop.prevent="send">
    <label for="login">Login</label>
    <!-- :value="login" @change="e => login = e.target.value.trim()"  -->
    <input v-model.trim.number="login" type="text" id="login" placeholder="Введите логи">
    <button class="btn">Отправить</button>
  </form>
</template>

<style scoped>
</style>
