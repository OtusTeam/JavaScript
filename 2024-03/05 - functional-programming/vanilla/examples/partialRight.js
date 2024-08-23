const { partialRight } = require('../fp-functions.js')

const subtract = (a, b) => a - b

// Создание частично примененной функции с использованием partialRight
const subtractFrom10 = partialRight(subtract, 10)

const result = subtractFrom10(3)
console.log(result) // Выводит: 7 (10 - 3)
