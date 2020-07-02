function throtlle(fn, time) {
  let timer = null
  return function() {
    if (!timer) {
      timer = setTimeout(() => {
        fn(...arguments)
        timer = null
      }, time)
    }
  }
}


function throtlleDecorator(target, key, descriptor) {
  console.log(1, target, key, descriptor)
  const fn = descriptor.value
  descriptor.value = throtlle(fn)
  return descriptor
}

function classDecorator(target, key, descriptor) {
  console.log(2, target, key, descriptor)
  target.prototype.say = function() {
      console.log('say hi')
  }
  return descriptor
}

@classDecorator
class A {
  @throtlleDecorator
  fn() {
    console.log('sec')
  }
}

const inst = new A()
inst.say()