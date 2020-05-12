function throttle(fn, time) {
  let timer = null
  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn(...args)
    }, time)
  }
}

function baz(msg) {
  console.log('baz:', msg)
}

// const throttleBaz = throttle(baz, 1000)


function debounce(fn, time) {
  let timer = null
  return function(...argv) {
    if (!timer) {
      fn(...argv)
      timer = setTimeout(() => {
        timer = null
      }, time)
    }
  }
}

const debounceBaz = debounce(baz, 1000)

debounceBaz('msg1')
debounceBaz('msg2')
setTimeout(debounceBaz, 500, 'msg3')
setTimeout(debounceBaz, 1000, 'msg4')
setTimeout(debounceBaz, 3000, 'msg5')