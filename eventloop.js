console.log(1)
setTimeout(() => {
  console.log(4)
}, 0)
requestAnimationFrame(() => {
  console.log(3)
})
setTimeout(() => {
  console.log(0)
}, 0)
Promise.resolve().then(() => {
  console.log(2)
})
