const ZERO = (f) => (x) => x
const ONE  = (f) => (x) => f(x)
const TWO  = (f) => (x) => f(f(x))

const F = (x) => (y) => x
const T = (x) => (y) => y

// const Y = 

const fact = (n) => {
  if (n === 0) {
    return 1
  } else {
    return n * fact(n - 1)
  }
}

// console.log(fact(5))

const fact1 = (n, f) => {
  if (n === 0) {
    return 1
  } else {
    return n * f(n - 1, f)
  }
}

// console.log(fact1(5, fact1))

const fact2 = (f) => {
  return (n) => {
    if (n === 0) {
      return 1
    } else {
      return n * f(f)(n - 1)
    }
  }
}

// console.log(fact2(fact2)(5))

const g = (h) => {
  return (n) => {
    if (n === 0) {
      return 1
    } else {
      return n * h(n - 1)
    }
  }
}

const q = (f) => {
  return (n) => {
    return g(f(f))(n)
  }
}

console.log(q(q)(5))


const Y = q(q)

Y(5)
