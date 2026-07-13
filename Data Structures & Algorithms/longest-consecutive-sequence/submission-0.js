class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length===0||nums.length===1)return nums.length;

        const set = new Set(nums);
        let longest = 0;
        
        for(const num of set){
            if(set.has(num-1))continue;

            let length = 1;
            while(set.has(num+length)){
                length++;
            }

            longest = Math.max(longest, length);
        }
        return longest;


    }
}
