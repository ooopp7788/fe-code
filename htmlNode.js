function calulateNode(node) {
  let children = []

  if (node.tagName === 'IFRAME') {
    children = [node.contentWindow.document]
  } else {
    children = node.children
  }

  if (children) {
    console.log(children)
    return Array.prototype.reduce.call(children, (begin, childNode) => {
      return begin + calulateNode(childNode)
    }, 1 + children.length)
  } else {
    return 1
  }
}