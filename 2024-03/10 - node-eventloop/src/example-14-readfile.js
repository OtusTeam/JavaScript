import fs from 'node:fs/promises'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
fs.readFile(__filename, () => {
  setTimeout(() => { console.log('timeout') }, 0)
  setImmediate(() => { console.log('immediate') })
})


// while true; do node example-14-readfile.js; sleep 0.5; done >> example-14-readfile.log