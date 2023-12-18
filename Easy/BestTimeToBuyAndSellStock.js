// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.
 

// Constraints:

// 1 <= prices.length <= 105
// 0 <= prices[i] <= 104
//-----------Pseudocode : 
// @input : array of numbers 
// @output : number maximum profit. 
// We are going to use Greedy algorithm, called One pass approach. 
// We need 2 variables here one for holding the LowestProfit, and one for holding the maxProfit.
// the lowestProfit  will get the Infinity value and maxProfit gets the 0 value. 
// We initialize for loop, inside the for loop we check if the current number is lower than the lowest, we assign it to lowest, 
//outside of our conditional, we calculate the potential profit, which is the current number minus the lowest, and if the potentialProfit is higher than the maxProfit, maxProfit will get the value of potentialProfit, and once the loop is over, we have the maxProfit and we can return it. 

function maxProfit(prices){
    let lowestProfit = Infinity;
    let maxProfit = 0
    for(let i=0; i < prices.length; i++){
        if(prices[i] < lowestProfit){
            lowestProfit = prices[i]
        }
        let potentialProfit = prices[i] - lowestProfit;
        if(potentialProfit > maxProfit){
            maxProfit = potentialProfit
        }
    }
    return maxProfit;
}
console.log(maxProfit([7,1,5,3,6,4]))
console.log(maxProfit([7,6,4,3,1]))

