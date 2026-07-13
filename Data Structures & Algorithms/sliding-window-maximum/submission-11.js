class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {

        const deque = [];
        const output = [];

        for(let i =0; i < nums.length; i++){

            // remove out of window index from right
            if(deque.length && i-k >= deque[0]){
                deque.shift();
            }
            // remove former index with smaller value from back
            while(deque.length && nums[deque[deque.length-1]] < nums[i]){
            deque.pop();
        }

            // add this to deque
            deque.push(i);

            // add max to output
            if(i >= k-1)output.push(nums[deque[0]]);

        }
        return output;
    }
}
