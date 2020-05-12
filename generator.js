function *gen(n) {
  const y = yield Promise.resolve(n + 2)
  
}

const g = gen(5)
const result =  g.next(1)
console.log(result)