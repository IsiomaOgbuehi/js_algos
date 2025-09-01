/*
Given an integer array nums, find the subarray with the largest sum, and return its sum.

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.
Example 2:

Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.
Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.

Also, convert to returning the array and largest sum 
*/

type IResult = {
    maxAmount: number
    maxArray: number[]
}

const maxSubArray = (nums: number[]): IResult => {
    let currentMax = nums[0]
    let maxAmount = nums[0]
    let start = 0
    let bestStart: number = 0, bestStop: number = 0

    for(let i=1; i<nums.length; i++) {
        // currentMax = Math.max(nums[i], nums[i] + currentMax)
        // maxAmount = Math.max(maxAmount, currentMax)
        if(nums[i] > currentMax + nums[i]) {
            start = i
            currentMax = nums[i]
        } else {
            currentMax += nums[i]
        }

        if(currentMax > maxAmount) {
            maxAmount = currentMax
            bestStart = start
            bestStop = i
        }
    }

    return {maxAmount : maxAmount, maxArray: nums.slice(bestStart, bestStop + 1)}
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))