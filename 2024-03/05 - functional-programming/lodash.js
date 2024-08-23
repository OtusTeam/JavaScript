const _ = require('lodash')

// Функция compose (аналог pipe в Lodash)
const compose = (...fns) => x => _.flowRight(...fns)(x)

// Функция flip
const flip = fn => (...args) => fn(...args.reverse())

// Функция curryRight
const curryRight = fn => _.curryRight(fn)

// Функция partialRight
const partialRight = _.partialRight

// Функция partial
const partial = _.partial

// Функция curry
const curry = _.curry
