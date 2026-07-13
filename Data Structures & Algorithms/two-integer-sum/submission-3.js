class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        if(nums.length===2)return [0,1];

        // key of hash map:
        // key-value pair: which is value? Which is index?
        // here use value as index => check index in hash map is O(1)
        const diffs = {};

        for(let i = 0; i < nums.length; i ++){
            const diff = target - nums[i];
            if(diffs[diff] !== undefined){
                return [diffs[diff], i]
            }
            diffs[nums[i]] = i;
            
        }

    }
}
