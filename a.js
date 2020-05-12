function reverse(head, k) {
  let count = 0

  const p = _reverse(head)

  function _reverse(head) {
    if (head === null || head.next === null) {
      return head
    }
    const reversedNode = _reverse(head.next)
    if (count === k) {
      count = 0
      // 
    } else {
      count ++
      head.next.next = head
      head.next = null
      return reversedNode
    }
  }
  return p
}


const head = {
  id: 1,
  next: {
    id: 2,
    next: {
      id: 3,
      next: {
        id: 4,
        next: null
      }
    }
  },
}
console.log('result:', reverse(head, 2))
