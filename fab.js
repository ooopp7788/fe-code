function fabRecrusive(n) {
    if (n === 0) return 1
    return n * fabRecrusive(n - 1)
}

function fab(n, acc = 1) {
    if (n === 0) return acc
    return fab(n - 1, acc * n)
}

console.log(fabRecrusive(5))
console.log(fab(5))