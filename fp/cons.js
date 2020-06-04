function cons(e1, e2) {
    return function(n) {
        if (n === 0) {
            return e1;
        } else if (n === 1) {
            return e2;
        }
    }
}

function car(c) {
    return c(0)
}

function cdr(c) {
    return c(1)
}

c = cons(0, cons(1, cons(2, null)))
console.log(c)
console.log(car(c))
console.log(car(cdr(c)))
console.log(car(cdr(cdr(c))))
