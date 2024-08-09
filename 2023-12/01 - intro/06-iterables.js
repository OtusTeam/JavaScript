const simple = () => {
  const fruits = ["apple", "banana", "orange"];

  for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
  }
};
const forOf = () => {
  const fruits = ["apple", "banana", "orange"];

  for (const fruit of fruits) {
    console.log(fruit);
  }

  const car = {
    maker: "BMW",
    color: "red",
    year: "2010",
  };

  for (const prop of Object.keys(car)) {
    const value = car[prop];
    console.log(prop, value);
  }

  const car2 = {
    maker: "BMW",
    color: "red",
    year: "2010",
  };

  for (const prop in car2) {
    console.log(prop, car[prop]);
  }
  // maker BMW
  // color red
  // year 2010

  let list = [4, 5, 6];

  // итерирует ключи
  for (let i in list) {
    console.log(i); // "0", "1", "2",
  }

  // итерирует значение
  for (let i of list) {
    console.log(i); // "4", "5", "6"
  }
};

const arrays = () => {
    const digits = Array.of(1,2,3,4,5);
    console.log(digits);

    const array = [1,2,3,4,5];

    // вернет первый элемент, удовлетворяющий предикату
    let found = array.find( e => e > 3 );
    console.log(found);

    const greetings = ["hello","hi","byebye","goodbye","hi"];

    // вернет индекс первого элемента, удовлетворяющего предикату     
    let foundIndex = greetings.findIndex(e => e === "hi");
    console.log(foundIndex);

    const array2 = [1,2,3,4,5,6,1,2,3,1];
    const array3 = [1,2,3,4,5,6,1,2,3,1];

    const some = (arr, f) => {
      for(item of arr) {
        if(f(item) === true) {
          return true;
        }
      }
      return false;
    }
    let arraySome = array2.some((e, i) => e === array3[i]);
    console.log(arraySome);
    // true

    let arrayEvery = array2.every(e => e > 2);
    console.log(arrayEvery);
    // false
}