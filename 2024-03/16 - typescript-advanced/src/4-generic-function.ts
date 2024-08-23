import { randomUUID, randomInt } from 'node:crypto'

// T, K
type Create<Model extends Object> = (model: Omit<Model, 'id'>) => Model

interface User {
  id: string
  login: string
}

const createUser: Create<User> = newUser => {
  return {
    ...newUser,
    id: randomUUID(),
  }
}

const user = createUser({ login: 'user' })
console.log('user', user)

const admin = createUser({ login: 'admin' })
console.log('admin', admin)

interface Course {
  id: number
  title: string
}
// const course = createUser({ title: 'JS Pro' })

const createCourse: Create<Course> = newCourse => {
  return {
    ...newCourse,
    id: randomInt(1000, 1000000),
  }
}
const course = createCourse({ title: 'JS Pro' })
console.log('course', course)
