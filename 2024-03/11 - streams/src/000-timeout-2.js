setTimeout(() => console.log('timeout')); // Когда мы увидем в консоле timeout?
// Никогда

function myAsync(start = 0) {
  console.log(start)

  return Promise.resolve(start + 1).then(myAsync)
}

console.clear()
myAsync()
