import EventEmitter from 'node:events'

class MyThing extends EventEmitter {
  constructor () {
    super()
    this.emit('thing1')
  }
}
const mt = new MyThing()
mt.on('thing1', function onThing1 () {
  console.log('thing1')
})
