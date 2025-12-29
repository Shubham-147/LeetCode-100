var maxProfit = function(prices) {
  let min = prices[0], profit=0;
  for(let i = 1;i<prices.length; i++){
    const pr = prices[i]-min;
    if(pr > profit) profit = pr;
    if(prices[i] < min && i <prices.length -1) min = prices[i]
  }
  return profit
};

console.log(maxProfit([7,6,4,3,1]))