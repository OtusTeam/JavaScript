const { curryRight } = require('../fp-functions.js')

const subtract = (a, b) => a - b

// Создание каррированной функции с использованием curryRight
const curriedSubtract = curryRight(subtract)
const subtractFrom10 = curriedSubtract(10)

const result = subtractFrom10(3)
console.log(result) // Выводит: 7 (10 - 3)
