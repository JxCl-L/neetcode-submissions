class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    numSubseq(nums, target) {
        
        nums.sort((a, b) => a - b);
        const MOD = 1e9 + 7;

        let count = 0;
        let min = 0;
        let max = nums.length-1;
        while(min <= max){

            while(nums[min]+nums[max]>target){
                max--;
            }
            if(min>max)break;
            console.log("min max",min,max,"count", count, "+", max-min+2);
            // count =(count + 2**(max-min))% MOD;
            let add = 1;
            for (let i = 0; i < max-min; i++) {
                add = add * 2 % MOD;
            }
            count = (count + add) % MOD;

            min++;
        }
        return count;
        
        
    }
}
