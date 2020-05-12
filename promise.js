(async function() {
  const r5 = await Promise.race([    Promise.resolve('Resolve'),     Promise.reject('Reject')  ])  // Resolve
  console.log(r5)

  const r6 = await Promise.race([    Promise.resolve('Resolve'),     Promise.reject('Reject')  ])  // Resolve
  console.log(r6)

  const r7 = await Promise.race([    Promise.reject('Reject'),     Promise.resolve('Resolve')  ])    .catch(e => e)  // Reject
  console.log(r7)

  const r8 = Promise.race([    Promise.reject('Reject'),     Promise.resolve('Resolve')  ])
      // ???
  r8.then(res => {
    console.log(1, res)
  }, e => {
    console.log(2, e)
  })
})()