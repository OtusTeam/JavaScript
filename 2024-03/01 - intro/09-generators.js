const simple = () => {
  function* fruitList() {
    yield "Banana";
    yield "Apple";
    yield "Orange";
  }

  const fruits = fruitList();

  fruits;
  // Generator
  fruits.next();
  // Object { value: "Banana", done: false }
  fruits.next();
  // Object { value: "Apple", done: false }
  fruits.next();
  // Object { value: "Orange", done: false }
  fruits.next();
  // Object { value: undefined, done: true }
};

const looping = () => {
  const fruitList = ["Banana", "Apple", "Orange", "Melon", "Cherry", "Mango"];

  // create our looping generator
  function* loop(arr) {
    for (const item of arr) {
      yield `I like to eat ${item}s`;
    }
  }

  const fruitGenerator = loop(fruitList);
  fruitGenerator.next();
  // Object { value: "I like to eat Bananas", done: false }
  fruitGenerator.next();
  // Object { value: "I like to eat Apples", done: false }
  fruitGenerator.next().value;
  // "I like to eat Oranges"
};

const catching = () => {
  function* gen() {
    try {
      yield "Trying...";
      yield "Trying harder...";
      yield "Trying even harder..";
    } catch (err) {
      console.log("Error: " + err);
    }
  }

  const myGenerator = gen();
  myGenerator.next();
  // Object { value: "Trying...", done: false }
  myGenerator.next();
  // Object { value: "Trying harder...", done: false }
  myGenerator.throw("ooops");
  // Error: ooops
  // Object { value: undefined, done: true }
};
const generatorsAndPromises = () => {
  const myPromise = () =>
    new Promise((resolve) => {
      resolve("our value is...");
    });

  function* gen() {
    let result = "";
    yield myPromise().then((data) => {
      result = data;
    });
    yield result + " 2";
  }

  const asyncFunc = gen();
  const val1 = asyncFunc.next();
  console.log(val1);
  // {value: Promise, done: false}
  val1.value.then(() => {
    console.log(asyncFunc.next());
  });
  // Object { value: "our value is... 2", done: false }
};
