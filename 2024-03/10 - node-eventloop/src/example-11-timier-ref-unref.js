// const timerObj = setTimeout(() => {
//   console.log('will i run?') // 1
// })

// clearTimeout(timerObj)

// timerObj.unref()

// setImmediate(() => {
//   console.log('timerObj.ref()')
//   timerObj.ref() 
// })

const timerObj = setTimeout(() => {
  console.log('will i run?')
}, 100)

timerObj.unref()

setImmediate(() => {
  console.log('setImmediate')
  timerObj.ref()
})

setTimeout(() => {
  console.log('unref')
  timerObj.unref()
}, 50)

setTimeout(() => {
  console.log('unref')
  timerObj.ref()
}, 75)
