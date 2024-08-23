const { flip } = require('../fp-functions.js')

const subtract = (a, b) => a - b

// Использование flip для изменения порядка аргументов
const flippedSubtract = flip(subtract)
const result = flippedSubtract(5, 3)

console.log(result) // Выводит: -2 (3 - 5)
