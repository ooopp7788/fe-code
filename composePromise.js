function compose(middlewares) {
  return function(ctx) {
    dispacth(0)
    function dispacth(i) {
      if (i < middlewares.length) {
        const current = middlewares[i]
        return current(ctx, dispacth(i + 1))
      } else {
        return Promise.resolve()
      }
    }
  }
}