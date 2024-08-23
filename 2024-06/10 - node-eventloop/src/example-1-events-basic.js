import EventEmitter from 'node:events'

class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter()
myEmitter.on('event', () => {
  console.log('an event occurred!')
})
myEmitter.emit('event')
console.log('after')
