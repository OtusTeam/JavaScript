import fs from 'node:fs'

setTimeout(() => console.log('timeout out'))
setImmediate(() => console.log('immediate out'))
fs.readFile('./example-14-readfile.js', (err, data) => {
  console.log('fs')
  process.nextTick(() => console.log('next in'))
  setTimeout(() => console.log('timeout in'))
  setImmediate(() => console.log('immediate in'))
})
let i = 0;
const next = () => {
  console.log('next', i++)
  // process.nextTick(next)
}
process.nextTick(next)
