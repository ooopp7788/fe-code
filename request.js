
const MAX_COUNT = 2


function requestAll(urls) {
  let pendingUrls = urls.splice(0, MAX_COUNT)

  return new Promise((resolve, reject) => {
    pendingUrls.forEach((url) => {
      return get(url).then((response) => {
        if (requestRecusive()) {
          resolve()
        }
      })
    })
  })

  function requestRecusive() {
    if (urls.length) {
      const [url, ...rest] = urls
      get(url).then(() => {
        requestRecusive()
      })
      urls = rest
      return false
    } else {
      return true
    }
  }
}

function get(url) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log('url: ', url, 'end:', Date.now() - t0)
      res(url)
    }, 1000 * url)
  })
}

const t0 = Date.now()
requestAll([1,2,3,4,5]).then(() => {
  console.log('end:', Date.now() - t0)
})