function all(promiseArr) {
  let count = 0
  let result = Array(promiseArr.length)
  return new Promise((resolve, reject) => {
    promiseArr.forEach((p, index) => {
      p.then((res) => {
        count ++
        result[index] = res
        if (count === promiseArr.length) {
          resolve(result)
        }
      }).catch((err) => {
        reject(err)
      })
    })
  })
}