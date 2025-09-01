/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
*/


const threeSum = (nums: number[]): number[][] => {
    let result: number[][] = []
    let mapResult: Map<number[], number> = new Map()

    // if(nums.length >= 3) {
    //     for(let i=1; i<nums.length; i++) {
    //         const a = nums[i-1]
    //         const b = nums[i]
    //         const c = nums[i+1]
    //         if((a + b + c) === 0) {
    //             const newFound = [a, b, c].sort((a, b) => a - b)
    //             mapResult.set(newFound, mapResult.get(newFound) ? mapResult.get(newFound)! + 1 : 1)
    //         }
    //     }
    // }

    // Sort array
    nums.sort((a, b) => a - b)

    for(let i=0; i<nums.length - 2; i++) {
        // Prevent Duplicates
        if(i > 0 && nums[i] === nums[i - 1]) {
            continue
        }

        // Set Left and Right Values
        let left = i + 1
        let right = nums.length - 1
        const currentNum = i

        // Loop with i on other array items
        while(left < right) {
            const sum = nums[left] + nums[currentNum] + nums[right]

            if(sum === 0) {
                // Add new array
                result.push([nums[left], nums[currentNum], nums[right]])

                // Skip all duplicates for left
                while(left < right && nums[left] === nums[left + 1]) {
                    left++
                }

                // Skip all duplicates for right
                while(left < right && nums[right] === nums[right - 1]) {
                    right--
                }

                left++
                right--
            } else if(sum < 0) {
                left++
            } else {
                right--
            }
        }
    }
    return result
}

console.log(threeSum([-1,0,1,2,-1,-4]))