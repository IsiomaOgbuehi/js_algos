// use hash map to instantly check for difference value, map will add index of last occurrence of a num, don’t use same element twice
/**
 * Given an arary of integers, return indices of the two numbers such that they add up
 * to a specific target
 * 
 * You may assume that each input would have exactly one solution and you may not use 
 * the same element twice.
 * 
 * Example:
 * 
 * Given nums = [2, 7, 11. 15], target = 9
 * Because nums[0] + nums[1] = 2 + 7 = 0
 * return [0, 1]
 */

const getIndices = (inputArray: number[], target: number): number[] => {
    let indicesArray: number[] = []
    let mapCheck: Map<number, number> = new Map()

    for(let i=0; i < inputArray.length; i++) {
        const targetSub = target - inputArray[i]
        
        if(mapCheck.has(targetSub)) {
            const match = mapCheck.get(targetSub)!

            indicesArray.push(match, i)
            break
        }
        mapCheck.set(inputArray[i], i)
    }

    return indicesArray
}

const test = getIndices([2,1,5,3], 4)  // [2, 7, 11, 15], 9
console.log(test)