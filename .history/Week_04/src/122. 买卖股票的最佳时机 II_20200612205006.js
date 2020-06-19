/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    let profit = 0;
     for (let i = 0; i < prices.length - 1; i++) {
       if (prices[i + 1] > prices[i]) profit += prices[i + 1] - prices[i];
     }
     return profit;
   };

   let prices = [1,2,3,4,5];
   maxProfit(prices);