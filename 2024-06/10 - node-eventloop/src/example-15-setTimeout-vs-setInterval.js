import fs from 'node:fs'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)

setTimeout(() => console.log('timeout'))
setImmediate(() => console.log('immediate'))
fs.readFile('./example-14-readfile.js', () => console.log('fs'))

// while true; do node example-15-setTimeout-vs-setInterval.js; sleep 0.5; done >> example-15-setTimeout-vs-setInterval.log