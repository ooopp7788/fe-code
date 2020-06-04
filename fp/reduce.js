[1, 2, 3].reduce(fn, begin)

// 左结合
[2, 3].reduce(fn, fn(begin, 1))
[3].reduce(fn, fn(fn(begin, 1), 2))
fn(fn(fn(begin, 1), 2), 3)

function reduceRight(list, fn, begin) {
    if (list.length === 0) return begin;
    return fn(list[0], reduceRight(list.slice(1), fn, begin))
}