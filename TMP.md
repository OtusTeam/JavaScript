.center.icon[![otus main](assets/otus-1.png)]

---

class:  white

background-image: url(assets/title.svg)

.top.icon[![otus main](assets/otus-2.png)]

# Modern JavaScript Frameworks
## Введение в курс
### Александр Коржиков

---

class: top white
background-image: url(assets/sound.svg)
.top.icon[![otus main](assets/otus-2.png)]

.sound-top[
  # Как меня слышно и видно?
]

.sound-bottom[
  ## > Напишите в чат
  ### **+** если все хорошо
  ### **–** если есть проблемы cо звуком или с видео
]

---

.title[ 
  # Цели занятия
  .top.icon[![otus main](assets/otus-3.png)]
]

.main-list[
- Познакомиться с преподавателем и с программой курса, понимать как она построена
- Вспомнить и применять основные техники языка `JavaScript`, которые помогут при изучении фреймворков
]

---

# Вопрос

- ### Какие `JavaScript` фреймворки Вы используете? 
- ### Какие `JavaScript` библиотеки Вы используете? 
- ### В чем отличие фреймворков от библиотек? 
- ### Расскажите о себе 😀

---

.title[ 
  # Technologies
  .top.icon[![otus main](assets/otus-3.png)]
]

| ![JS](assets/icons/trim/js.png) | ![Node](assets/icons/trim/node.png) | ![Web Components](assets/icons/trim/webcomponents.png) | ![React](assets/icons/trim/react.png) | ![Vue](assets/icons/trim/vue.png) | ![Angular](assets/icons/trim/angular.png) |
|:-------------:|:-------------:|:-------------:|:-------------:|:-------------:|:-------------:|
| ![Google Chrome](assets/icons/trim/google_chrome.png) | ![NPM](assets/icons/trim/npm.png) | ![polymer](assets/icons/trim/polymer.png) | ![redux](assets/icons/trim/redux.png) | | ![ts](assets/icons/trim/ts.png) |
| | ![v8](assets/icons/trim/v8.png) | | ![react-router](assets/icons/trim/react-router.png) | | ![rxjs](assets/icons/trim/rxjs.png) |
| | ![Express](assets/icons/trim/express.png) | |
| | ![GraphQL](assets/icons/trim/graphql.png) | |

---

# Цели курса

- ### Понимать для чего нужны веб фреймворки
- ### Уметь применять паттерны проектирования (Virtual DOM, Dependency Injection, Observables, Event Loop)
- ### Знать подходы при проектировании, организации, контроля состояния и тестирования приложений
- ### Выбирать подходящие инструменты для проекта
- ### Создавать веб-приложения с использованием современных технологий 

---

.title[ 
  # Организационные вопросы по курсу
  .top.icon[![otus main](assets/otus-3.png)]
]

.main-list[
- Тема “Modern JavaScript Frameworks”
- 34 занятия / 1.5 часа / понедельник / четверг
- Вебинары, материалы, теория и практика
- Домашние задания
- Выпускной проект
- Общение в slack
]

---

class:  white blue teachers
.title[ 
  # Преподаватели
  .top.icon[![otus main](assets/otus-3.png)]
]

.main-list[
  <br><br><br>
  
- ### Александр Коржиков
  JavaScript @ Alpari, Comindware, Tinkoff, Backbase, ING  
  korzio@gmail.com https://github.com/korzio
  
- ### Юрий Дворжецкий
  Java, JavaScript @ Luxoft  
  Teaching @ 1500+ hours, 600+ developers

- ### Сергей Лукияненко
  FullStack @ Surplex, Auxmoney, Freshcells, Tekoway  
  s@luchianenco.com https://github.com/luchianenco

- ### Владимир Клепов
  FullStack @ Яндекс, Российские Суперкомпьютеры  
  v.klepov@gmail.com https://thoughtspile.github.io

- ### Михаил Кузнецов
  FullStack @ ING

- ### Нас больше
]

---

class:  center
.title[ 
  .top.icon[![otus main](assets/otus-3.png)]
]

## Программа курса 
## Q&A

---

.title[ 
  # Темы
  .top.icon[![otus main](assets/otus-3.png)]
]

.right-image[![JS](assets/js.png)]

.main-list[
- Типы данных
- Переменные 
- Функции
- Замыкания
- Наследование
]

---

.title[ 
  # Что почитать
  .top.icon[![otus main](assets/otus-3.png)]
]

.right-image[![JS](assets/js.png)]

.main-list[
### ECMAScript 6 (2015)
- http://es6-features.org/ <br> (кратко)
- http://exploringjs.com/es6/ <br> (подробно)
- https://developer.mozilla.org/ <br> (справочник)
- http://javascript.ru/ <br> (Илья Кантор)
]

---

.title[ 
  # Типы данных
  .top.icon[![otus main](assets/otus-3.png)]
]

.right-code[
```javascript
typeof typeof null === ?
```
]

.main-list[
- number
- string
- boolean 
- null
- undefined
- object  
- Symbol
]

---

.title[ 
  # Вопрос
  .top.icon[![otus main](assets/otus-3.png)]
]

.right-code[
```javascript
a == 1 && a == 2 && a == 3 
=== true // ?
```
]

### Может ли это выражение быть инстинным?

---

.title[ 
  # Приведение типов
  .top.icon[![otus main](assets/otus-3.png)]
]

.right-code[
```javascript
a == 1 && a == 2 && a == 3 
=== true // ?

var a = (function() { 
  var i = 1 
  return { 
    valueOf: function() { 
      return i++ 
    } 
  }
})()
```
]

.main-list[
- `valueOf()` возвращает простое представление объекта
- `toString()` возвращает строковое представление объекта
]

---

.title[ 
  # Переменные
  .top.icon[![otus main](assets/otus-3.png)]
]

.right-code[
```javascript
if (true) { 
  var b = 1
}

console.log(b) // 1

if (!false) { 
  const c = 2
}

// console.log(c) 
// ReferenceError: c is not defined
```
]

.main-list[
### Области видимости 
- `var` доступны во всем теле функции
- `let` и `const` определены в блоке `{...}`
]

---


.title[ 
  # Всплытие
  .top.icon[![otus main](assets/otus-3.png)]
]

.right-code[
```javascript
console.log(b) 
// undefined

// console.log(c)
// ReferenceError: c is not defined

var b = 1
const c = 2
```
]

.main-list[
- `var` обрабытывается до исполнения кода `<=> hoisting`

- `let` и `const` определены в блоке 

&nbsp;&nbsp;&nbsp;`{...}`
]

---


.title[ 
  # Вопрос
  .top.icon[![otus main](assets/otus-3.png)]
]

.right-code[
```javascript
var a = { a }
let b = { b }
const c = { c }
```
]

- ### Будет ли это работать? 
- ### Что здесь происходит?

---

.title[ 
  # Переменные
  .top.icon[![otus main](assets/otus-3.png)]
]

.right-code[
```javascript
var a = { a }
// Ok!

let b = { b } 
// Uncaught ReferenceError: 
// b is not defined
const c = { c } 
// Uncaught ReferenceError: 
// c is not defined
```
]

- ### `var` (hoisting + shorthand)
- ### `let`
- ### `const`

---

.title[ 
  # Destructuring
  .top.icon[![otus main](assets/otus-3.png)]
]

.right-code[
```javascript
function h ({ name, val }) { 
  console.log(name, val)
}

var { 
 op: a, lhs: { op: b } = {} 
} = {} // A
```
]

### Интуитивное определение и присвоение переменных из объектов
<br><br>

### Вопрос

Какая может быть структура у объекта `A`, чтобы `a` и `b` были определены?

---


.title[ 
  # Функции
  .top.icon[![otus main](assets/otus-3.png)]
]

.right-code[
```javascript
function a() {}
const a = function () {}
const a = () => {}
```
]

- ### Контекст исполнения `this`
- ### Arguments
- ### Constructor

---

.title[ 
  # Задача
  .top.icon[![otus main](assets/otus-3.png)]
]

### Что будет выведено в консоль?

```javascript
var obj = { 
  a: function (){ 
    console.log(this.prop) 
  }, 
  prop: 1 
} 

obj.a.prop = 2 
obj.a() // ? 
var fn = obj.a
fn() // ?
```

---

.title[ 
  # Замыкания
  .top.icon[![otus main](assets/otus-3.png)]
]

### Область видимости определяется функцией

```javascript
function outer() { 
  var outerVar 
  
  var func = function() { 
    var innerVar x = innerVar + outerVar 
  } 
  
  return func
}
```

---

.title[ 
  # Замыкания
  .top.icon[![otus main](assets/otus-3.png)]
]

.right-code[
```javascript
for (var i = 0; i < 10; i++) { 
  setTimeout(function() { 
    console.log(i) 
  }, 1000)
}
```
]

- ### Что будет в консоли? 
- ### Как это исправить?

---

.title[ 
  # Замыкания
  .top.icon[![otus main](assets/otus-3.png)]
]

### let

```javascript
for (let i = 0; i < 10; i++) { 
  setTimeout(function() { 
    console.log(i) 
  }, 1000)
}
```

<br>
### bind

```javascript
for (var i = 0; i < 10; i++) { 
  setTimeout(function() { 
    console.log(this)
  }.bind(i), 1000)
}
```

<br>

```javascript
for (var i = 0; i < 10; i++) { 
  setTimeout(function() { 
    console.log(i)
  }.bind(null, i), 1000)
}
```

---

.title[ 
  # Вопрос
  .top.icon[![otus main](assets/otus-3.png)]
]

.right-image[![JS](assets/inheritance.png)]

- ### Какие задачи решает наследование?
- ### Как реализовать наследование в `JavaScript`?

---

.title[ 
  # Наследование
  .top.icon[![otus main](assets/otus-3.png)]
]

### `__proto__` ссылка на объект прототип

```javascript
var a = { b: 0 }
// not recommended
a.__proto__ = { c : 1 } 

// alternative
Object.getPrototypeOf(a) // Reflect.getPrototypeOf()
Object.setPrototypeOf(a, { c : 2}) // Reflect.setPrototypeOf()
```

<br>
.half-image[![__proto__ keyword](assets/proto.png)]

---

.title[ 
  # Наследование
  .top.icon[![otus main](assets/otus-3.png)]
]

.right-image[![__proto__ keyword](assets/oop_raushma.png)]

### `Object.create({})` устанавливает аргумент значением `__proto__` 

```javascript
var a = Object.create({ c: 1 })
a.__proto__ // { c: 1 }
```

---

.title[ 
  # Наследование
  .top.icon[![otus main](assets/otus-3.png)]
]

### `new Fn()` устанавливает `__proto__` равным `prototype` 

```javascript
function Fn() {}
Fn.prototype = { c: 1 }
var a = new Fn()
a.__proto__ // { c: 1 }
```

---

.title[ 
  # Классы
  .top.icon[![otus main](assets/otus-3.png)]
]

### `class` - «синтаксический сахар» для задания конструктора и прототипа

```javascript
class Pie { 
  constructor(name) { 
    this.name = name 
  }
}

class Pizza extends Pie { 
  bake() { 
    super.bake() 
  }
}
```

---

.title[ 
  # Классы
  .top.icon[![otus main](assets/otus-3.png)]
]

.right-code[
```javascript
class Pie { 
  constructor(name) { 
    this.name = name 
  }
}

class Pizza extends Pie { 
  bake() { 
    super.bake() 
  }
}
```
]

- ### `class C` 
- ### `[extends P] `
- ### `constructor()`
- ### `methods()`
- ### `new C()` 

---

.title[ 
  # Задача
  .top.icon[![otus main](assets/otus-3.png)]
]

### Реализовать функцию `create` - `polyfill` для `Object.create`

```javascript
var create = function() { /* ... */ }

var b = create({ a: 1 })
b.a === 1 // true
delete b.a
b.a === 1 // ?
```

---

.title[ 
  # Задача
  .top.icon[![otus main](assets/otus-3.png)]
]

### Если остается время
### Реализовать функцию `reduce` - `polyfill` для `Array.prototype.reduce`

```javascript
// example
[[0, 1], [2, 3], [4, 5]].reduce((memo, currentValue) => {
  return memo.concat(currentValue) 
}, [])

reduce(
 [1, 2, 3, 4], // arguments
 (a, b) => a + b, // action
 0 // initial value
) // 10
```

---

class:  center
.title[ 
  .top.icon[![otus main](assets/otus-3.png)]
]

## Q&A

---

.title[ 
  # На занятии
  .top.icon[![otus main](assets/otus-3.png)]
]

.main-list[
- Познакомились с преподавателем и с программой курса
- Вспомнили теорию - типы данных и переменные, функции и замыкания, наследование
- Попрактиковали различные `JavaScript` техники
]

---

.title[ 
  # Modern JavaScript Frameworks
  .top.icon[![otus main](assets/otus-3.png)]
]

.mario[![mario](assets/mario.png)]

| ![JS](assets/icons/trim/js.png) | ![Node](assets/icons/trim/node.png) | ![Web Components](assets/icons/trim/webcomponents.png) | ![React](assets/icons/trim/react.png) | ![Vue](assets/icons/trim/vue.png) | ![Angular](assets/icons/trim/angular.png) |
|:-------------:|:-------------:|:-------------:|:-------------:|:-------------:|:-------------:|
| ![Google Chrome](assets/icons/trim/google_chrome.png) | ![NPM](assets/icons/trim/npm.png) | ![polymer](assets/icons/trim/polymer.png) | ![redux](assets/icons/trim/redux.png) | | ![ts](assets/icons/trim/ts.png) |
| | ![v8](assets/icons/trim/v8.png) | | ![react-router](assets/icons/trim/react-router.png) | | ![rxjs](assets/icons/trim/rxjs.png) |
| | ![Express](assets/icons/trim/express.png) | |
| | ![GraphQL](assets/icons/trim/graphql.png) | |

---

.title[ 
  # Самостоятельные работы
  .top.icon[![otus main](assets/otus-3.png)]
]

.main-list[
- https://github.com/
- single repo lastname-name(-otus) - `korzhikov-alex-otus`
- `master` branch
- MR from `block-lesson-number` to `master` (`javascript-1-master`, `react-4-master`)
- exclude `node_modules`, `bower_components`, `editor`, scaffolding
- https://github.com/korzio/modern_javascript_frameworks
]

---

.title[ 
  # Самостоятельная работа
  .top.icon[![otus main](assets/otus-3.png)]
]

### Написать функцию sum, которая может быть исполнена множество раз. 
### Если она исполнена без аргументов, то возвращает значение суммы всех переданных до этого значений. 

```javascript
sum(1)(2)(3)....(n)() === 1 + 2 + 3 + ... + n
```

---

class:  white
background-image: url(assets/title.svg)
.top.icon[![otus main](assets/otus-2.png)]

# Спасибо за внимание!
## Пожалуйста, пройдите опрос в личном кабинете

.main-list[
- Все ли темы были понятны? (да - нет)
- Легкий материал или нет? (1 просто - 10 сложно)
]
