function getObj() {
  return Math.random() > 0.5
    ? {
        name: 'Bob' as const,
        drink: () => 'beer',
      }
    : {
        name: 'Alica' as const,
        rest: () => 'dance',
      }
}

const obj = getObj()

// obj.rest()
// obj.drink()

if (obj.name === 'Bob') {
  obj.drink()
} else {
  obj.rest()
}

const ids = new Map<number, {}>()
ids.set(1, {})
ids.set(2, {})
ids.set(3, {})

const user = ids.get(3)
if (user) {
  console.log(user)
}

function padLeft(value: string, padding: string | number) {
  if (typeof padding === 'number') {
    return Array(padding + 1).join(' ') + value
  }
  if (typeof padding === 'string') {
    return padding + value
  }
  throw new Error(`Expected string or number, got '${padding}'.`)
}
