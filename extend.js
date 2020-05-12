function SuperClass (name) {
  this.name = name
}

SuperClass.prototype.say = function() {
  console.log('hi,', this.name)
}

function Sub(name, age) {
  this.age = age
  SuperClass.call(this, name)
}

Sub.prototype.__proto__ = SuperClass.prototype

Sub.prototype.__proto__.constructor = Sub

Sub.prototype.hi = function() {
  console.log(this.age)
}

const inst = new Sub('lmj', 22)
console.log(inst)


// function extend(Sub, Super) {
//   Sub.prototype.__proto__ = Super.prototype
//   Sub.prototype.__proto__.constuctor = Sub

//   const Ctor = function(options) {
//     Sub.call(this, options)
//     Super.call(this, options)
//   }

//   Ctor.prototype = Sub.prototype
//   Ctor.prototype.__proto__ = Super.prototype
//   Ctor.prototype.__proto__.constuctor = Sub

//   return Ctor
// }


// const Sub = function({name}) {
//   this.name = name
// }

// Sub.prototype.say = function() {
//   console.log('hi:', this.name)
// }


// const Super = function({ age }) {
//   this.age = age
// }

// Super.prototype.hello = function() {
//   console.log('hello:', this.age)
// }

// const Ctor = extend(Sub, Super)

// const inst = new Ctor({ name: 'lmj', age: 15 })
// console.log(inst)


function newClass(Ctor, options) {
  const inst = {}

  inst.__proto__ = Ctor.prototype
  Ctor.call(inst, options)

  return inst
}

// a = newClass(Object, {a: 1})