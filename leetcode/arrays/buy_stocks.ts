// find local min and search for local max, sliding window
/**
 * Say you have an array for which the ith element is the price of a given stock on day i.
 * 
 * If you were only permitted to complete at most one transaction(ie, buy one and sell
 * one share of the stock), design an algorithm to find the maiximum profit.
 * 
 * Note that you cannot sell a stock before you buy one
 */

const stockProfit = (stocks: number[]): number => {
    let profit = 0
    let left = 0, right = 1
    let maxPrice = 0

    while(right < stocks.length) {
        if(stocks[left] < stocks[right]) {
            profit = stocks[right] - stocks[left]
            maxPrice = maxPrice > profit ? maxPrice : profit
        } else {
            left = right
        }
        right += 1
    }
    return maxPrice
}

console.log(stockProfit([7,1,5,3,6,4]))