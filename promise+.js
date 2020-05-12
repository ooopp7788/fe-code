function Promise(fn) {
  this.state = 0 // pending

  this.defer = []

  this.value = null
  this.reason = null

  fn((value) => {
    resolve(this, value)
  }, (value) => {
    reject(this, reason)
  })
  
}

function resolve(self, value) {
  
}

function reject() {

}

