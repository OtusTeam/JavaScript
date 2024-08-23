const { compose } = require('../fp-functions.js')

const addTwo = x => x + 2
const square = x => x * x
const double = x => x * 2

// Композиция функций с использованием compose
const result = compose(
  double,
  square,
  addTwo
)(3)

console.log(result) // Выводит: 50 (addTwo(3) -> square(5) -> double(25))
