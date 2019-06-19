# Static Keyword

.TODO[
  static in ES6
]

---

# Object.defineProperty

- obj - объект применения
- prop - имя свойста
- descriptor - описание свойства

```
var obj = {}
var descriptor = { /* TBD */ }

Object.defineProperty(
  obj, 
  'prop', 
  descriptor
)
```

- `Object.defineProperties()`
- `Object.create()`

---

# Descriptors

- `configurable, enumerable, value, writable` - свойства доступа

```
Object.defineProperty(obj, 'prop', { 
  configurable: false,
})
Object.defineProperty(obj, 'prop', { 
  configurable: true 
})

// Uncaught TypeError: Cannot redefine property: prop1
```

---

# Descriptors

- `configurable, enumerable, value, writable` - свойства доступа
- `get, set` - функции доступа

```
var descriptor = { 
  get: function() { return 1 },
  set: function() {},
  value: 2,
}

// Uncaught TypeError: Invalid property descriptor. 
// Cannot both specify accessors and a value or writable attribute
```

---

# Самостоятельная работа

Использовать `Object.defineProperty()` для хранения и получения значений объекта

```
a.b // 1
a.b = 4 // 1 + 4
a.b // 5
```

---

# Getter / Setter

```
// get prop() {} 
// set prop(p) {}

// on object / prototype
var descriptor = { 
  get value() { return 1 },
  set value(param) {},
}

class Example { 
  get hello() { 
    return 'world' 
  }
}
```

---