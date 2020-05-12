
function all(fns, num) {
  const begin = fns.slice(0, num + 1)
  let count = num + 1
  return Promise.all(begin.map((fn, index) => {
    return next(fn, index).catch((err) => {
      throw err
    })
  }))

  function next(fn, index) {
    if (fn) {
      return fn().then((res) => {
        count ++
        const nextFn = fns.shift()
        return next(nextFn, count).then((nextRes) => {
          return {
            [index]: res,
            ...nextRes,
          }
        })
      })
    } else {
      return Promise.resolve({})
    }
  }
}

fns = Array(10).fill(3000 * Math.random()).map((timeout) => {
  return () => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(1)
      }, 1000);
    })
  }
})

all(fns, 5).then((res) => {
  console.log(res)
})


function map(arr, fn) {
  if (arr.length === 0) {
    return []
  } else {
    const first = arr.shift()
    return [fn(first), ...map(arr, fn)]
  }
}

console.log(map([1,2,3], (n) => n + 3))