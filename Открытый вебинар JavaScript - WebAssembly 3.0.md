class: title

## WebAssembly что и как
### .oc-blue-4.ri-twitter-fill[] AlexKorzhikov

.photo[
  ![](assets/team/alex-portret.png)
]

.right.bottom[
  ### 19 июня 2020
]

.hidden[

https://nodejs.org/api/wasi.html

/Users/rd25xo/go/src/github.com/korzio/webassembly
https://github.com/golang/go/wiki/WebAssembly#executing-webassembly-with-nodejs

https://medium.zenika.com/go-1-11-webassembly-for-the-gophers-ae4bb8b1ee03
]

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

background-image: linear-gradient(150deg,rgb(142, 81, 208),rgb(174, 132, 207)), url(static/t0.gif)

# Обо мне

.right-image[
  ![img](/assets/team/alex-portret.png)
]

<style>
  h3 span {
    vertical-align: -3px;
  }
</style>

### .oc-blue-4.ri-twitter-fill[] `AlexKorzhikov`
### JavaScript, DevOps
### .oc-yellow-9[@ING]
### @Otus

### .oc-red-6.ri-mail-line[] .oc-teal-9.ri-medium-fill[] .ri-github-fill[] **korzio** 


### .center[👋]

.right-code[
## Расскажите о себе!
]

---

# Содержание

.right[![web assembly](assets/web-assembly-logo.png)]

- `WebAssembly`
- Введение
- Дизайн, Возможности
- Семантика, `JavaScript API, Modules`
- Примеры использования

- О курсе
  - Фреймворки и библиотеки

### Цели

- Познакомиться с `WebAssembly` - понимать задачи, основные определения и цели проекта
- Попробуем использовать `WebAssembly` с `Node.js`

---

# Intro

### WebAssembly (abbreviated Wasm) is a **binary instruction format** for **a stack-based virtual machine**. Wasm is designed as a **portable target** for **compilation of high-level languages** like `C/C++/Rust`, enabling deployment on the web for client and server applications.

.right[![web assembly](assets/web-assembly-logo.png)]

---

# [Пример add()](https://mbebenita.github.io/WasmExplorer/)

.hidden[
  https://mbebenita.github.io/WasmExplorer/
  https://webassembly.studio/
]

```c
int add(int a) {
  return a + 5;
}
```

```wasm
(module
 (table 0 anyfunc)
 (memory $0 1)
 (export "memory" (memory $0))
 (export "_Z3addi" (func $_Z3addi))
 (func $_Z3addi (; 0 ;) (param $0 i32) (result i32)
  (i32.add
   (get_local $0)
   (i32.const 5)
  )
 )
)
```

```javascript
WebAssembly.instantiateStreaming(fetch(`program.wasm`))
  .then(prog => {
      console.log(prog.instance.exports.add(1, 2))
  })
```

.hidden[
  https://developers.google.com/web/updates/2012/06/How-to-convert-ArrayBuffer-to-and-from-String
  
  /Users/RD25XO/Developer/experiments/notes/otus/webassembly/program.wasm
  
  https://openhome.cc/eGossip/WebAssembly/Wat2Wasm.html
]

---

# История

.hidden[
  https://en.wikipedia.org/wiki/WebAssembly#History
  
  http://asmjs.org/spec/latest/
  
  https://en.wikipedia.org/wiki/Google_Native_Client
]

- Google Native Client (`NaCl` and `PNaCl`) 😅
  - `9 December 2011`
- [`asm.js`](http://asmjs.org/) - подмножество `JavaScript`
  - `11 October 2013` - `18 August 2014`
  .hidden[
  > ASM.js is a subset of JavaScript that has no objects and has no garbage collection or just in time compiler pauses. It’s a target for C/C++ — a statically typed subset of JavaScript. This was demonstrated at Mozilla in partnership with the big gaming companies like Epic Games with Unreal Engine and Unity with the Unity engine and IDE. [(c) Brendan Eich](https://medium.com/javascript-scene/why-we-need-webassembly-an-interview-with-brendan-eich-7fb2a60b0723)]


- Анонс в `2015` .right-code[![web assembly](assets/web-assembly-logo.png)]
  - `WebAssembly Working Group`
  - `Core Specification`, 2016
  - Официальный лого, 2017 😂 
  - *Browser Preview*

.hidden[
  WebAssembly Working Group in April, 2015, to standardize WebAssembly and oversee the specification and proposal process. Since then, the Core Specification in April, 2015, to standardize WebAssembly and oversee the specification and proposal process. Since then, the Core Specification
]

---

# [Примеры](https://webassembly.org/docs/use-cases/)

- **Web**
  - Медиа
  - Игры
  - Протоколы низкого уровня
  - Machine Learning
  - ...
  - > Any Possible Client Executed Code

- **Server Side ?!**
  - Шифрование
  - ... 
  - > Any Stable Predictable Rich Environment

---

# Поддержка

.right.height-400[
  ![wasm](assets/languages-supported-by-wasm.png)
]

### [Языки](https://github.com/appcypher/awesome-wasm-langs)

### Браузеры

.half-image[
  ![](assets/wasm-browser-support.png)
]

<br>
> Global - 85.57%

### [Server-Side](https://webassembly.org/docs/portability/)

---

# [Design Goals - Semantics](https://webassembly.github.io/spec/core/intro/introduction.html#design-goals)

- **Fast**: executes with near native code performance, taking advantage of capabilities common to all contemporary hardware
- **Safe**: code is validated and executes in a memory-safe [2], sandboxed environment preventing data corruption or security breaches
- **Well-defined**
- **Hardware-independent**
- **Language-independent**
- **Platform-independent**
- **Open**: programs can interoperate with their environment in a simple and universal manner

---

# [Design Goals - Representation](https://webassembly.github.io/spec/core/intro/introduction.html#design-goals)

- **Compact**: has a binary format that is fast to transmit by being smaller than typical text or native code formats
- **Modular**: programs can be split up in smaller parts that can be transmitted, cached, and consumed separately
- **Efficient**: can be decoded, validated, and compiled in a fast single pass, equally with either just-in-time (JIT) or ahead-of-time (AOT) compilation.
- **Streamable**
- **Parallelizable**
- **Portable**

---

# [Возможности MVP](https://webassembly.org/docs/mvp/)

- `Module` с `JavaScript API` - безопасное окружение
- `Binary format (wasm)` - меньший размер и быстрый парсинг
- `Text format`, [wat](https://www.destroyallsoftware.com/talks/wat) - текстовая репрезентация бинарного формата
- `wasm` интерпретатор
- [WebAssembly High-Level Goals](https://webassembly.org/docs/high-level-goals/)
  - *execute in the same semantic universe as JavaScript* 🤔
  
- **Нет поддержки (пока)**
  - Garbage collector (Proposal) 
  - DOM access
  - Старые браузеры
  - Threads
  
.hidden[
  # Elements Of WebAssembly 
  - Text Format (wat)
]

---

# Definitions

- Что такое `Virtual Machine`?
- Что такое `Stack-based Virtual Machine`?

.right-image[
  ![web assembly actors](assets/web-assembly-actors.png)
]
.half-image[
![Stack-based Virtual Machine](assets/Stack_3.png)
]

.hidden[
  Stack-based virtual machine 
  https://andreabergia.com/stack-based-virtual-machines/
  
  > What’s a stack based virtual machine then? It’s an abstraction of a computer, that emulates a real machine. Generally it is built as an interpreter of a special bytecode, that translates its in real time for execution on the CPU.
  
  JVM is stack-based
  
  Also possible a register based vm
  
  > structured stack machine; a machine where most computations use a stack of values, but control flow is expressed in structured constructs such as blocks, ifs, and loops

  - Stack 
  - Instructions
  - Linear Memory
  
  https://jaytaylor.com/notes/assets/6b15f756-cec3-4402-997b-d04b76acd87e-0.pdf
]

---

# WebAssembly

.right-code[
- Data Operations
  - i32: + - * / % << >> >>> etc
  - i64: + - * / % << >> >>> etc
  - f32: + - * / sqrt ceil floor
  - f64: + - * / sqrt ceil floor
  - conversions
  - load store
  - call_direct call_indirect
- Structured Control Flow
  - if loop block br switch
]

- Data Types
  - void i32 i64 f32 f64
- Functions
  - Flat, single global table
  - Static binding
  - Indirect calls through table
- State: linear memory
  - large, bounds-checked array
- Trusted execution stack

---

# JavaScript API

.hidden[
  > A JavaScript API is provided which allows JavaScript to compile WebAssembly modules, perform limited reflection on compiled modules, store and retrieve compiled modules from offline storage, instantiate compiled modules with JavaScript imports, call the exported functions of instantiated modules, alias the exported memory of instantiated modules, etc.
  
  https://webassembly.org/docs/web/
  
  http://webassembly.github.io/spec/js-api/index.html
  
  /Users/RD25XO/Developer/experiments/notes/otus/webassembly/test2.wasm
]

- `WebAssembly` object
  - `Module`, `Instance`, `Memory`, `Table`
  - `validate()` 
  - `compile()`
  - `instantiate()`

```js
var importObj = {js: {
  import1: () => console.log("hello,"),
  import2: () => console.log("world!"),
}};

fetch('demo.wasm').then(response =>
  response.arrayBuffer()
).then(buffer =>
  WebAssembly.instantiate(buffer, importObj)
).then(({module, instance}) =>
  instance.exports.f()
);
```

---

# [Modules](https://webassembly.org/docs/modules/)

> The distributable, loadable, and executable unit of code in WebAssembly

- `imports`: `js, env, table, memory`

```wamp
(module
    (import "js" "import1" (func $i1))
    (import "js" "import2" (func $i2))
    (func $main (call $i1))
    (start $main)
    (func (export "f") (call $i2))
)
```

- <a href="https://github.com/WebAssembly/design/issues/1087">🛤 ECMAScript module integration#12</a>

```
<script type="module" src="proposal.wasm"></script>
```

---

# Compile Flow

- `Emscripten` - компилятор в `WebAssembly`

```
C/C++/Rust -> AST -> Binary (.wasm) -> AST -> ...Module
```

.right-image[
  ![web assembly compile flow diagram](assets/webassembly-v8-js-vs-wasm.png)
]

.half-image[
  ![web assembly compile flow diagram](assets/web-assembly-compile-flow-diagram.png)
]

.hidden[
```mermaid
graph TD
 pending-->fulfilled
 pending-->rejected
```
> WebAssembly code in text format is serialized into an AST and compiled to the binary format (as a .wasm file), which is fetched, loaded, and utilized by a web page. When the module is loaded, the browser's JavaScript engine utilizes a decoding stack to decode the .wasm file into an AST, perform type checking, and interpret it to execute functions.
]

---

# How to Install Tools

```bash
# cmake
git clone --recursive https://github.com/WebAssembly/wabt
PATH="/Applications/CMake.app/Contents/bin":"$PATH"
cmake
# wabt
git clone --recursive https://github.com/WebAssembly/wabt
cd wabt
mkdir build
cd build
cmake ..
cmake --build .
PATH=$PATH:$(pwd)
wasm-decompile --help
# emdsk
git clone https://github.com/emscripten-core/emsdk.git
cd emsdk
git pull
./emsdk install latest
./emsdk activate latest
source ./emsdk_env.sh
```

---

# Demo

### [Different tools & formats, decompile](otus/webassembly/add.c)

> Decompiles binary wasm modules into a text format that is significantly more compact and familiar (for users of C-style languages)

```bash
wasm-decompile add.wasm -o add.dcmp
```

### [Fibonacci in c, js, and performance](otus/webassembly/fibonacci_main.js)

.right-image[
  [![wasi software architecture](./assets/wasi-software-architecture.png)](https://github.com/bytecodealliance/wasmtime/blob/master/docs/wasi-software-architecture.png)
]

### [WebAssembly System Interface (WASI)](https://github.com/bytecodealliance/wasmtime/blob/master/docs/WASI-intro.md)


### [Go Hello World](~/go/src/github.com/korzio/webassembly/wasm_exec.js)

```bash
node wasm_exec.js ./hello-world.wasm
```

---

# Real World Examples

- `ZIP` for `WebAssembly` ?!
  - [Almost](https://github.com/YuJianrong/node-unrar.js)

- [Doom 3](http://www.continuation-labs.com/projects/d3wasm/)
  - [Demo](http://wasm.continuation-labs.com/d3demo/)

### Другие примеры

- `SASS` for `WebAssembly`
- Dynamic [`Polyfills` not only for `Web`](https://developer.mozilla.org/en-US/docs/WebAssembly/existing_C_to_wasm)
- [Video / Image Filters](http://tiny.cc/webdsp)
- [Games](https://hackernoon.com/games-build-on-webassembly-3679b3962a19)

---

# Резюме

- `WebAssembly` связывает другие языки программирования с `JavaScript` и исполняется в безопасном контексте независимо от окружения. Эффективен для работы с алгоритмами и операциями с числами

- Производительный межязыковой протокол

.hidden[
  > Non-Web environments may include JavaScript VMs (e.g. node.js), however WebAssembly is also being designed to be capable of being executed without a JavaScript VM present.
]

### Материалы

.right[![web assembly](assets/web-assembly-logo.png)]

- [WebAssembly](https://webassembly.org/)

- [WebAssembly: Disrupting JavaScript - Dan Callahan](https://www.youtube.com/watch?v=7mBf3Gig9io)

- [Why we Need WebAssembly - An Interview with Brendan Eich - Eric Elliott](https://medium.com/javascript-scene/why-we-need-webassembly-an-interview-with-brendan-eich-7fb2a60b0723)

- [WebAssembly Explorer](https://mbebenita.github.io/WasmExplorer/)

.hidden[
  [Compiling for the Web with WebAssembly (Google I/O '17)](https://www.youtube.com/watch?v=6v4E6oksar0)
]

---

class: title

## .center[Q&A --> О Курсе]

---

background-image: linear-gradient(150deg,rgb(142, 81, 208),rgb(174, 132, 207)), url(static/t0.gif)

class: profile
# Преподаватели+

- **Александр Коржиков**

JavaScript @ Alpari, Comindware, Tinkoff, Backbase, ING  
korzio@gmail.com https://github.com/korzio
  
- **Юрий Дворжецкий**

Java, JavaScript @ Luxoft  
Teaching @ 1500+ hours, 600+ developers

- **Михаил Кузнецов**

FullStack @ ING
https://github.com/shershen08

- **Никита Овчинников** 

EPAM Systems, Skywind Group 

- **Нас больше!**

---

# Modern JavaScript Frameworks

| ![JS](assets/icons/trim/js.png) | ![Web Components](assets/icons/trim/webcomponents.png) | ![Node](assets/icons/trim/node.png) | ![Vue](assets/icons/trim/vue.png) | ![React](assets/icons/trim/react.png) | ![Angular](assets/icons/trim/angular.png) |
|:-------------:|:-------------:|:-------------:|:-------------:|:-------------:|:-------------:|
| ![Google Chrome](assets/icons/trim/google_chrome.png) | ![ts](assets/icons/trim/ts.png) | ![v8](assets/icons/trim/v8.png) | | ![redux](assets/icons/trim/redux.png) | ![rxjs](assets/icons/trim/rxjs.png) |
| ![NPM](assets/icons/trim/npm.png) | ![svelte](assets/svelte.png) | ![Express](assets/icons/trim/express.png) | | ![react-router](assets/icons/trim/react-router.png) | |
|  | ![polymer](assets/icons/trim/polymer.png) | ![GraphQL](assets/icons/trim/graphql.png) |

---

class: title

## .center[Q&A О Курсе]

---

class: title

.right.bottom[
  ### 19 июня 2020
]

## Спасибо за внимание!
### Пожалуйста, пройдите [опрос](https://otus.pw/2DIY/)

.hidden[
  https://flaviocopes.com/webassembly/
  
  https://hacks.mozilla.org/author/lclarkmozilla-com/
  
  https://arxiv.org/pdf/1901.09056.pdf

  https://codelabs.developers.google.com/codelabs/web-assembly-intro/index.html#0
  
  https://www.w3.org/TR/wasm-core-1/
]