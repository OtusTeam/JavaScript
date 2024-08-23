import fs from 'node:fs'
import crypto from 'node:crypto'

const start = Date.now()
// process.env.UV_THREADPOOL_SIZE = 1
// npx cross-env UV_THREADPOOL_SIZE=1 node .\example-18-crypto.js
// npx cross-env UV_THREADPOOL_SIZE=10 node .\example-18-crypto.js

setTimeout(() => console.log('timer 1 expired'), 0)
fs.readFile('example-18.file.txt', () => {
  console.log('I/O finished')
  console.log('---------------------------------')
  setTimeout(() => console.log('timer 2 expired'), 0)
  setTimeout(() => console.log('timer 3 expired'), 3000)
  setImmediate(() => console.log('setImmediate 1 is finished'))
  process.nextTick(() => console.log('process.nextTick()'))
  // crypto.pbkdf2('mypassword', 'salt', 100000, 1024, 'sha512', () => {
  //   console.log(Date.now() - start, 'password encrypted')
  // })

  for (let i = 0; i < 20; i++) {
    crypto.pbkdf2('mypassword', 'salt', 100000, 1024, 'sha512', () => {
      console.log(Date.now() - start, 'password encrypted')
    })
  }
})
console.log('this is a top-level code')
