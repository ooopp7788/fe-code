function quickSort(arr) {
  const len = arr.length
  if (len <= 1) {
    return arr
  }
  const mid = parseInt(len / 2)
  const leftArr = []
  const rightArr = []
  let i = 0
  while(i < len) {
    if (i !== mid) {
      const n = arr[i]
      if (n <= arr[mid]) {
        leftArr.push(n)
      } else {
        rightArr.push(n)
      }
    }
    i ++
  }

  return [
    ...quickSort(leftArr),
    arr[mid],
    ...quickSort(rightArr),
  ]
}

// console.log(quickSort([50,1,20,3923,3829,28,13,29]))

function bubbleSort(arr) {
  for(let j = 0, l = arr.length; j < l; j ++) {
    for(let i = 0, k = l - j; i < k; i ++) {
      const n = arr[i]
      const m = arr[i + 1]
      if (n > m) {
        swap(arr, i, i + 1)
      }
    }
  }
  return arr
}
function swap(arr, n, m) {
  const temp = arr[n]
  arr[n] = arr[m]
  arr[m] = temp
  return arr
}
// console.log(bubbleSort([50,1,20,3923,3829,28,13,29]))

function recusiveSort(arr) {
  const l = arr.length
  if (l <= 1) {
    return arr
  }
  const mid = parseInt(arr.length / 2)
  return orderedSort(recusiveSort(arr.slice(0, mid)), recusiveSort(arr.slice(mid)))
}
function orderedSort(arr1, arr2) {
  let i = 0
  let j = 0
  let k = arr1.length
  let l = arr2.length

  if (l === 0 || k === 0) {
    return [
      ...arr1,
      ...arr2,
    ]
  }
  let result = []
  while(i < k || j < l) {
    const n = arr1[i] === undefined ? Infinity : arr1[i]
    const m = arr2[j] === undefined ? Infinity : arr2[j]

    if (n <= m) {
      result.push(n)
      i ++
    } else {
      result.push(m)
      j ++
    }
  }
  return result
}
console.log(recusiveSort([50,1,20,3923,3829,28,13,29]))


function heapSort(arr) {
  for(let i = Math.floor((arr.length / 2) - 1); i >= 0; i --) {
    heapify(arr, i, arr.length)
  }
  for(let l = arr.length - 1; l > 0; l --) {
    swap(arr, 0, l)
    heapify(arr, 0, l)
  }
  return arr
}

function heapify(arr, n, len) {
  const left = 2 * n + 1
  const right = 2 * n + 2
  let largest = n

  if (left < len && arr[left] > arr[largest]) {
    largest = left
  }
  if (right < len && arr[right] > arr[largest]) {
    largest = right
  }
  if (largest !== n) {
    swap(arr, largest, n)
    heapify(arr, largest, len)
  }
}

console.log(heapSort([50,1,20,3923,3829,28,13,29]))