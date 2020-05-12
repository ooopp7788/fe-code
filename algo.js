/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  if (nums.length === 0) {
      return false
  }
  console.log(nums)
  var mid = parseInt(nums.length / 2)
  if (nums[mid] === target) {
      var left = mid
      var right = mid
      while (left) {
          if (nums[left - 1] === target) {
              left--
          } else {
              break;
          }
      }

      while (right < nums.length) {
          if (nums[right + 1] === target) {
              right++
          } else {
              break;
          }
      }
      return [left, right]
  } else if (nums[mid] < target) {
      let r = searchRange(nums.slice(mid + 1), target)
      return r && r.map(i => i + mid + 1)
  } else {
      let r = searchRange(nums.slice(0, mid), target)
      return r && r.map(i => i + mid + 1)
  }
};

console.log(searchRange([1,1,1,2,3,4,5,6,7,8], 9))