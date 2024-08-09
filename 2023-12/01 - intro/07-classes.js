const simple = () => {
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }

  Person.prototype.greet = function () {
    console.log("Меня зовут " + this.name);
  };

  const ars = new Person("Ars", 26);
  const kostya = new Person("Kostya", 26);


  ars.greet();
  kostya.greet();
};

const sugarClass = () => {
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    greet() {
      console.log(`Меня зовут ${this.name} и мне ${this.age} лет`);
    } // no commas in between methods
    farewell() {
      console.log("Прощай!");
    }
  }

  const alberto = new Person("Ars", 26);

  alberto.greet();
  alberto.farewell();
};
const static = () => {
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    static info() {
      console.log("ИНФОРМАЦИЯ");
    }
  }
  const ars = new Person("Ars", 26);

  ars.info();
  // TypeError: ars.info is not a function

  Person.info();
  // ИНФОРМАЦИЯ
};
