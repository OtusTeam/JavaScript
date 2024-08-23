import EventEmitter from 'node:events'

const myEmitter = new EventEmitter()
myEmitter.on('event', (a, b) => {
  console.log('arrow', a, b, this)
  // prints a b undefined
})

myEmitter.on('event', function (a, b) {
  console.log('function', a, b, this)
  // prints a b EventEmitter {}
})

myEmitter.emit('event', 'a', 'b')
