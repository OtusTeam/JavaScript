import EventEmitter from 'node:events'

class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter()
myEmitter.emit('error')
