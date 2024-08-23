const timeoutObj = setTimeout(() => {
  console.log('timeout')
}, 1500)
console.log('timeoutObj', timeoutObj)

const immediateObj = setImmediate(() => {
  console.log('immediate')
})
console.log('immediateObj', immediateObj)

const intervalObj = setInterval(() => {
  console.log('interval')
}, 500)
console.log('intervalObj', intervalObj)

clearImmediate(immediateObj)
