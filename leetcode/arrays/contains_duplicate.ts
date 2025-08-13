/**
 * Given an integer array nums, return true if any value appears at least twice in the array, 
 * and return false if every element is distinct.
 */

const containsDuplicate = (arr: number[]): boolean => {
    let isDuplicate = false
    let arrayMap: Map<number, number> = new Map()

    for(let i=0; i<arr.length; i++) {
        const value = arrayMap.get(arr[i]) ? arrayMap.get(arr[i])! + 1 : 1
        arrayMap.set(arr[i], value)

        if (arrayMap.get(arr[i]) && arrayMap.get(arr[i]) === 2) {
          isDuplicate = true
          break
        }
    }

    return isDuplicate
}

console.log(containsDuplicate([1, 2, 3, 1]))