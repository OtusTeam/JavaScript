// //

// // (async () => {
// //   const res1 = await fetch('https://jsonplaceholder.typicode.com/users')
// //   const users = await res1.json()

// //   const user = users.filter(user => user.name === "Leanne Graham")

// //   const res2 = await fetch(`https://jsonplaceholder.typicode.com/comments/1`)
// //   const comments = await res2.json()

// //   console.log(comments)
// // })()

// let loading = true
// fetch('https://jsonplaceholder.typicode.com/users')
//   .then((response) => response.json())
//   .then(users => {
//     const user = users.filter(user => user.name === "Leanne Graham")
//     return fetch(`https://jsonplaceholder.typicode.com/comments/1`)
//   })
//   .then(res => res.json())
// //   .then(comments => console.log(comments))
// //   .catch()
// //   .finally(() => loading = false)

// let range = {
//   from: 1,
//   to: 5
// }

// // сделаем объект range итерируемым
// range[Symbol.iterator] = function() {
//   let current = this.from;
//   let last = this.to;

//   // метод должен вернуть объект с методом next()
//   return {
//     next() {
//       if (current <= last) {
//         return {
//           done: false,
//           value: current++
//         };
//       } else {
//         return {
//           done: true
//         };
//       }
//     }
//   }
// };

// for (let num of range) {
//   alert(num); // 1, затем 2, 3, 4, 5
// }

// const iterable = {
//   [Symbol.iterator]() {
//     let step = 0;
//     return {
//       next() {
//         if (step <= 2) {
//           step++;
//         }
//         switch (step) {
//           case 1:
//             return { value: "hello", done: false };
//           case 2:
//             return { value: "world", done: false };
//           default:
//             return { value: undefined, done: true };
//         }
//       }
//     };
//   }
// };

// for(let item of iterable) {
//   console.log(item)
// }

function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}

let generator = generateSequence();

let one = generator.next();
console.log(one);
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
