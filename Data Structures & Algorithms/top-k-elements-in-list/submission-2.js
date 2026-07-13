class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        if(nums.length===1)return nums;

        const count = {};
        for(let i = 0; i < nums.length; i++){
            const num = nums[i];
            if(!count[num]){
                count[num]=1;
            }else{
                count[num]++;
            }
        }
        
        return Object.keys(count)
            .sort((a, b) => count[b] - count[a])
            .slice(0, k)
    
        
    }
}
