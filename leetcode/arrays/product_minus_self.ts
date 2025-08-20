/**
 * Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

Difficulty: Medium
 */

const productExceptSelf = (nums: number[]): number[] => {
    let outputArray = Array(nums.length).fill(1)

    let prefix = 1
    for(let i=0; i<nums.length; i++) {
      outputArray[i] = prefix
      prefix *= nums[i]
    }

    let suffix = 1
    for(let i=nums.length - 1; i>=0; i--) {
      outputArray[i] *= suffix
      suffix *= nums[i]
    }

    return outputArray.map(x => Object.is(x, -0) ? 0 : x)
}

console.log(productExceptSelf([-1,1,0,-3,3]))