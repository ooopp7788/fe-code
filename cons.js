function cons(a, b) {
    return function dispatch(n) {
        switch(n) {
            case 0:
                return a;
            case 1:
                return b;
            default:
                throw new Error('Error')
        }
    }
}

function car(m) {
    return m(0)
}

function cdr(m) {
    return m(1)
}


const m = cons(1, 2)

console.log(car(m))
console.log(cdr(m))