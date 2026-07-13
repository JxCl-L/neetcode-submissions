class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        // let lowest  = 0;
        // let left = 0;
        // let right = prices.length-1;
        // let buy = prices[0], sell = prices[right];
        // while(left<right){
        //     if(prices[left]<buy){
        //         buy=prices[left];

        //     }
        //     if(prices[right]>sell){
        //         sell=prices[right];
        //     }
        //     if(prices[left+1]-prices[left]>prices[right]-prices[right-1]){
        //         right--;
        //     }else{
        //         left++;
        //     }
        //     // left++;
        //     // right--;
        // }
        // return Math.max(sell-buy, 0);

        let bestBuy = prices[0];
        let profit = 0;
        for(let i = 1; i < prices.length; i++){
            if(prices[i]<bestBuy){
                bestBuy = prices[i];
            }
            profit=Math.max(profit, prices[i]-bestBuy);
        }
        return profit;


    }
}
