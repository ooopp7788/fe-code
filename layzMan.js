function LazyMan(name) {
  const inst = new _LazyMan(name)
  return inst
}

class _LazyMan {
  constructor(name) {
    this.mws = []
    this.mws.push(() => {
      console.log('this is ' + name)
    })
    this.runMws()
  }

  eat(name) {
    this.mws.push(() => {
      console.log('eat ' + name)
    })
    return this
  }

  sleep(time) {
    this.mws.push(() => {
      return new Promise((res, rej) => {
        setTimeout(() => {
          console.log(`after ${time} sec`)
          res()
        }, time * 1000)
      })
    })
    return this
  }

  sleepFirst(time) {
    this.mws.unshift(() => {
      return new Promise((res, rej) => {
        setTimeout(() => {
          console.log(`after ${time} sec`)
          res()
        }, time * 1000)
      })
    })
    return this
  }

  runMws(p = Promise.resolve()) {
    const { mws } = this
    if (mws.length) {
      return p.then(() => {
        const mw = mws.shift()
        return this.runMws(mw())
      })
    } else {
      return p
    }
  }
}


const inst = LazyMan("Hank")
inst.eat("breakfast").sleep(3).eat("dinner").sleepFirst(5)

// 实现一个LazyMan，可以按照以下方式调用:
// LazyMan("Hank")
// Hi! This is Hank!
//  
// LazyMan("Hank").sleep(10).eat("dinner")
// Hi! This is Hank!
// //等待10秒..
// Wake up after 10
// Eat dinner~
