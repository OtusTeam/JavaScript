console.log('start')
process.nextTick(() => {
  console.log('nextTick')
})
console.log('scheduled')
// start
// scheduled
// nextTick
