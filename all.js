function all(promises) {
  let pendingCalls = promises.length
  let result = Array(pendingCalls)
  return new Promise((resolve, reject) => {
    for(let i = 0, l = promises.length; i < l; i ++) {
      const p = promises[i]
      p.then((response) => {
        result[i] = response
        pendingCalls --
        if (pendingCalls === 0) {
          resolve(result)
        }
      }, (err) => {
        reject(err)
      })
    }
  })
}


all([Promise.resolve(1), Promise.resolve(2)]).then((res) => {
  console.log(res)
})

