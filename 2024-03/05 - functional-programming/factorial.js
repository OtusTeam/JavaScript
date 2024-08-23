const memo = (fn, cache = new Map()) => (...params) => {
  if (!cache.has(params)) {
    cache.set(params, fn(...params))
  }

  return cache.get(params)
}

// const fetchMemo = memo((params) => fetch(...params))
const fetchMemo = memo(fetch)

// const abortController = new AbortController()
const params1 = ['/api', { method: 'HEAD' }]
const params2 = ['/api', { method: 'HEAD' }]

// abortController.abort()

await fetchMemo(params1) // fetchMemo(params1[0], params1[1])
await fetchMemo(params1) // fetchMemo(params1[0], params1[1])
await fetchMemo(params2) // fetchMemo(params1[0], params1[1])

//
