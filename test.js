Array.prototype.flat = function(deep = 1) {
    const arr = this;
    if (deep === 0) {
        return arr;
    }
    return arr.reduce((acc, cur) => {
        if (Array.isArray(cur)) {
            return [
                ...acc,
                ...cur.flat(deep - 1),
            ]
        } else {
            return [
                ...acc,
                cur
            ]
        }
    }, [])
}

console.log([1, [2, 3, 4, 5], [12, [3, [999, 91283], 0, 19]]].flat())