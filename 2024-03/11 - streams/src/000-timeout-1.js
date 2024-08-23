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

    res('5')
  })

  count();
  console.log(res) //
}

console.clear()
testAsync()

// setTimeout - это макротаска
// Promise.resolve - это макротаска

// Нужно написать порядок в котором отобразятся числа.
// 1 - 4 - 3 - Promise{'5'} - 2
