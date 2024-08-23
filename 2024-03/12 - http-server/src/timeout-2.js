setTimeout(() => console.log('timeout'), 0); // Когда мы увидем в консоле timeout?

function myAsync(start = 0) {
  console.log(start)

  if (start === 1000) {
    return;
  }

  return Promise.resolve(start + 1).then(myAsync)
}

console.clear()
myAsync()
