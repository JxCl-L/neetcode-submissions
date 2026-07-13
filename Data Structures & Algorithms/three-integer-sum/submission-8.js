class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        // if(nums.length === 3){
        //     return [nums];
        // }
        // not guranteed!!!

        // convert to 2 sum
        nums.sort((a, b) => a - b);
        const triplets = [];
        for(let i = 0; i < nums.length - 2; i++){
            const first = nums[i];
            if(i>0 && first === nums[i-1])continue;

            let left = i + 1;
            let right = nums.length-1;
            while(left < right){
                const sum = first + nums[left] + nums[right];
                if(sum === 0){
                    triplets.push([first, nums[left], nums[right]]);
                    while(left + 1 < nums.length && nums[left]===nums[left+1]){left++;}
                    while(right - 1 > 0 && nums[right]===nums[right-1]){right--;}
                    left ++;
                    right --;
                }else if(sum > 0){
                    
                    right --;
                }else{
                    left ++;
                }
            }
        }
        return triplets;
    }
}
