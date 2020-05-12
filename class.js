class C1 {
  constructor() {
    this.name = 'name'
  }

  say() {
    console.log('say!')
  }
}

function C2() {
  this.age = 'age'
}

Object.defineProperty(C2.prototype, 'sayHi', {
  value: function() {
    console.log(this.age)
  },
  writable: false,
  enumerable: false,
  configurable: false,
})