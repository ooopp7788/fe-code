function compose(...fns) {
    if (fns.length === 0) throw new Error()
    else if (fns.length === 1) return fns[0]
    const [fn, ...rest] = fns
    return function() {
        return compose(...rest)(fn(...arguments))
    }
}

function add1 (n) {
    return n + 1
}

function plus10 (n) {
    return n * 10
}

function minus5 (n) {
    return n - 5
}

function divide2 (n) {
    return n / 2
}

f = compose(add1, plus10, minus5, divide2)

console.log(f(5))