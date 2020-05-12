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
  // console.log(1, target, key, descriptor)
  console.log(descriptor)
  const fn = descriptor.value
  descriptor.value = throtlle(fn)
  return descriptor
}

function classDecorator(target, key, descriptor) {
  console.log(2, target, key, descriptor)
  return descriptor
}

@classDecorator
class A {
  @throtlleDecorator
  fn() {
    console.log('sec')
  }
}
