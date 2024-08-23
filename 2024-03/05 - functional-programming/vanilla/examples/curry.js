const { curry } = require('../fp-functions.js')

const subtract = (a, b, c) => a - b - c

// Создание каррированной функции с использованием curry
const curriedSubtract = curry(subtract)

const result = curriedSubtract(5)(2)(8)
console.log(result) // Выводит: -5 (5 - 2 - 8)

const middleware = store => dispatch => action => {

}

// const m1 = curry(middleware, store)
// const m2 = curry(m1, dispatch)
// middleware(action)
