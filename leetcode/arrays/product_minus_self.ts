/**
 * Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

Difficulty: Medium
 */

const productExceptSelf = (nums: number[]): number[] => {
    let outputArray: number[] = Array(nums.length).fill(1)
    /* 
    Populate output array with prefix values: Move one step forward with default value of
    1 in first array. 
    */
   let prefixValue = 1
    for(let i=0; i<nums.length; i++) {
        // if(i > 0) {
        //     prefixValue = prefixValue * nums[i]
        // }
        // outputArray.push(prefixValue)
        outputArray[i] = prefixValue
        prefixValue *= nums[i]
    }
    console.log(outputArray)

    let postfixValue = 1
    // let postfix = 1
    for (let i = nums.length - 1; i >= 0; i--) {
      // if(i < nums.length - 1) {
      //     postfix = i + 1
      //     outputArray[i] = postfixValue * outputArray[i]
      //     postfixValue = nums[i] * postfixValue
      // } else {
      //     postfixValue = nums[nums.length - 1]
      // }
      outputArray[i] *= postfixValue
      postfixValue *= nums[i]
    }
    return outputArray
}

console.log(productExceptSelf([-1, 1, 0, -3, 3]))