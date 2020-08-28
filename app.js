function noEmpty(any) {
    if (Array.isArray(any)) {
        return any.length > 0;
    }
    return any === 0 || !!any;
}

function test(arr) {
    arr.forEach((any) => {
        console.log('data: ', any, 'noEmpty(any) = ', noEmpty(any))
    })
}
test([
    NaN,
    0,
    Infinity,
    -Infinity,
    null,
    undefined,
    {},
    [],
    [''],
    [0],
    '',
    ' ',
    '0',
    'null'
])