function Symbol(str) {
  if (this instanceof Symbol) throw new Error('Symbol is not a Constructor')

  
}


function generateKey() {
  let symbolMap = {}
  return function() {
    const key = Math.random()
    return 
  }
}