.center.icon[![otus main](assets/otus-1.png)]

.TODO[
  > the TypeScript Node (ts-node) - the on-the-fly module extension and REPL for Node.
  
  https://www.npmtrends.com/commander-vs-yargs-vs-oclif-vs-minimist-vs-vorpal-vs-inquirer
]

---

class: white
background-image: url(assets/title.svg)
.top.icon[![otus main](assets/otus-2.png)]

# Открытый вебинар JavaScript
## Создание CLI на Node
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

#### https://github.com/korzio 
#### korzio@gmail.com 

.right-code[
## Расскажите о себе!
]

---

# Содержание


- Введение
  - Почему CLI?
  - Почему JavaScript / Node?
  - Принципы

.right-image[
  ![node](assets/icons/trim/node.png)
]
  
- Пишем CLI
  - Hello CLI
  - Commander.js
  - Inquirer
  - Vorpal
  - Oclif

- О курсе
  - Фреймворки и библиотеки

---

# Материалы

- https://nodejs.org/en/docs/guides/  

### Node Core Concepts

- https://docs.npmjs.com/ 

### Package Manager for JavaScript

- [Evolution of the Heroku CLI: 2008-2017](https://blog.heroku.com/evolution-of-heroku-cli-2008-2017)
- [12 Factor CLI Apps - Heroku](https://medium.com/@jdxcode/12-factor-cli-apps-dd3c227a0e46)
- [Building Great CLI Experiences in Node - Jeff Dickey, Heroku](https://www.youtube.com/watch?v=Izx3-KSuaM8)

---

# Introduction

### Интерфейс командной строки (англ. `Command line interface, CLI`) — разновидность текстового интерфейса (CUI) между человеком и компьютером, в котором инструкции компьютеру даются в основном путём ввода с клавиатуры текстовых строк (команд), в UNIX-системах возможно применение мыши. Также известен под названием консоль.

(c) Wiki

---

# Почему?

### Какая CLI программа
- Вам нравится?
- Вы используете больше всего?

##  

- Почему Node?

.center[
  ![question](assets/question.png)
]

---

# Популярные CLI

.right-code[![NPM](assets/icons/trim/npm.png)]

- `git`
- `npm`

.right-code[
- create-react-app
- angular-cli
- polymer-cli
]

- gulp
- grunt
- yeoman

---

# Почему CLI?

### .green[`+`]

- **Инструменты** 
  - для улучшения и
  - автоматизации работы 
  - разработчиков,
- *которые позволяют достичь большего!*
- *Это весело!*

### .red[`-`]?

---

# Почему Node?

### .green[`+`]

- Попрактиковаться с `JavaScript`
- [Принцип Этвуда](https://blog.codinghorror.com/the-principle-of-least-power/) - *Любое приложение, которое может быть написано на JavaScript, обязательно будет написано на JavaScript*
- Быстрая и простая разработка
- Множество готовых пакетов и библиотек, богатая инфраструктура `npm` 
- Модульность
.TODO[
- We build for Fronted developers, they have node installed already
]

### .red[`-`]?

---

# Принципы

![question](assets/question_ru.png)

### Какие принципы дизайна `CLI` программы Вы бы отметили?

---

# Принципы

- Пользователь должен понимать, что происходит
  - `help`
  - `version`
  - `logs, messages, errors`
  
.right-image[![kiss](assets/kiss.png)]

- [Философия UNIX](https://ru.wikipedia.org/wiki/%D0%A4%D0%B8%D0%BB%D0%BE%D1%81%D0%BE%D1%84%D0%B8%D1%8F_Unix)
  - `Пусть каждая программа делает что-то одно, но хорошо`
  - `KISS`
  - `Модульность, композиция`

- Рабочее окружение
  - `linux, mac os, windows`
  - `package`

---

class: white
background-image: url(assets/title.svg)
.top.icon[![otus main](assets/otus-2.png)]

# Q&A

---

# Hello CLI

## Demo

```bash
mkdir my-test-cli
npm init
echo "console.log('Hello CLI')" > index.js
npm start
npm install --global .
my-test-cli
```

---

# package.json

```json
{
  "name": "my-test-cli",
  "version": "1.0.0",
  "description": "Hello CLI",
  "main": "server.js",
  "bin": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "man" : "./man/doc.1"
}
```

- `main` - экспорт
- `bin` - сделать исполняемый `symlink` в `PATH`, `./node_modules/.bin/`
- `url` - [`npm bugs`](https://docs.npmjs.com/files/package.json#bugs) - сообщить куда следует 🤗


---

# Особенности Исполнения

- `shebang` повзоляет указать интерпретатор в `*nix`

```js
#!/usr/bin/env node
```

- `process.argv` аргументы, переданные программе

Что произойдет при запуске программы `server.js`?

```javascript
console.log(process.argv)
```

```bash
node server hello world
```

- [`repl`](https://nodejs.org/api/repl.html) встроенные возможности

---

# help & version

## Demo

```bash
> my-test-cli

Usage: 
--help    Help documentation
--version Installed package version
```

---

# Commander.js

```javascript
var program = require('commander');

program
  .version('0.1.0')
  .option('-p, --peppers', 'Add peppers')
  .option('-P, --pineapple', 'Add pineapple')
  .option('-b, --bbq-sauce', 'Add bbq sauce')
  .parse(process.argv);

console.log('you ordered a pizza with:');
if (program.peppers) console.log('  - peppers');
if (program.pineapple) console.log('  - pineapple');
if (program.bbqSauce) console.log('  - bbq');
console.log('  - %s cheese', program.cheese);
```

- Парсинг аргументов
- Модульность
- Автоматическая документация интерфейса

---

# Inquirer

### Стильный ввод данных пользователя

![Inquirer DEMO Gif](https://github.com/mokkabonna/inquirer-autocomplete-prompt/raw/master/inquirer.gif)

#### Альтернативы
- `cli-ux`
- `prompt`

---

# Vorpal

#### https://vorpal.js.org/ <br><br>

.right-code[
- Непрервный CLI
- Документация
- Парсинг аргументов
- Ввод данных
- Автодополнение
]

.half-image[
  ![vorpal](assets/vorpal_help.jpg) <br><br>
  ![daffy](assets/daffy_opt.gif)
]

https://www.telerik.com/blogs/creating-node-js-command-line-utilities-improve-workflow

---

# Oclif

#### https://oclif.io/ <br><br>

- Framework от *Heroku, SalesForce* для построения CLI
- `TypeScript`
- Генерация кода
- Стандартная структура папок
- Хуки
- Документация
- Парсинг аргументов

---

# Oclif

## Demo

```bash
$ npx oclif single mynewcli
? npm package name (mynewcli): mynewcli
$ cd mynewcli
$ ./bin/run
hello world from ./src/index.js!
```

---

# Другие библиотеки

- `chalk` разноцветный вывод
- `clui` вывод таблиц, статус, графики
- `progress` статус
- `cli-table` таблица
- `figlet` ASCII вывод
- `clear` почистить терминал
- `cli-ux` Oclif утилиты для ввода и вывода

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
- Курсы 1500+ часов, 600+ разработчико

---

class: profile
# О Нас

.right-image[![img](assets/team/vladimir.jpg)]
## Владимир Клепов
### `FullStack` 

- Яндекс
- Российские Суперкомпьютеры

#### https://thoughtspile.github.io
#### v.klepov@gmail.com

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

# Нас больше

---

# Вопрос

- Какие JavaScript фреймворки Вы используете?
- Какие JavaScript библиотеки Вы используете?
- В чем отличие фреймворков от библиотек? 

.center[
  ![question](assets/question.png)
]

---

# Modern JavaScript Frameworks

| ![JS](assets/icons/trim/js.png) | ![Node](assets/icons/trim/node.png) | ![Web Components](assets/icons/trim/webcomponents.png) | ![React](assets/icons/trim/react.png) | ![Vue](assets/icons/trim/vue.png) | ![Angular](assets/icons/trim/angular.png) |
|:-------------:|:-------------:|:-------------:|:-------------:|:-------------:|:-------------:|
| ![Google Chrome](assets/icons/trim/google_chrome.png) | ![NPM](assets/icons/trim/npm.png) | ![polymer](assets/icons/trim/polymer.png) | ![redux](assets/icons/trim/redux.png) | | ![ts](assets/icons/trim/ts.png) |
| | ![v8](assets/icons/trim/v8.png) | | ![react-router](assets/icons/trim/react-router.png) | | ![rxjs](assets/icons/trim/rxjs.png) |
| | ![Express](assets/icons/trim/express.png) | |
| | ![GraphQL](assets/icons/trim/graphql.png) | |

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
### Пожалуйста, пройдите [опрос](https://otus.pw/4HQP/)
### Будем рад Вас видеть на 
### **День Открытых Дверей - 25 Марта**
]
