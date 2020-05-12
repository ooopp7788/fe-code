let cachedMap = new Map()

function cloneDeep(obj) {
  if (obj instanceof Object) {
    const type = Object.prototype.toString.call(obj)
    switch (type) {
      case '[object Object]':
        if (cachedMap.get(obj)) {
          return obj
        }
        cachedMap.set(obj, 1)
        return Object.keys(obj).map((key) => cloneDeep(obj[key]))
      case '[object Array]':
        if (cachedMap.get(obj)) {
          return obj
        }
        cachedMap.set(obj, 1)
        return obj.map((item) => cloneDeep(item))
      default:
        return obj
    }
  } else {
    return obj
  }
}
