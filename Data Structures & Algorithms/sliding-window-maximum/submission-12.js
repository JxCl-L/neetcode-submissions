class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let max = nums[0];
        let maxIndex = 0;
        // let second = nums[0];
        // let secondIndex = 0;
        let output = [];
        for(let i = 0; i < nums.length; i++){
            if(nums[i] >= max){
                // second = max;
                // secondIndex = maxIndex;
                max = nums[i];
                maxIndex = i;
            }
            if(i>=k-1){
                if(maxIndex <= i - k && nums[i] < max){
                    let newMax = Number.MIN_SAFE_INTEGER;
                    for(let j = i - k + 1; j <= i; j++){
                        if(nums[j] > newMax){
                            newMax = nums[j];
                            maxIndex = j;
                        }
                    }
                    max = newMax;
                    
                }
                output.push(max);
            }
            

        }
        return output;
    }
}
