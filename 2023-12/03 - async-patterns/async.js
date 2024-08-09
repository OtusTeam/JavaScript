// const doAsyncTask = () => Promise.resolve("1");
// (async function() {
//   let value = await doAsyncTask();
//   console.log(value);
//   console.log("2");
// })();

function doAsyncTask(cb) {
  process.nextTick(() => {
    cb();
  })
}

doAsyncTask(_ => console.log(message));
let message = "Ars";