function testAsync() {
  console.log('1') // 

  setTimeout(() => {
    console.log('2') //
  }, 0)

  function count() {
    console.log('3') //
  }

  const res = new Promise((res) => {
    console.log('4') //

    res('5') // Микро задача
  })

  count();
  console.log(res) //
}

console.clear()
testAsync()


// Что выведется в консоль(последовательно).

// 1 - 4 - 3 - Promise{ '5' } - 2




















// 1 - 4 - 3 - Promise(5) - 2

/*
1
4
3
Promise { '5' }
2
*/
