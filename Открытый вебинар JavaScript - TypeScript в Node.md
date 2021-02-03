.center.icon[![otus main](assets/otus-1.png)]

.hidden[
  https://blog.risingstack.com/building-a-node-js-app-with-typescript-tutorial/
  
  http://ttendency.cs.ucl.ac.uk/projects/type_study/documents/type_study.pdf
]

---

class: white
background-image: url(assets/title.svg)
.top.icon[![otus main](assets/otus-2.png)]

# Открытый вебинар JavaScript
## TypeScript в Node
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

class: profile

# Обо мне

.right-image[![img](assets/team/alex.jpg)]

## Александр Коржиков
### `JavaScript` 

- Alpari
- Comindware
- Tinkoff
- Backbase
- ING
- Otus

.right-code[
## Расскажите о себе!
]

#### https://github.com/korzio 
#### korzio@gmail.com 

---

# Расскажите о себе!

- Какие JavaScript фреймворки Вы используете?
- Какие JavaScript библиотеки Вы используете?
- В чем отличие фреймворков от библиотек? 

.center[
  ![question](assets/question.png)
]

---

# Содержание

- Node

- TypeScript
.right-image[![Node](assets/ts.png)]
  - Ключевые особенности
  - Технологии & Инструменты
  - Пример Express

- `ts-node`
  - Module Extensions

- Deno
  - Недостатки `Node`

- О курсе
  - Фреймворки и библиотеки

---

# Пример

### Что будет выведено на экран?
### Как запустить этот код?

```ts
const isTrue: boolean | string = ''
if (isTrue) {
  console.log('hello typescript')
}
```

.center[
  ![question](assets/question.png)
]

---

# Node

.full-image[
![node](assets/icons/trim/node.png)
]

---

# Node

### Асинхронная среда исполнения `JavaScript`, основанная на событийной модели, для создания эффективных сетевых приложений

- Пример web сервера

```javascript
const http = require('http') 
const hostname = '127.0.0.1'
const port = 3000
const server = http.createServer((req, res) => {
  res.statusCode = 200 
  res.setHeader('Content-Type', 'text/plain') 
  res.end('Hello World\n')
}) 

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
```

- Какие особенности Вы бы отметили из этого примера?

---

# Особенности

- Исполнение `JavaScript` файлов с помощью комманды node 
  
  - REPL

- `CommonJS` формат модулей для загрузки зависимостей
  
  - `ES Modules`

.right-image[
  ![v8](assets/icons/trim/node.png)
]
- Стандартная библиотека модулей

- API основанное на асинхронном паттерне Callbacks

- `ES2015` синтаксис

- Демо

---

# История

.right-image[
  ![v8](assets/icons/trim/v8.png)
]

- *Server side `JavaScript` Platform* - Ryand Dahl, 2009

- Asyncronous (non-blocking) I/O

- Chromium `JavaScript` Engine -> V8

- **Node.js** Foundation

---

# Структура

- Библиотека написана на `C++` и `JavaScript` 

- `V8` - платформа исполнения `JavaScript` от Google (Chromium, Chrome, Opera, Brave, Yandex Browser)

- Event Loop - асинхронный событийный цикл с `libuv`

- Модули для работы с операционной системой

.right-image[
  ![node](assets/icons/trim/node.png)
]

### Patterns

- Reactor
- Module
- Observer
- Callback

---

# TypeScript

.half-image[
![node](assets/ts.png)
]

---

# Пример на TypeScript

```ts
import { LitElement, html, property, customElement } from 'lit-element'

@customElement('simple-greeting')
export class SimpleGreeting extends LitElement {
  @property() name = 'World'

  render() {
    return html`<p>Hello, ${this.name}!</p>`
  }
}
```

---

# Пример на JavaScript

```ts
import { LitElement, html } from 'lit-element'

class SimpleGreeting extends LitElement {
  static get properties() {
    return { name: { type: String } }
  }

  constructor() {
    super()
    this.name = 'World'
  }
  
  render() {
    return html`<p>Hello, ${this.name}!</p>`
  }
}

customElements.define('simple-greeting', SimpleGreeting)
```

---

# О TypeScript

.right-image[![ts](assets/ts.png)]

> JavaScript that scales.  
> TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.  
> Any browser. Any host. Any OS. Open source.

- 2012 @ Microsoft
- Anders Hejlsberg - создатель `Turbo Pascal`, `С#` и `Delphi`
- Расширение ES6
- Поддерживается Microsoft и сообществом

---

# Ключевые особенности

- Типы - протоколы, выявление ошибок типизации
- ООП - абстракции и паттерны
- IDE - поддержка и помощь при написании кода

## Технологии

- `TypeScript` транспилируется в `JavaScript`
- `Deno`
- `WebAssembly`

---

# Инструменты

- `typescript, tsc` - компилятор в `JavaScript`

```bash
npm install -g typescript
```

- `tslint` - статический анализ кода

```bash
npm install -g tslint
```

- [`@types`](https://www.npmjs.com/package/@types/node) - определения типов

Например, [@types/node](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/node)

- `ts-node` - транспайлер на лету для `Node`

---

# tsconfig.json

```
{
  "compilerOptions": {
    "outDir": "./built",
    "allowJs": true,
    "target": "es5"
  },
  "include": [
    "./src/**/*"
  ]
}
```

### `compilerOptions` флаги из [списка поддерживаемых `tsc`](https://www.typescriptlang.org/docs/handbook/compiler-options.html) 

.hidden[
`noImplicitAny`
https://www.typescriptlang.org/docs/handbook/tsconfig-json.html
https://www.typescriptlang.org/docs/handbook/compiler-options.html
http://json.schemastore.org/tsconfig
]

---

# Типы

.right-image[![ts](assets/ts.png)]

- Позволяют улучшить качество и понимание кода
- Позволяют избежать ошибок типизации на этапе компиляции
- Документация как код
- Оптимизации

.hidden[
The main purpose of a type system is to reduce possibilities for bugs in computer programs[2] by defining interfaces between different parts of a computer program, and then checking that the parts have been connected in a consistent way. This checking can happen statically (at compile time), dynamically (at run time), or as a combination of static and dynamic checking. Type systems have other purposes as well, such as expressing business rules, enabling certain compiler optimizations, allowing for multiple dispatch, providing a form of documentation, etc.
]

---

# Пример Express

.right-code[
```ts
import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
```
]

.left-code[
```bash
mkdir example
cd example
npm init -f
npm i typescript tslint -D
(npx) tsc --init
(npx) tslint --init
npm install express
```
]

.hidden[
  - [Express with TypeScript](https://medium.com/javascript-in-plain-english/typescript-with-node-and-express-js-why-when-and-how-eb6bc73edd5d)
]

---

# Demo

- TypeScript Express в Node
- Поддержка VSCode 
  
  - Refactoring
  - TSLint

- Debug
- TypeScript Express в Node

.hidden[
- TypeScript в Node
  - tsc VS webpack VS babel
  - Возможности VSCode IDE
  https://code.visualstudio.com/docs/languages/typescript
    - Refactoring
    - TSLint
  
  - How to navigate to implementation in vscode?
  
  > --declarationMap
  > https://stackoverflow.com/questions/54459847/vscode-lerna-typescript-monorepo-code-navigation
  
  - Debug
  
  > node --inspect dist/
]

---

# Solutions

- [ts-express-decorators](https://github.com/TypedProject/ts-express-decorators)
- [nestjs](https://nestjs.com/)

### Tools

- [polymer-cli]()
- [gluegun]()
- [oclif]()

---
  
# Extensions

### **!Important! Deprecated**
### Define interpreter for other file extensions

```
var jsHook = require.extensions['.js']
require.extensions['.js'] = function (module, file) {
  var oldCompile = module._compile
  module._compile = function (code, file) {
    code = code + '; console.log(bar)'
    module._compile = oldCompile
    module._compile(code, file)
  }
  jsHook(module, file)
}

require('./')
```

.hidden[
> the TypeScript Node (ts-node) - the on-the-fly module extension and REPL for Node.
https://github.com/microsoft/TypeScript/wiki/Using-the-Compiler-API
]

---

# Demo

- Пример имплементации `ts-node`

---

# Deno

- Какие недостатки у `Node`?

.center[![question](assets/question.png)]

- [Design Mistakes in Node](assets/jsconf2018.pdf)

- Deno?
- `V8, Rust, Tokio, TypeScript`

---

# Demo Deno

.half-image[
![ts](assets/deno.png)
]

---

# Материалы

.right-image[![ts](assets/ts.png)]

- [Official 5 Minutes Tutorial](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)

- [TypeScript Language Specification](https://github.com/Microsoft/TypeScript/blob/master/doc/spec.md)

- [TypeScript Deep Dive - Basarat Syed](http://basarat.gitbooks.io/typescript/)

- [TypeScript to JavaScript Playground](https://www.typescriptlang.org/play/)

- [TypeScript Essentials - Charly Poly](https://medium.com/@wittydeveloper/typescript-essentials-b7ae85b0f561)


---

class: white
background-image: url(assets/title.svg)
.top.icon[![otus main](assets/otus-2.png)]

# Q&A

---

class: profile
# О Нас

.right-image[![img](assets/team/alex.jpg)]
## Александр Коржиков
### `JavaScript` 

#### https://github.com/korzio 
#### korzio@gmail.com 

---

class: profile
# О Нас

.right-image[![img](assets/team/yuri.png)]
## Юрий Дворжецкий
### `Java, JavaScript` 

- Luxoft
- Курсы 1500+ часов, 600+ разработчиков

---

class: profile
# О Нас

.right-image[![img](assets/team/mikhail.jpg)]
## Михаил Кузнецов
### `JavaScript, FullStack, Java, Python` 

- ING
- Vue.js
- Speaker

#### https://github.com/shershen08
#### michail.kuznetsov@gmail.com

---

class: white
background-image: url(assets/title.svg)
.top.icon[![otus main](assets/otus-2.png)]

# Нас большe

---

# Modern JavaScript Frameworks

| ![JS](assets/icons/trim/js.png) | ![React](assets/icons/trim/react.png) | ![Node](assets/icons/trim/node.png) |  | ![Vue](assets/icons/trim/vue.png) | ![Angular](assets/icons/trim/angular.png) |
|:---:|:---:|:---:|:---:|:---:|:---:|
| ![Google Chrome](assets/icons/trim/google_chrome.png) | ![redux](assets/icons/trim/redux.png) | ![wasm](assets/web-assembly-logo.png) |  | | ![ts](assets/icons/trim/ts.png) |
| ![Web Components](assets/icons/trim/webcomponents.png) | ![react-router](assets/icons/trim/react-router.png) | ![v8](assets/icons/trim/v8.png) |  | | ![rxjs](assets/icons/trim/rxjs.png) |
| ![polymer](assets/icons/trim/polymer.png) | | ![Express](assets/icons/trim/express.png) |
| ![NPM](assets/icons/trim/npm.png) | | ![GraphQL](assets/icons/trim/graphql.png) |

---

class: white
background-image: url(assets/title.svg)
.top.icon[![otus main](assets/otus-2.png)]

# Q&A
## О Курсе

---

class: white
background-image: url(assets/title.svg)
.top.icon[![otus main](assets/otus-2.png)]

# Спасибо за внимание!

.black[ 
### Пожалуйста, пройдите [опрос](https://otus.pw/drOl/)
### Будем рад Вас видеть на 
### **CLI in TypeScript Workshop - 16 Сентября**
### **День Открытых Дверей - 19 Сентября**
]

---

# Вопрос

> Почему определения типов хостятся в отдельном одном! репозитории DefinitelyTyped, вместо того, чтобы быть включенными в репозитории библиотек, для которых описываются типы на ts?

> Если require.extensions is deprecated, то что предлагается использовать вместо этого запрещенного метода?