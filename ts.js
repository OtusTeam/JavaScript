function makePromise() { 
  return new Promise((resolve) => {
      console.log(1)
      setTimeout(() => {
        console.log(2)
        resolve()
      }, 1e3)
  }) 
}

let req = []
req.push(makePromise())
req.push(makePromise())

// let chain = Promise.resolve()
// for (let r of req) {
//   // работает только через перезаписывание переменной, иначе выводится только первый промис
//   chain = chain
//     .then(() => r)
// }
// // Получаем результат
// chain.then(() => console.log(resultsReq))