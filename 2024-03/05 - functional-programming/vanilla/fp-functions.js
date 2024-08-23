function pipe (...fns) {
  return (x) => fns.reduce((v, f) => f(v), x)
}

function compose (...fns) {
  return (x) => fns.reduceRight((v, f) => f(v), x)
}

function flip (fn) {
  return (...args) => fn(...args.reverse())
}

const curryRight = compose(curry, flip)
const partitialRight = compose(partial, flip)

function partial (fn, ...apply) {
  return (...args) => fn(...apply, ...args)
}

function curry (fn) {
  return (...args) => args.length >= fn.length
    ? fn(...args)
    : curry(fn.bind(null, ...args))
}

exports.pipe = pipe
exports.compose = compose
exports.flip = flip
exports.curryRight = curryRight
exports.partitialRight = partitialRight
exports.partial = partial
exports.curry = curry
