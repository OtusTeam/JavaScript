const fs = require('fs')

setTimeout(() => {
  console.log('timeout out')
  process.nextTick(next)
})
setTimeout(() => {
  console.log('timeout out2')
  process.nextTick(next)
})
setImmediate(() => console.log('immediate out'))

fs.readFile('./events.js', (err, data) => {
  console.log('fs')
  process.nextTick(() => console.log('next in'))
  setTimeout(() => console.log('timeout in'))
  setImmediate(() => console.log('immediate in'))
})

const next = () => {
  console.log('next')
}

process.nextTick(next)