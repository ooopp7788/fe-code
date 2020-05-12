function cachePromise(fn) {
  let cachedPromise = null
  return function() {
    if (!cachedPromise) {
      cachedPromise = fn(...arguments)
    }
    return cachedPromise
  }
}

function someRequest(param) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log('timer')
      res(Math.random() + param)
    }, 2000)
  })
}

const cachedRequest = cachePromise(someRequest)

cachedRequest(11).then((res) => {
  console.log(1, res)
})
cachedRequest(22).then((res) => {
  console.log(2, res)
})
cachedRequest(33).then((res) => {
  console.log(3, res)
})

