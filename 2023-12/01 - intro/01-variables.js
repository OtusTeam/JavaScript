let leak = 'глобалка'
const varExample = () => {
  
  console.log(x);
  for (let i = 0; i < 10; i++) {
    leak = "Я доступна за пределами цикла";
  }

  console.log(leak);
  // Я доступна за пределами цикла

  function myFunc() {
    var functionScoped = "Я доступна только внутри своей функции";
    console.log(functionScoped);
  }
  myFunc();
  // Я доступна только внутри своей функции
  //   console.log(functionScoped);
  // ReferenceError: functionScoped is not defined
};
// const x = 10;
// varExample();
// console.log(x);
const letExample = () => {
  let x = "глобальная переменная";

  if (x === "глобальная переменная") {
    let x = "блоковая видимость";

    console.log(x);
    // Выведет: блоковая видимость
  }

  console.log(x);
  // Вывод?: глобальная переменная

  // `var`
  var y = "глобальная переменная";

  if (y === "глобальная переменная") {
    var y = "блоковая видимость";

    console.log(y);
    // Вывод?: блоковая видимость
  }

  console.log(y);
  // Вывод?: блоковая видимость
};
// letExample();
const constExample = () => {
  const constant = "Я константа";
  constant = "Мне нельзя переприсвоить значение";

  const person = {
    name: "Alberto",
    age: 25,
  };

  // здесь изменяется поле, а не сама переменная
  person.age = 26;
  console.log(person.age);
  // 26

  const person2 = {
    name: "Alberto",
    age: 25,
  };

  person2.age = 26;
  console.log(person.age);
  // 26

  // Запрещены изменения значения полей
  Object.freeze(person2);

  person2.age = 30;

  console.log(person2.age);
  // 26
};

const varLetHoistingExample = () => {
  var i;
  console.log(i);
  i = "I am a variable";

  //  Вывод?: undefined

  console.log(j);
  let j = "I am a let";
};
