let counter = 0;

const timeout = setTimeout(function fun() {
  console.log(`timeout: ${++counter}`);

  timeout.refresh()
}, 2000);

timer();

function timer() {
  setTimeout(function fun() {
    console.log(`timeout: ${++counter}`);
  
    timer()
  }, 2000);
}

// Как добавить в микротаску задачу?
// Promise, process.nextTick(callback), setImmediate
// queueMicrotask

// Циклически каждую 2 секунды выполняет одну задачу. Рекурсия с задержкой.
