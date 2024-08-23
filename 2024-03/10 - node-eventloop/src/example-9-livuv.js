let stop = false
// setTimeout выполнится?
setTimeout(() => {
  stop = true
}, 1000)
while (stop === false) {}
