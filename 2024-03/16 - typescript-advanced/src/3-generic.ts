// https://www.slingacademy.com/article/typescript-arrow-functions-with-generic-types-a-practical-guide/
function identity<T>(arg: T): T {
  return arg
}

// запятая после T нужна, чтобы TS тут понимал, что <T> это тип, а не тег в JSX
// const identity = <T>(arg: T, ) => arg

let hello = 'hello!'
const isString = identity(hello)
const isUser = identity({ 
  id: 1, 
  username: 'otus' })

// @ts-expect-error
let numberOutput = identity<number>('Not a Number!')
let stringOutput = identity<string>('Строка')
console.log(numberOutput)
console.log(stringOutput)
