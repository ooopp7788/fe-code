function* producer(lo, hi) {
  while (lo < hi) {
    yield lo++;
  }
}

const g = producer(0, 5)
console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log(g.next())

let a = 1
console.log(a++)