setTimeout(() => {
  console.log('timeout')
}, 0)
setImmediate(() => {
  console.log('immediate')
})
console.log('---')


// while true; do node example-13-again-timer.js; sleep 0.5; done >> example-13-again-timer.js.log