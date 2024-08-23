import fs from 'node:fs'

fs.readFile('./example-14-readfile.js', () => {
  console.log('fs')
  setTimeout(() => console.log('timeout'))
  setImmediate(() => console.log('immediate'))
})
