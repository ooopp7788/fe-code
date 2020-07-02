const target = {
    testKey: 'keykeykey',
    nested: {
        name: 'iuj'
    }
}

const p = new Proxy(target, {
    get(target, key) {
        console.log('getter:', target, key)
        return target[key]
    },
    set(target, key, val) {
        console.log('setter:', target, key, val)
        target[key] = val
    }
})

console.log(p.testKey)
p.testKey = 'ksuiadjia'

console.log(p.nested.name)

p.toString()

