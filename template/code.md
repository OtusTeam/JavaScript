---

class: middle
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