// console.log("start"); // 1
// const interval = setInterval(() => {
//   console.log("setTimeout"); // 3
//   Promise.resolve()
//     .then(() => {
//       console.log("promise 1"); // 4
//     })
//     .then(() => {
//       console.log("promise 2"); // 5
//     });
// }, 0);
// clearInterval(interval)
// console.log("end"); //  2

console.log("start"); // 1
const interval = setInterval(() => {
  console.log("setInterval 1"); // 3
  Promise.resolve()
    .then(() => {
      console.log("promise 1"); // 4
    })
    .then(() => {
      console.log("promise 2"); // 5
      // clearInterval(interval);
    });
}, 1000);

console.log("end"); //2