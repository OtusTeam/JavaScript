const { partial } = require('../fp-functions.js')

const subtract = (a, b, c) => a - b - c

// Создание частично примененной функции с использованием partial
const subtract5And2 = partial(subtract, 5, 2)

const result = subtract5And2(8)
console.log(result) // Выводит: 1 (5 - 2 - 8)
