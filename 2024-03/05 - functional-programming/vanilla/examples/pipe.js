const { pipe } = require('../fp-functions.js')

const addTwo = x => x + 2
const square = x => x * x
const double = x => x * 2

// Композиция функций с использованием pipe
const result = pipe(
  addTwo,
  square,
  double
)(3)

console.log(result) // Выводит: 50 (addTwo(3) -> square(5) -> double(25))
