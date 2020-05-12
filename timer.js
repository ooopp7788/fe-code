function count(sec) {
  const start = Date.now()
  let a = 1000
  while(a --) {
    const m = 123123* 123 & 10
  }
  const end = Date.now()
  if (sec !== 0) {
    setTimeout(() => {
      console.log(sec, end - start, end - t0)
      count(--sec)
    }, 1000 - (end - start))
  }
}

const t0 = Date.now()
count(3)