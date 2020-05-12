function binarySearch(arr, n, i = 0, j = arr.length - 1) {
  if (i >= j) {
    if (arr[j] === n) {
      return peek(arr, j, n)
    } else {
      return -1
    }
  } else {
    const mid = Math.floor((j - i + 1) / 2) + i
    console.log(i, j, mid)
    if (arr[mid] === n) {
      return peek(arr, mid, n)
    } else if(arr[mid] < n) {
      return binarySearch(arr, n, mid + 1, j)
    } else {
      return binarySearch(arr, n, 0, mid - 1)
    }
  }
}

function peek(arr, i, n) {
  while(arr[i + 1] === n) {
    i ++
  }
  return i
}

console.log(binarySearch([1,2,3,4,4,4,4,4,4,5,5,6,7], 7))