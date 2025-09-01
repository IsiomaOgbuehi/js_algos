/*
Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

[4,5,6,7,0,1,2] if it was rotated 4 times.
[0,1,2,4,5,6,7] if it was rotated 7 times.
Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums of unique elements, return the minimum element of this array.

You must write an algorithm that runs in O(log n) time.

 

Example 1:

Input: nums = [3,4,5,1,2]
Output: 1
Explanation: The original array was [1,2,3,4,5] rotated 3 times.
Example 2:

Input: nums = [4,5,6,7,0,1,2]
Output: 0
Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.
Example 3:

Input: nums = [11,13,15,17]
Output: 11
Explanation: The original array was [11,13,15,17] and it was rotated 4 times. 
*/

// Applying Binary sort algorithm

const minimumSortedArray = (nums: number[]): number => {
  let left = 0, right = nums.length - 1

  while(left < right) {
    const mid = Math.floor((left + right) / 2)

    if(nums[mid] > nums[right]) {
      left = mid + 1
    } else {
      right = mid
    }
  }

  return nums[left]
}

// console.log(minimumSortedArray([11,13,15,17]))


/**
 * 
 * @param nums 
 * @param target 
 * @returns 
 
There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly left rotated at an unknown index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be left rotated by 3 indices and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
Example 3:

Input: nums = [1], target = 0
Output: -1

 */

const searchRotatedSortedArray = (nums: number[], target: number): number => {
  let left = 0, right = nums.length - 1

  while(left <= right) {
    const mid = Math.floor((left + right) / 2)

    if(nums[mid] === target) return mid

    // Check if left is sorted
    if(nums[left] <= nums[mid]) {
      // Check if target is in sorted left side
      if(nums[left] <= target && target < nums[mid]) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    } else {
      // Check if target is in sorted right side
      if(nums[mid] < target && target <= nums[right]) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
  }
  return -1
}

console.log(searchRotatedSortedArray([4,5,6,7,0,1,2], 1))